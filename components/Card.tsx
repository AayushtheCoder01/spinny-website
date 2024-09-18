"use client"
import React from 'react'

function Card({children}: {children: React.ReactNode}) {
  return (
    <div>
        <div className='example-card flex m-3 p-1 border-[1px] border-r-[10px] border-t-[8px] border-l-[1px] border-b-[1px] border-zinc-900 rounded-2xl md:mt-5 bg-neutral-950 h-[20vh] w-[40vw] md:w-[20vw] md:h-[25vh] justify-center items-center'>
            {children}
        </div>
    </div>
  )
}

export default Card