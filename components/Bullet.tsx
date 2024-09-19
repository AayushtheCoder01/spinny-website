"use client"
import React from 'react'

function Bullet({text}: {text?: string}) {
  return (
    <div className='flex justify-center items-center bg-zinc-900 rounded-lg p-[.5rem] m-1.5'>
        <p className=''>🔥</p>
        <div className='h-1.5 w-1.5 bg-green-500 rounded-full '>
             
        </div>
        <p className='px-2'>{text}</p>
    </div>
  )
}

export default Bullet