import express from "express";

import Question from "../models/questions";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    return res.send(questions);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const question = await Question.create(req.body);
    return res.send(question);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("attempt/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const question = await Question.findOne({ email: email });
    return res.send(question);
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
    return res.send(question);
  } catch (error) {
    return res.status(400).send(error);
  }
});

export { router as questionRouter };
