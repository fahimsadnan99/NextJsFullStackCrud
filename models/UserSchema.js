import { Schema, model, models } from "mongoose";
import JWT from "jsonwebtoken";

const UserSchema = new Schema({
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
    minLength: [5, "Email Must be Greater then 5"],
    maxLength: [35, "Email Must be Less then 20"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

// UserSchema.methods.JWTgenerate = function () {
//   let token = JWT.sign(
//     {
//       _id: this._id,
//       name: this.name,
//       email: this.email,
//       role: this.role,
//     },
//     process.env.JWT,
//     {
//       expiresIn: "7d",
//     }
//   );

//   return token;
// };

export default models.user || model("user", UserSchema);
