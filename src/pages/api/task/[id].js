import { dbConnect, runMiddleware } from "../../../../util/index";
import morgan from "morgan";
import TaskSchema from "models/TaskSchema";

dbConnect()


export default async function(req,res){

     let {method,body,query} = req
  morgan("dev")
     switch(method){
        case "GET" :{
            let task = await TaskSchema.findById({_id : query.id})
            if(!task) return res.status(404).json({msg : "Task Not Found"})
            return res.status(200).json(task)
            
           }


        case "PUT" :{
         let task = await TaskSchema.findByIdAndUpdate({_id : query.id},body,{new : true})
         if(!task) return res.status(404).json({msg : "Task Not Found"})
         return res.status(202).json(task)
        }


        case "DELETE" :{
            let task = await TaskSchema.findByIdAndDelete({_id : query.id},{new : true})
            if(!task) return res.status(404).json({msg : "Task Not Found"})
            return res.status(202).json(task)
           }

        default : {
            return res.status(400).json({msg : "Method not allow"})
        }
     }

}