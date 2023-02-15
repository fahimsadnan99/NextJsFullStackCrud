import { dbConnect, runMiddleware } from "../../../../util/index";
import morgan from "morgan";
import TaskSchema from "models/TaskSchema";

dbConnect();

export default async (req, res) => {

  let { body, method} = req;


  
  let Morgan = morgan("dev");
  switch (method) {
    case "GET": {
      try {
        let task = await TaskSchema.find();
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    }

    case "POST": {
      try {
        let addTask = await TaskSchema.findOne({ email: body.email.toLowerCase() });
        if (addTask) return res.status(400).json({ msg: "Email Already Added" });
        let task = new TaskSchema(body);
        await task.save();
        return res.status(201).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    }

    default: {
      return res.status(400).json({ msg: "METHOD NOT ALLOW" });
    }
  }
};
