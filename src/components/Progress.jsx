import React from 'react'
import { PROGRESS_IMG1 } from '../contants/utils'
import { motion } from 'framer-motion'

const Progress = () => {
  return (
    <section className='font-inter max-w-[1100px] overflow-hidden mx-auto'>
        <h3 className='text-[3rem] leading-10 md:leading-0 text-center font-semibold font-inter'>Your Archive of progress</h3>
        <div 
            className='my-10 flex flex-wrap justify-center gap-10'>
            <motion.div
                initial={{ opacity: 1, scale: 1, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.9 }}
             className='md:max-w-[45%] px-5 md:px-0'>
                <div className='bg-[#FCFCFC] rounded-lg border pt-10'>
                    <h5 className='text-center font-semibold'>Projects</h5>
                    <p className='text-[#525252] text-sm text-center'>Organize, follow, and archive.</p>
                    <img src={PROGRESS_IMG1} className='w-[450px] mx-auto' alt="" />
                </div>
            </motion.div>
            <motion.div
                    initial={{ opacity: 1, scale: 1, x: 100 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                className='md:max-w-[45%] px-5 md:px-0'>
                <div className='bg-[#FCFCFC] rounded-lg border pt-10'>
                    <h5 className='text-center font-semibold'>Member profiles</h5>
                    <p className='text-[#525252] text-sm text-center'>Automatic portfolios of your work.</p>
                    <img src={PROGRESS_IMG1} className='w-[450px] mx-auto' alt="" />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Progress