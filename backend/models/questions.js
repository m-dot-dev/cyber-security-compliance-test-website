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
    heading: { type: String, required: true },
    question: { type: String, required: true },
    answers: [answersSchema],
    points: { type: Number },
  },
  { versionKey: false, timestamps: true }
);

answersSchema.pre("save", function (next) {
  this.total_points = this.answers.reduce(
    (total, answer) => total + answer.points,
    0
  );
  next();
});

const Question = mongoose.model("question", questionSchema);

export default Question;
