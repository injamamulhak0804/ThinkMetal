import { motion } from 'framer-motion';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export const TypeWriter = () =>{
    return <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration:3 }}
    className='md:text-[3.2rem] text-[2.5rem] text-start md:text-center leading-[2.6rem] md:leading-[3.7rem] md:max-w-[75%] font-semibold md:mx-auto font-inter'>
    <Typewriter
            words={['Create', 'Inspect', 'Apply',]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
  </motion.h2>
}