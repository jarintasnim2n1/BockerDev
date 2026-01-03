import Sectionheading from '@/components/Sectionheading'
import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className='py-24 bg-white dark:bg-black'>
    <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>
       <div data-aos="fade-right" >
         <Image width={500} height={500} src={"/images/a1.png"} alt='image' className='shadow-lg rounded-md'/>
       </div>
       <div data-aos="fade-left" >
        <Sectionheading clr="text-purple-800" heading=" About us " subheading="We Are The Leader  in Web Design"/>
       <p className='text-xl text-gray-600 dark:text-gray-500'>A powerful web design is the one where the user is encouraged to stay on the site and not bounce to some other simple tips that will improve the bounce rate tremendously.</p>
       <div className='inline-flex gap-16'>
         <div className='flex flex-col items-center justify-center mt-4'>
            <h1 className='text-pink-700 text-2xl md:text-5xl lg:text-8xl   font-bold'>53K</h1>
        <p className='text-xl md:text-2xl text-gray-600 font-medium '>Layout Done</p>
        </div>
        <div className='flex flex-col items-center justify-center mt-4'>
            <h1 className='text-pink-700 text-2xl md:text-5xl lg:text-8xl font-bold'>10K</h1>
        <p className='text-xl md:text-2xl text-gray-600 font-medium'>Project Done</p>
        </div>
        <div className='flex flex-col items-center justify-center mt-4'>
            <h1 className='text-pink-700 text-2xl md:text-5xl lg:text-8xl font-bold'>120</h1>
        <p className='text-xl md:text-2xl text-gray-600 font-medium '>Get Awards</p>
        </div>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Feature