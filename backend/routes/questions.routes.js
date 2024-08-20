import express from "express";

import Question from "../models/questions.js";
import UserComplianceResult from "../models/user_compliance_result.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const question = await Question.create(req.body);
    return res.send({ data: question });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.send({ data: question });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find(
      {},
      { heading: 1, question: 1, "answers.answer": 1 }
    );
    return res.send({ data: questions });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.post("/result", async (req, res) => {
  try {
    const questions = await Question.find({});
    let totalScore = 0;
    let totalQuestions = 0;
    let userScore = 0;
    const result = questions.map((question) => {
      const selectedAnswer = req.body[question._id];
      if (selectedAnswer) {
        const response = question.answers.find(
          (answer) => answer.answer === selectedAnswer
        );
        if (response) {
          userScore += response.points;
          totalQuestions += 1;
          totalScore += question.points;
          return {
            heading: question.heading,
            response: response.response,
          };
        }
      }
    });

    const userComplianceResult = new UserComplianceResult({
      user_email: req.body.email,
      total_score: totalScore,
      total_questions: totalQuestions,
      user_score: userScore,
      result: result,
    });
    await userComplianceResult.save();
    return res.send({ data: userComplianceResult });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("/result/:email", async (req, res) => {
  const { email } = req.params;
  try {
    console.log(email);
    const result = await UserComplianceResult.findOne({
      user_email: undefined,
    });
    return res.send({ data: result });
  } catch (error) {
    return res.status(400).send(error);
  }
});

export { router as questionRouter };
