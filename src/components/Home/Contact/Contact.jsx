import Sectionheading from '@/components/Sectionheading'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div data-aos="fade-up" className='py-20 dark:bg-gray-950 '>
        <Sectionheading clr={"text-green-700"} heading={"Our Contact Information"} subheading={"Join Our Workplaces Around The World"} />
     <div className='flex items-center justify-center mt-7'>
      <Image width={1000} height={800} alt="img" src="/images/map.png"/>
     </div>
     <div >
        {/* form */}
        <h1 className='font-bold flex items-start ml-40 mt-16 text-xl  md:text-3xl  dark:text-white'>Send Message</h1>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  w-[80%] mx-auto  mt-10'>
        <div className='h-14 w-[70%] rounded-3xl bg-transparent border border-gray-300 p-2 '>
            <h1 className='text-gray-600 font-medium ml-3 mt-1 '>Your email</h1>
        </div>
        <div className='h-14 w-[70%] rounded-3xl bg-transparent border border-gray-300 p-2 '>
            <h1 className='text-gray-600 font-medium ml-3 mt-1  '>Phone Number</h1>
        </div>
        <div className='h-14 w-[70%] rounded-3xl bg-transparent border border-gray-300 p-2 '>
            <h1 className='text-gray-600 font-medium ml-3 mt-1  '>Website</h1>
        </div>
       </div>
      <div className='w-[90%] flex items-center justify-center'>
         <div className='h-70 w-[90%] mx-auto bg-transparent border-2 border-gray-400 rounded-lg mt-10'>
        <h1 className='text-gray-500 font-medium ml-5 mt-5 text-xl'> Your Message Here...</h1>
       </div>
      </div>
      <div className='h-14 w-26 bg-pink-700 hover:bg-pink-800  rounded-xl px-2 py-2 mx-auto  mt-5 flex items-center  justify-center'>
        <h1 className='font-medium text-center text-xl transition duration-200 '>Submit</h1>
      </div>
       </div>
     </div>
    
  )
}

export default Contact