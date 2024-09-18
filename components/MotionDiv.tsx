"use client"
import React, { useRef, useEffect } from 'react'
import {motion, useAnimation, useInView} from 'framer-motion'

function MotionDiv({children, x= -10, y= 0, duration=.3, delay=0, repeat=false}: {
    children?: React.ReactNode
    x?: number
    y?: number
    duration?: number
    delay?: number
    repeat?: boolean
}
) {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: repeat})
    const animationControls = useAnimation()
    
    useEffect(() => {
       if (isInView) {
            animationControls.start("visible")
       } 
    }, [isInView, animationControls])
  return (
    <div ref={ref}>
    <motion.div
    variants={{
        hidden: {
            x: x,
            y: y,
            opacity: 0
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1
    }
    }}
   initial="hidden"
    animate= {animationControls}
    transition={{
        duration: duration,
        delay: delay
    }}
    >
        {children}
    </motion.div>
    </div>
  )
}

export default MotionDiv