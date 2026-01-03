import { NAVLINKS } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { TbEyeClosed } from "react-icons/tb";
const MobileNav = ({showNav, closeNav}) => {
   const sideBarOpenClose =showNav? "translate-x-0": "translate-x-[-100%]";
  return (
      <div className={`text-white fixed -mt-10 justify-center ${sideBarOpenClose} flex items-center opacity-85 flex-col h-full bg-gradient-to-b from-purple-700 via-purple-500 to-purple-400 transform transition-all duration-500 delay-300 sm:w-[60%] w-[80%] space-y-5 z-30 `}>
       {NAVLINKS.map((link)=>{
        return (
          <Link key={link.id} href={link.url} > <p className='text-white w-fit  text-xl flex  pb-1 sm:text-2xl hover:text-yellow-300 hover:text-xl transition duration-200'> {link.label} </p> </Link>
        )
       })}
     <TbEyeClosed onClick={closeNav} className='text-white  absolute top-[4.7rem] right-[2.8rem] sm:w-8 sm:h-8 w-6 h-6 ' />
      </div>
   
  )
}

export default MobileNav