import {connect,connection} from "mongoose"

let connectionTest = {
    isConnected : false
}

export const dbConnect = async()=>{
    
    if(connectionTest.isConnected) return

    let db = await connect(process.env.DB)

    connectionTest.isConnected = db.connections[0].readyState

}


connection.on("connected",()=>{
  
    console.log("Mongodb Connection Successful");
})


connection.on("error",(err)=>{
    console.log("Mongodb Connection fail", err.message);
})

