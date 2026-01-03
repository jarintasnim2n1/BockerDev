import React from 'react'

const PricingCard = ({price, title}) => {
  return (

        <div className=' text-center bg-white  dark:bg-gray-800 rounded-lg p-6 '>
            <h1 className='text-2xl mt-3 md:text-3xl text-gray-900 dark:text-gray-100 font-bold '> {title} </h1>
            <h3 className='text-gray-500 mb-6 mt-4 font-medium text-xl dark:text-gray-400 '>Monthly packagee</h3>
            <p className='text-black font-bold text-2xl dark:text-white'> <span className='text-2xl md:text-5xl'> $ {price} </span> /month </p>
            <div className='text-gray-700 dark:text-gray-400 font-medium leading-10 mt-4 text-lg '>
                <p>Unlimited updates & projects</p>
                <p>Custom permissions</p>
                <p>Custom instructors</p>
                <p>Custom designs & features</p>
                <div className=' mt-5 h-10 w-35 rounded-xl bg-pink-500 flex items-center justify-center p-6 mx-auto hover:bg-pink-700 transition-all duration-200 text-center '>
                    <h1 className='text-white text-xl whitespace-nowrap'>Get Started</h1>
                </div>
            </div>
        </div>
    
  )
}

export default PricingCard