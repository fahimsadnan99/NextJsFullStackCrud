import React from 'react'
import axios from 'axios'
import { getSession, useSession} from "next-auth/react"


const index = ({data,session}) => {
  
 


  return (
    <div className='pt-5'>
     <div className='px-24 mx-auto'>
      <div className='flex justify-between items-center'>
     <input type="text" className='border-2' placeholder='Enter Name' />
     <input type="number" className='border-2' placeholder='Enter Age' />
      <button className='text-2xl bg-black text-white p-2'>Add Task</button>
      </div>
          <div>



          </div>


     </div>
    </div>
  )
}

export default index

export const getServerSideProps = async ({req}) => {
 let session = await getSession({req})

 if(!session){
  return {
    redirect : {
      destination : "/Signin",
      permanent : false
    }
  }
 }

let {data} = await axios.get("http://localhost:3000/api/task")

  return {
    props:{
      data : data,
      session
    }
  }
}