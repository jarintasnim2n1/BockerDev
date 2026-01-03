"use client";
import Image from 'next/image';
import React from 'react'
import { FaQuoteRight, FaStar } from "react-icons/fa";
const ReviewCard = ({item}) => {
  return (
    <div className='bg-gray-100 rounded-lg m-3 p-6 relative' >
    <FaQuoteRight className='w-8 h-8 absolute top-4 right-4 text-red-600 opacity-25' />
    <div className='mt-6 flex items-center'>
        {[...Array(5)].map((_,i)=>(
      <FaStar key={i} className='w-4 h-4 text-yellow-600' />
        ))}
    
    </div>
    <p className='mt-6 text-base text-gray-600 font-semibold'>
        {item.review}
    </p>
    <div className='w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6'></div>
    <div className='flex  items-center gap-6'>
        <Image src={item.userImage} alt='img' width={50} height={50} className='rounded-full' />
       <div >
        <h1 className='font-bold text-gray-800 '>{item.name}</h1>
        <p className='text-sm text-gray-500' >{item.profession}</p>
       </div>
    </div>
    </div>
  )
}

export default ReviewCard