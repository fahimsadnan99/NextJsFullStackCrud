import { dbConnect } from "../../../../util/index";
import morgan from "morgan";
import UserSchema from "models/UserSchema";
import bcrypt from "bcrypt";

dbConnect();

export default async function (req, res) {
  let { body, method } = req;
  
  morgan("dev");
  if (method == "POST") {
    try {
      let findUser = await UserSchema.findOne({ email: body.email.toLowerCase() });
      if (findUser) return res.status(403).json({ msg: "Email Already Exist" });

      let User = new UserSchema(body);

      User.password = await bcrypt.hash(body.password, 10);
       await User.save()
      return res.status(201).json({ msg : "Successful" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  }
}
