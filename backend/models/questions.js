import mongoose from "mongoose";

const { Schema } = mongoose;

const answersSchema = new Schema(
  {
    answer: { type: String, required: true },
    points: { type: Number, required: true },
    response: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const questionSchema = new Schema(
  {
    application_categories: [{ type: String, required: true }],
    sector_categories: [{ type: String, required: true }],
    question: { type: String, required: true },
    answers: [answersSchema],
  },
  { versionKey: false, timestamps: true }
);

const Question = mongoose.model("question", questionSchema);

export default Question;
