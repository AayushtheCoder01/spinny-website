import React from 'react'
import { LuNavigation } from "react-icons/lu";
import MotionDiv from './MotionDiv';
import ComponentExamples from './ComponentExamples';
function Homepage() {
  return (
    <>
    <div className='text-white w-full bg-black'>
        <MotionDiv x={0} y={20} duration={.3}>
            <div className='flex h-[30vh] md:h-[50vh] justify-center items-center '>
                <h2 className="text-6xl text-center md:text-8xl tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-700 font-sans font-bold">Spinny Loader</h2>
            </div>
        </MotionDiv>

        <div className='flex flex-col justify-around items-center px-10 sm:flex-row'>
        <MotionDiv duration={.2} delay={0.3} repeat={true}>
            <div className='flex flex-col h-auto w-auto justify-center items-center'>
                <h4 className='text-xl '>Install</h4>
                
                <div className='bg-zinc-900 italic text-zinc-500 md:text-lg text-[12px] px-5 flex justify-center items-center p-4 mt-2 rounded-sm '>
                    <p className='text-red-500 mr-1'>npm </p> i  <p className='text-orange-500 mr-1 px-1'> spinny-loader</p>
                </div>
            </div>
        </MotionDiv>

                <MotionDiv delay={0.4} repeat={true}>
                    <div className='w-[2px] h-[7rem] sm:h-[2px] m-1 sm:w-[10rem] text-transparent bg-gradient-to-r from-neutral-500 to-neutral-700 font-sans font-bold'>
                        
                    </div>
                    </MotionDiv>

        <MotionDiv duration={.2}  delay={0.6} repeat={true}>
            <div className='flex flex-col h-auto w-auto justify-center items-center'>
                <h4 className='text-xl '>Import</h4>
                
                <div className='bg-zinc-900 flex px-5 md:text-lg text-[12px] justify-center items-center p-4 mt-2 rounded-sm '>
                    <p className='text-purple-600 mr-1'>import </p> <p className='text-cyan-500 mr-1'> {"{ SimpleLoader }"} </p> <p className='text-purple-600 mr-1'>from</p> <p className='text-green-500'>'spinny-loader'</p> 
                </div>
            </div>
        </MotionDiv>

                    <MotionDiv delay={0.7} repeat={true}>
                        <div className=' w-[2px] h-[7rem] sm:h-[2px] m-1 sm:w-[10rem] text-transparent bg-gradient-to-r from-neutral-500 to-neutral-700 font-sans font-bold'>
                        
                        </div>
                        </MotionDiv>

    <MotionDiv duration={.2} delay={0.9} repeat={true}>
        <div className='flex flex-col h-auto w-auto justify-center items-center'>
                <h4 className='text-xl'>Use</h4>
                
                <div className='text-orange-400 italic md:text-lg text-[12px] bg-zinc-900 px-5 flex justify-center items-center p-4 mt-2 rounded-sm '>
                    {"<SimpleLoader />"}
                </div>
            </div>
    </MotionDiv>
        </div>

    <MotionDiv x={0} y={20} delay={1.1} duration={.5}>
        <div className='flex h-[20vh] sm:h-[35vh] justify-center items-center'>
            <button className='shadow-btn w-15 py-2 flex justify-center items-center bg-zinc-900 border-[2px] border-[#70e000] rounded-md p-1 px-4'><p>DOCS </p> <p className='text-blue-500 mx-1 font-extrabold'><LuNavigation size={"1rem"}/></p></button>
        </div>
        </MotionDiv>
    </div>

    <div>
        <ComponentExamples/>
    </div>
    </>
  )
}

export default Homepage