"use client"
import React from 'react'
import MotionDiv from './MotionDiv'
import Card from './Card'
import './component.css'
import { ButterflyWave, PulseSphere, RotatingRing, SimpleLoader, WavyBars, WavyPulses } from 'spinny-loader'

function ComponentExamples() {
    const cardTxtColor = {
        1: "text-blue-500",
        2: "text-orange-400",
        3: "text-purple-600",
        4: "text-green-500",
        5: "text-cyan-500",
        6: "text-red-500"
    }
  return (
    <div>
        <div className='grid md:grid-cols-2 mt-4 bg-black h-auto lg:h-auto'>
            
            <div className='hidden md:flex bg-black justify-center items-center'>
                <MotionDiv x={-30} y={0} delay={.3}>
                    <h2 className="text-6xl text-center md:text-8xl tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-700 font-sans font-bold">Examples</h2>
                </MotionDiv>
            </div>
            


            <div className='flex flex-col md:justify-center  items-center'>
                <MotionDiv x={-30}>
                    <h3 className='text-[#70e000] md:hidden text-4xl font-bold'>Examples</h3>
                </MotionDiv>

                <div className=' flex flex-wrap justify-center items-center mt-10 md:mt-0'>
                    <MotionDiv y={40} duration={.2} delay={.3}>
                        <Card textColor={cardTxtColor[1]} componentName='WavyPulses'> <WavyPulses size='.9rem' /></Card>
                    </MotionDiv>
                    
                    <MotionDiv y={40} duration={.2} delay={.4}>
                        <Card textColor={cardTxtColor[2]} componentName='WavyBars'> <WavyBars color='orange' /></Card>
                    </MotionDiv>

                    <MotionDiv y={40} duration={.2} delay={.5}>
                        <Card textColor={cardTxtColor[6]} componentName='SimpleLoader'> <SimpleLoader size='2.5rem' /></Card>
                    </MotionDiv>

                    <MotionDiv y={40} duration={.2} delay={.6}>
                        <Card textColor={cardTxtColor[4]} componentName='PulseSphere'> <PulseSphere size='2.5rem' color='#70e000' /></Card>
                    </MotionDiv>

                    <MotionDiv y={40} duration={.2} delay={.7}>
                        <Card textColor={cardTxtColor[5]} componentName='RotatingRing'> <RotatingRing size='2.5rem'/></Card>
                    </MotionDiv>

                    <MotionDiv y={40} duration={.2} delay={.8}>
                        <Card textColor={cardTxtColor[3]} componentName='ButterflyWave'> <ButterflyWave width='.4rem' /></Card>
                    </MotionDiv>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComponentExamples