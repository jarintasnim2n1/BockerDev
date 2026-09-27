import Sectionheading from '@/components/Sectionheading'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' data-aos="fade-up" className='py-20 dark:bg-gray-950 '>
        <Sectionheading clr={"text-green-700"} heading={"Our Contact Information"} subheading={"Join Our Workplaces Around The World"} />
     <div className='flex items-center justify-center mt-7'>
      <Image width={1000} height={800} alt="img" src="/images/map.png"/>
     </div>
     <div className='w-[85%] md:w-[80%] mx-auto'>
        {/* form */}
        <h1 className='font-bold mt-16 text-2xl md:text-3xl dark:text-white'>Send Message</h1>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center mt-8'>
          <input 
            type="email" 
            placeholder="Your email" 
            className='h-14 w-full rounded-3xl bg-transparent border border-gray-300 dark:border-gray-700 px-6 text-gray-700 dark:text-gray-200 focus:outline-none focus:border-pink-500 placeholder-gray-500'
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className='h-14 w-full rounded-3xl bg-transparent border border-gray-300 dark:border-gray-700 px-6 text-gray-700 dark:text-gray-200 focus:outline-none focus:border-pink-500 placeholder-gray-500'
          />
          <input 
            type="text" 
            placeholder="Website" 
            className='h-14 w-full rounded-3xl bg-transparent border border-gray-300 dark:border-gray-700 px-6 text-gray-700 dark:text-gray-200 focus:outline-none focus:border-pink-500 placeholder-gray-500'
          />
        </div>
        <div className='mt-8'>
          <textarea 
            rows={6}
            placeholder="Your Message Here..." 
            className='w-full bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-6 text-gray-700 dark:text-gray-200 focus:outline-none focus:border-pink-500 placeholder-gray-500 resize-none'
          />
        </div>
        <div className='mt-6 flex justify-center'>
          <button type='button' className='h-14 px-10 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl text-xl cursor-pointer transition duration-200 shadow-md hover:shadow-lg'>
            Submit
          </button>
        </div>
      </div>
     </div>
    
  )
}

export default Contact