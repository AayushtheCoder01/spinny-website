"use client"
import Image from 'next/image'
import React from 'react'
import Bullet from './Bullet'
import MotionDiv from './MotionDiv'

function Info() {
  return (
    <div>
        <MotionDiv x={0} y={20}>
            <h2 className="text-4xl mt-[5rem] text-center md:text-6xl tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-700 font-sans font-bold">About me</h2>
        </MotionDiv>
        <div className='h-[40vh] sm:h-[80vh] m-2 pt-10 grid sm:grid-cols-2'>

            <div className='flex h-full justify-center items-center'>
                <MotionDiv x={-20} y={20} delay={.4} >
                    <div className='rounded-full'>
                        <Image width={400} height={400} src={"https://avatars.githubusercontent.com/u/143237858?v=4"} className='rounded-full border-[#70e000] border-l-[15px] border-b-[15px] h-[25vh] w-auto md:h-[40vh]' alt='github avatar image'/>
                        <h4 className='text-center m-1 mt-5 italic font-semibold tracking-wider text-lg text-[#70e000]'>Aayush Kumar</h4>
                    </div>
                </MotionDiv>
            </div>


        <MotionDiv x={20} delay={.4}>
            <div className='flex flex-col mt-[3vh] sm:mt-[7vh] h-full justify-start items-start'>
                <p className='p-5 text-lg pr-20'> I am Aayush Kumar 🙂 and I have created this project.
                    I wanted to create a project which actually simplify the process of 
                    Development and i found making an animated loader in every project is 
                    quite challenging, personally i have never created a Loader for any of my project 😉. 
                    So i decided to create a npm package for it 🚀.
                </p>

                <div className='flex pl-5 justify-start items-start'>
                    <h2 className="text-2xl inline-block mt-5 md:text-3xl text-[#70e000] font-sans font-bold">Tech <p className='italic inline-block'>Stack</p></h2>
                </div>

                <div className='flex w-full flex-wrap h-auto mt-1 p-3'>
                    <Bullet text='HTML'/>
                    <Bullet text='CSS'/>
                    <Bullet text='React.js'/>
                    <Bullet text='TypeScript'/>
                    <Bullet text='Next.js'/>
                    <Bullet text='Tailwind'/>
                    <Bullet text='Node.js'/>
                    <Bullet text='Express.js'/>
                    <Bullet text='Hono.js'/>
                    <Bullet text='PostgreSQL'/>
                    <Bullet text='Prisma'/>
                    <Bullet text='MongoDB'/>
                </div>
                </div>
            </MotionDiv>
        </div>
    </div>
  )
}

export default Info