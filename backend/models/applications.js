import mongoose from "mongoose";

const { Schema } = mongoose;

const applicationSchema = new Schema(
  {
    application_categories: [{ type: String, required: true }],
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
