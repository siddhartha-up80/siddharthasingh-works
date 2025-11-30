import mongoose, { Document, Schema } from "mongoose";

export interface ProjectT extends Document {
  title: string;
  type?: string;
  tech?: string;
  slug: string;
  img: string;
  description: string;
  details?: string;
  link: string;
  order: number;
  isQuickProject: boolean;
  color?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<ProjectT>({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  tech: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    default: 0,
  },
  isQuickProject: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

ProjectSchema.set("timestamps", true);

export default mongoose.models?.Project ||
  mongoose.model<ProjectT>("Project", ProjectSchema);
