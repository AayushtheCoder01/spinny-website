"use client"
import React from 'react'

function Info() {
  return (
    <div>
     <h2 className="text-4xl mt-[5rem] text-center md:text-6xl tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-700 font-sans font-bold">About me</h2>
        <div className='h-[40vh] sm:h-[80vh] m-2  grid sm:grid-cols-2'>

            <div className='flex h-full justify-center items-center'>
                <div className='rounded-full'>
                    <img className='rounded-full border-[#70e000] border-l-[15px] border-b-[15px] h-[20vh] w-auto md:h-[40vh]' src='https://avatars.githubusercontent.com/u/143237858?v=4'/>
                    <h4 className='text-center m-1 mt-5 italic font-semibold tracking-wider text-lg text-[#70e000]'>Aayush Kumar</h4>
                </div>
            </div>
        
            <div className='flex h-full justify-start items-center'>
                <p className='p-5 text-lg pr-20'> I'am Aayush Kumar 🙂 and I have created this project.
                    I wanted to create a project which actually simplify the process of 
                    Development and i found making an animated loader in every project is 
                    quite challenging, personally i have never created a Loader for any of my project 😉. 
                    So i decided to create a npm package for it 🚀.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Info