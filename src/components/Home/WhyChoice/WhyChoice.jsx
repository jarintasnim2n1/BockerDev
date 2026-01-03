import Sectionheading from '@/components/Sectionheading'
import Image from 'next/image'
import React from 'react'
import { FaRocket } from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
const WhyChoice = () => {
  return (
    <div className='py-20'>
        <div className='w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-40 '>
            <div data-aos="fade-left" className='flex flex-col items-center justify-center mb-3 '>
                <Sectionheading clr={"text-red-600"} heading={"Why Choose"} subheading={"Specialist in aviding clients on financial challenges"}/>
              <p className='text-lg text-gray-700 dark:text-gray-400'>Corporate headquarters is the part of a corporate structure that deals with important tasks such as strategic planning,</p>
             <div className='flex items-center justify-center gap-8 mt-6 mb-8'>
                <div className='w-15 h-15 rounded-full bg-red-500 flex items-center justify-center '>
                    <FaRocket className='w-8 h-8 text-white' />
                </div>
                <div>
                    <h1 className='text-xl sm:text-lg text-black dark:text-gray-400 font-medium'>Fast Working Process</h1>
                <p className='sm:text-md text-lg text-gray-700 w-[70%] '>Corporate headquarters is the part of a corporate structure that deals with important</p>
                </div>
             </div>
             <div className='flex items-center justify-center gap-8 mb-8'>
                <div className='w-15 h-15 rounded-full bg-blue-600 flex items-center justify-center '>
                    <FaHammer  className='w-8 h-8 text-white' />
                </div>
                <div>
                    <h1 className='text-xl sm:text-lg text-black dark:text-gray-400 font-medium'>Dedicated Team</h1>
                <p className='sm:text-md text-lg w-[70%] text-gray-700 '>Corporate headquarters is the part of a corporate structure that deals with important</p>
                </div>
             </div>
             <div className='flex items-center justify-center gap-8'>
                <div className='w-15 h-15 rounded-full bg-green-600 flex items-center justify-center '>
                    <RiCustomerServiceFill className='w-8 h-8 text-white' />
                </div>
                <div>
                    <h1 className='text-xl sm:text-lg text-black dark:text-gray-400 font-medium'>24/7 Hours Support</h1>
                <p className='sm:text-md text-lg w-[70%] text-gray-700 '>Corporate headquarters is the part of a corporate structure that deals with important</p>
                </div>
             </div>
            </div>
            <div data-aos="fade-right">
                <Image src={"/images/wc.png"} width={600} height={600} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default WhyChoice