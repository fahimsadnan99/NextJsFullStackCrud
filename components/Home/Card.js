import React from 'react'

const Card = () => {
  return (
    <div className='w-60 border-2 border-black/25 rounded-lg shadow-lg shadow-black/30 text-center p-1'>
     <p className='text-lg font-semibold'>Fahim Sadnan</p>

     <p className='text-lg font-semibold'>FahimSadnan@gmail.com</p>
     <p className='text-lg font-semibold'>Chittagong</p>
     <p className='text-lg font-semibold'>25 Years Old</p>
     <div className='flex justify-around items-center my-2'>
        <button className='bg-slate-800 text-white font-bold px-2 py-1 '>Edit</button>
        <button className='bg-red-600 text-white font-bold px-2 py-1 '>Delete</button>
     </div>
    </div>
  )
}

export default Card