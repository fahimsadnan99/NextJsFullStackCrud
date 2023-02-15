import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Required"],
      minLength: [3, "Name Must be Greater then 2"],
      maxLength: [15, "Name Must be Less then 15"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      minLength: [5, "Email Must be Greater then 2"],
      maxLength: [35, "Email Must be Less then 20"],
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
    versionKey : false
  }
);

export default models.task || model("task", taskSchema);
