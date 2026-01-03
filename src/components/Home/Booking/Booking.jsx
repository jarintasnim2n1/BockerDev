import Sectionheading from '@/components/Sectionheading'
import React from 'react'

const Booking = () => {
  return (
    <div className='py-20 bg-gray-200 dark:bg-gray-900'>
        <div>
           <div data-aos="fade-left">
             <Sectionheading   clr={"text-red-600"} heading={"Booking"} subheading={"Book service online"} />
           </div>
           <div  data-aos="fade-right" data-aos-delay="400" className='flex flex-col items-center justify-center'>
             <p className='w-[50%] text-gray-900 dark:text-gray-300 text-center  '>
                The fastest way to talk to one of our Customer Service agents about your bookings. Yes any cancellation fees are determined by the property. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quis. Quasi natus dolorum illo quam voluptatem nostrum quod inventore excepturi!
            </p>
            <div  data-aos="fade-down" data-aos-delay="600" className=' w-26 text-center p-2 rounded-lg py-2   mt-5 bg-pink-600 hover:bg-pink-800 mb-6'>
                <h1 className='font-bold whitespace-nowrap '>Book Now</h1>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Booking