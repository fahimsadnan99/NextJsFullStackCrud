import { dbConnect } from "../../../../util/index";
import morgan from "morgan";
import UserSchema from "models/UserSchema";


dbConnect();


export default async function(req,res){
    morgan("dev")
   try{
       let users = await UserSchema.find()
       return res.status(200).json(users);
   }catch (err) {
      return res.status(400).json({ msg: err.message });
    }
}