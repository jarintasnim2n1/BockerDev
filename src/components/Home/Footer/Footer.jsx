import React from 'react'
import { SiWebex } from "react-icons/si";
import { TfiFacebook } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdDoubleArrow } from "react-icons/md";
import Image from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='py-20 bg-blue-950 dark:bg-blue-800'> 
    <div data-aos="fade-left" className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
         <div className='flex flex-col items-start justify-center' >
         <div className='flex items-center space-x-2 mb-5'>
                  <div className='w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition flex flex-col items-center justify-center duration-200'>
                    <SiWebex className='text-black h-7 w-7 ' />
                  </div>
                  <h1 className='text-xl hidden sm:block md:text-3xl hover:text-4xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 bg-clip-text text-transparent font-bold'>WebDev</h1>
                </div>
               <div className='flex flex-col items-start leading-7 justify-center'>
                <p className='font-medium text-gray-300'>Conditions & Terms of Use</p>
                <p className='font-medium text-gray-300'>Our Features & Services</p>
                <p className='font-medium text-gray-300'>Guest List & The Team</p>
                </div> 
            <div className='grid grid-cols-3 mt-6 gap-5'>
            <div className='h-10 w-10 rounded-lg bg-gray-500 flex items-center justify-center group cursor-pointer hover:bg-blue-500 transition-colors'>
              <TfiFacebook className='h-6 w-6 text-black group-hover:text-white transition-colors' />
            </div>    
            <div className='h-10 w-10 rounded-lg bg-gray-500 flex items-center justify-center group cursor-pointer hover:bg-red-600 transition-colors'>
             <IoLogoYoutube className='h-6 w-6 text-black group-hover:text-white transition-colors' />
            </div>    
            <div className='h-10 w-10 rounded-lg bg-gray-500 flex items-center justify-center group cursor-pointer hover:bg-pink-600 transition-colors'>
            <FaInstagram className='h-6 w-6 text-black group-hover:text-white transition-colors' />
            </div>    
            </div>    
     </div>
     <div className='lg:mx-auto'> 
      <h1 className='text-2xl font-bold text-gray-100'>Address</h1>
      <div className='flex items-center space-x-5 mt-8'>
        <FaPaperPlane className='w-8 h-8 text-white' />
        <p className='font-medium text-gray-300 '>Old city Street,Usa <br/> 1212 New york-3500</p>
      </div>
      <div className='flex items-center space-x-5 mt-6'>
        <BsTelephoneFill  className='w-8 h-8 text-white' />
        <p className='font-medium text-gray-300 '>01877852964</p>
      </div>
      <div className='flex items-center space-x-5 mt-6'>
        <MdMarkEmailUnread  className='w-8 h-8 text-white' />
        <p className='font-medium text-gray-300 '>jarintasnim2n1@gmail.com</p>
      </div>
     </div>
     <div className='lg:mx-auto'> 
      <h1 className='text-2xl font-bold text-gray-100'>More Services</h1>
      <div className='flex items-center space-x-5 mt-8'>
        <MdDoubleArrow className='w-8 h-8 text-white' />
        <p className='font-bold text-gray-300 text-xl'>UI Design</p>
      </div>
      <div className='flex items-center space-x-5 mt-6'>
        <MdDoubleArrow  className='w-8 h-8 text-white' />
        <p className='font-bold text-gray-300 text-xl'>UX Design</p>
      </div>
      <div className='flex items-center space-x-5 mt-6'>
        <MdDoubleArrow  className='w-8 h-8 text-white' />
        <p className='font-bold text-gray-300 text-xl'>Web App</p>
      </div>
      <div className='flex items-center space-x-5 mt-6'>
        <MdDoubleArrow  className='w-8 h-8 text-white' />
        <p className='font-bold text-gray-300 text-xl'>Blockchain Development</p>
      </div>
     </div>
     <div className='lg:mx-auto'> 
      <h1 className='text-2xl font-bold text-gray-100'>Newsletter</h1>
      <p className='font-bold text-gray-300 mt-5 text-xl '>It is a long established fact that a reader will be distracted</p>
       <div className='flex mt-5 items-center space-x-3'>
        <Image width={100} height={100} src={"/images/f.jpg"} alt='img' className='rounded-lg'/>
        <div>
          <div className='flex items-center space-x-3'>
         <FaRegCalendarAlt className='h-6 w-6 text-yellow-300 ' />
          <p className='font-bold text-gray-300 text-lg' >03 January, 2026</p>
        </div>
        <p className='font-bold text-gray-300 text-xl mt-3'>The standard chunk <br/> of BlockerDev</p>
        </div>

       </div>
     </div>
    </div>
     <div className='border-gray-500 border-t-2 mt-3 mx-auto w-[80%]'></div>
     <p className='font-bold text-gray-300 text-xl mt-6 text-center'>© BlockerDev 2026 | All Rights Reserved</p>
    </div>
  )
}

export default Footer