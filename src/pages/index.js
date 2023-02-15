import React from 'react'
import axios from 'axios'
import { getSession, useSession} from "next-auth/react"
import Card from 'components/Home/Card'


const cityName = ['dhaka',"chittagong","khulna"]

const index = ({data,session}) => {
  
 


  return (
    <div className='pt-5'>
     <div className='px-24 mx-auto'>
      <div className='flex justify-between items-center'>
     <input type="text" className='border-2' placeholder='email' />
     <input type="number" className='border-2' placeholder='start Age' />
     <input type="number" className='border-2' placeholder='End Age' />
     <select>
 <option value={null}>Select City</option>
 {cityName?.map((item,index)=>{
  return  <option key={index} value={item} style={{textTransform : "capitalize"}}>{item}</option>
 })}

     </select>
     <button className='bg-red-600 text-center px-3 py-2 text-white font-semibold'>Filter</button>
      <button className='text-2xl bg-black text-white p-2'>Add Task</button>
      </div>
          <div className='flex justify-center items-center gap-3 mt-5'>
 
                 <Card></Card>

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