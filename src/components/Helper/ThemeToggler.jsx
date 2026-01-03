"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";


const ThemeToggler = () => {
    const [mounted, setMounted]=useState(false);
    const {theme, setTheme, systemTheme}=useTheme();

    useEffect(()=>{
        const mountCheck =()=> setMounted(true);
        mountCheck();
    },[])
    if(!mounted)return null;
    const currentTheme =theme==="system"?systemTheme: theme;
  return (
    <div>
    <button onClick={()=> setTheme( currentTheme==="dark"?"light":"dark")} className='p-2 w-10 h-10 rounded-full cursor-pointer transition bg-white flex flex-col items-center justify-center '>
        {currentTheme==="dark"? <BiSun className='w-7 h-7 cursor-pointer text-black items-center' />:<BiMoon className='w-7 h-7 cursor-pointer text-black items-center'/>}
    </button> 

    </div>
  )
}

export default ThemeToggler