"use client";
import React, { useEffect, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const ScrollToTop = () => {
    const [isVisible, setIsVisible]=useState(false);
    useEffect(()=>{
        const toggleVisibility=()=>{
            if(window.scrollY>300)setIsVisible(true);
            else setIsVisible(false);
        } 
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div className='fixed bottom-16 animate-pulse right-8'>
     {isVisible && <button className='bg-purple-800 cursor-pointer text-white h-12 w-12 rounded-full flex items-center justify-center focus:outline-none' onClick={scrollToTop}> <FaArrowUpLong className='w-6 h-6' />
        </button>}
    </div>
  )
}

export default ScrollToTop