"use client";
import Image from 'next/image';
import React from 'react'
import Tilt from "react-parallax-tilt"
import { FaLongArrowAltRight } from "react-icons/fa";
const ServiceCard = ({title, icon}) => {
  return (
    <div>
          <Tilt className='bg-white dark:bg-gray-800 rounded-lg p-4 ' >
           <div className='w-20 h-20 text-white bg-blue-100 rounded-full mx-auto flex flex-col items-center justify-center'>
             <Image src={icon} alt='icon' width={40} height={40} />
           </div>
           <h1 className='text-center mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300'>
             {title}
           </h1>
           <p className=' text-center text-gray-400 dark:text-gray-300 mx-auto leading-6 text-md mt-2 p-4 '>
             There are many variations passages of Lorem lpsum majority, some words don’t look believable if you are going to use.
           </p>
           <div className="text-center mx-auto mb-4 text-xl flex items-center justify-center space-x-2 text-gray-800 dark:text-gray-200 mt-4 font-semibold cursor-pointer transition-all duration-200 hover:text-red-500">
            <span>Learn More</span>
              <FaLongArrowAltRight />
           </div>
          </Tilt>
    </div>
  )
}

export default ServiceCard