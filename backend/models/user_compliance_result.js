import mongoose from "mongoose";

const { Schema } = mongoose;

const userComplianceResultSchema = new Schema(
  {
    user_email: { type: String, required: true },
    response: [{ type: Schema.Types.Mixed }],
    recommended_applications: [{ type: Schema.Types.ObjectId, required: true }],
    email_sent: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);

const UserComplianceResult = mongoose.model(
  "UserComplianceResult",
  userComplianceResultSchema
);

export default UserComplianceResult;
