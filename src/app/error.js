// import React from 'react'
'use client';

import { useEffect } from "react"

const error = ({error,reset}) => {
    useEffect(()=>{
        console.log('error')
    },[error])
  return (
    <div className="text-center mt-10">
<h1>somthing went wrong</h1>
<button onClick={()=>reset()}>Try Again</button>

    </div>
  )
}

export default error