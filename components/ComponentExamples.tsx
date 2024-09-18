"use client"
import React from 'react'
import MotionDiv from './MotionDiv'
import Card from './Card'
import './component.css'
import { ButterflyWave, PulseSphere, RotatingRing, ScalingPulses, SimpleLoader, WavyBars, WavyPulses } from 'spinny-loader'

function ComponentExamples() {
  return (
    <div>
        <div className='grid md:grid-cols-2 mt-4 bg-black h-[40vh] lg:h-[100vh]'>
            
            <div className='hidden md:flex bg-black justify-center items-center'>
                <MotionDiv x={-30} y={0} delay={.3}>
                    <h3 className=' text-[#70e000] text-2xl md:text-[4rem] lg:text-[6rem] font-bold'>Examples</h3>
                </MotionDiv>
            </div>
            


            <div className='flex flex-col md:justify-center items-center'>
                <MotionDiv x={-30}>
                    <h3 className='text-[#70e000] md:hidden text-4xl font-bold'>Examples</h3>
                </MotionDiv>

                <div className=' flex flex-wrap justify-center items-center mt-10 md:mt-0'>
                    <MotionDiv y={40} duration={.2} delay={.3}>
                        <Card > <WavyPulses size='.9rem' /></Card>
                    </MotionDiv>
                    
                    <MotionDiv y={40} duration={.2} delay={.4}>
                        <Card > <WavyBars color='orange' /></Card>
                    </MotionDiv>

                    <MotionDiv y={40} duration={.2} delay={.5}>
                        <Card > <SimpleLoader size='2.5rem' /></Card>
                    </MotionDiv>

                    <MotionDiv y={40} duration={.2} delay={.6}>
                        <Card > <PulseSphere size='2.5rem' color='#70e000' /></Card>
                    </MotionDiv>

                    <MotionDiv y={40} duration={.2} delay={.7}>
                        <Card > <RotatingRing size='2.5rem'/></Card>
                    </MotionDiv>

                    <MotionDiv y={40} duration={.2} delay={.8}>
                        <Card > <ButterflyWave width='.4rem' /></Card>
                    </MotionDiv>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComponentExamples