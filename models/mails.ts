import mongoose, { Document, Schema, Types } from "mongoose";

export interface MailsT extends Document {
  subject: string;
  content?: string;
  sentBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MailSchema = new Schema<MailsT>({
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  sentBy: {
    type: String,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

MailSchema.set("timestamps", true);
export default mongoose.models?.Mails ||
  mongoose.model<MailsT>("Mails", MailSchema);
