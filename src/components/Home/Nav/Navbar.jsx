"use client";
import ThemeToggler from '@/components/Helper/ThemeToggler';
import { NAVLINKS } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { SiWebex } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({openNav}) => {
 
  const [navBg, setNavBg]=useState(false);
  useEffect(()=>{
   const handler=()=>{
     if(window.scrollY>=90)setNavBg(true);
    else setNavBg(false);
   }
   window.addEventListener("scroll",handler);
   
   return ()=> window.removeEventListener("scroll",handler);
  },[]
  )
  return (
    <div className={`transition-all ${navBg?"dark:bg-gray-900 bg-blue-950 opacity-85 shadow-md":"fixed"} duration-200 h-[12vh] z-10 fixed w-full bg-black `}>
      <div className='flex items-center h-full justify-between gap-6 md:gap-10 w-[90%] xl:w-[80%] mx-auto'>
          {/* logo */}
        <div className='flex items-center space-x-2 flex-shrink-0'>
          <div className='w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition  flex flex-col items-center  justify-center  duration-200'>
            <SiWebex className='text-black h-7 w-7 ' />
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl lg:text-3xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 bg-clip-text text-transparent font-bold'>WebDev</h1>
        </div>
        {/* Nav feature */}
        <div className='hidden lg:flex items-center space-x-8 xl:space-x-10'>
          {NAVLINKS.map((nav)=>{
           return(<Link key={nav.id} href={nav.url} className='text-white hover:text-yellow-200 font-semibold transition-all duration-200'>
            <p className='text-base xl:text-lg hover:text-yellow-300 transition duration-200'>{nav.label}</p>
           </Link>)
          })}
        </div>
        {/* button */}
        <div className='flex items-center space-x-4 flex-shrink-0'>
          <a href='#' className='text-yellow-200 font-semibold box-border whitespace-nowrap relative items-center inline-flex justify-center bg-gradient-to-r from-indigo-600 via-indigo-400 to-purple-600 py-2 px-5 overflow-hidden z-20 transition-all duration-200 rounded-md cursor-pointer group ring-offset-2 w-auto ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 hover:scale-105 ease focus:outline-none'>
            <span className='relative z-20 flex items-center text-sm md:text-base font-semibold'>
                Create Account
            </span>
          </a>
          <ThemeToggler/>
          <GiHamburgerMenu onClick={openNav} className='h-8 w-8 lg:hidden cursor-pointer text-white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar