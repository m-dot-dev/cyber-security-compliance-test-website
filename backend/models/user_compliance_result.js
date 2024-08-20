import mongoose from "mongoose";

const { Schema } = mongoose;

const userComplianceResultSchema = new Schema(
  {
    // user_email: { type: String, required: true },
    total_score: { type: Number, default: 0 },
    total_questions: { type: Number, default: 0 },
    user_score: { type: Number, default: 0 },
    result: [{ type: Schema.Types.Mixed }],
    recommended_applications: [{ type: Schema.Types.ObjectId }],
    email_sent: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

const UserComplianceResult = mongoose.model(
  "UserComplianceResult",
  userComplianceResultSchema
);

export default UserComplianceResult;
