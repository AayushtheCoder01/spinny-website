"use client"
import React from 'react'

function Card({children, componentName, textColor= "white"}: {children?: React.ReactNode, componentName?: string, textColor?: string}) {
  return (
    <div>
        <div className='example-card flex flex-col m-3 p-2 pt-3 border-[1px] border-r-[1px] border-t-[1px] border-l-[1px] border-b-[1px] border-zinc-900 rounded-2xl md:mt-5 bg-neutral-950 h-[20vh] w-[40vw] md:w-[15vw] md:h-[40vh] justify-center items-center'>
            <div className='flex justify-center items-center bg-zinc-900 rounded-xl p-2 h-[65%] w-[90%]'> 
              {children}
            </div>

            <div className='flex justify-center items-center h-[30%] w-full'>
              <p className={`${textColor}`}>
                {`<${componentName} />`}
              </p>
            </div>
        </div>
    </div>
  )
}

export default Card