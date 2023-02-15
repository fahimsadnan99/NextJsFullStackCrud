import { getSession, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {useGetPokemonByNameQuery} from "@/Redux/pokemonApi"

const index = () => {

 let {data: pokimonData}= useGetPokemonByNameQuery()
  console.log(pokimonData);
  const router = useRouter()
  const {data: session} =  useSession()
  if(session?.user?.role !== "admin"){
    return <p className='text-5xl text-red-800 mt-52'>This Page View Only Admin</p>
  }

  
  return (
    <div>This is Dashboard</div>
  )
}

export default index


export async function getServerSideProps({req}){
    const session =await getSession({req})

    if(session?.user?.role !== "admin"){
      return {
        redirect : {
          destination : "/",
          permanent : false
        }
      }
    }




  return {
    props:{
      data : null
    }
  }
}