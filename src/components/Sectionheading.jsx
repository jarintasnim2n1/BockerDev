import React from 'react'

const Sectionheading = ({clr,heading, subheading}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className={`text-xl md:text-2xl lg:text-4xl ${clr}  font-medium mb-4 `}> {heading} </h1>
        <p className='text-2xl md:text-5xl lg:text-7xl text-black dark:text-pink-800 font-bold mb-5 '> {subheading} </p>
     
    </div>
  )
}

export default Sectionheading