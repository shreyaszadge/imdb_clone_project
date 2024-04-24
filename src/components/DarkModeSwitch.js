// import React from 'react'
'use client'

import {MdLightMode,MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
const DarkModeSwitch = () => {
    const {theme,setTheme,systemTheme}=useTheme();
 const currenttheme=theme === 'system' ? systemTheme : theme
 const [mounted,setMounted]=useState(false)

 useEffect(()=>setMounted(true),[])
  return (
    <div>

{
    currenttheme === 'dark' ?
(<MdLightMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/>) :
(<MdDarkMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>)
}

    </div>
  )
}

export default DarkModeSwitch