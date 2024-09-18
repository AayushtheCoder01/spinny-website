"use client"
import React from 'react'
import "./component.css"
import { FaNpm } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuNavigation } from "react-icons/lu";
function Header() {
  return (
    <div className='flex bg-transparent border-b dark:border-zinc-800 backdrop-blur bg-zinc-950 text-black p-3 justify-between'>

        <div className='text-3xl rounded-lg p-1 font-bold flex justify-center items-center'>  
            {/* <h1 className='font-manrope font-black bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400))]'>
                Spinny Loader
            </h1> */}

            <h1 className='text-3xl text-white font-bold text-zinc-300'>

              Spinny-loader
            </h1>
        </div>

        <div className='text-3xl dark:text-white flex justify-center items-center p-1'>
          <a target='_blank' href='https://www.npmjs.com/package/spinny-loader' className='px-4 cursor-pointer '><FaNpm size={"2rem"} color='red' /></a>
          <a target='_blank' href='https://github.com/AayushtheCoder01/spinny-loader' className='px-4 cursor-pointer'><FaGithub size={"1.5rem"} /></a>
          <a target='_blank' href='https://github.com/AayushtheCoder01/spinny-loader' className='pl-2 hover:underline cursor-pointer text-xl font-semibold'>docs </a>
          <a target='_blank' href='https://github.com/AayushtheCoder01/spinny-loader' className='pr-4 text-sm cursor-pointer'><LuNavigation size={"1rem"} color='lime'/> </a>
        </div>

    </div>
  )
}

export default Header