import React from 'react'
import Button from './Button'
import { COMPANY1, COMPANY2, COMPANY3, COMPANY4, COMPANY5, COMPANY6, COMPANY7, HERO_IMG } from '../contants/utils'

const Hero = () => {
  return (
    <>
        <main className='relative text-center font-inter mt-20'>
            <h1 className='text-[3.2rem] leading-[3.7rem] max-w-[75%] font-semibold mx-auto font-inter'>Create, inspect, and apply synthetic surveillance broadly.</h1>
            <p className='text-[#5f5f5fe0] font-inter text-sm my-3'>Start with a stunning homepage. Stay motivated without hurting your pocket.</p>
            <Button text="Start for free" />
            <p className='text-[#A3A3A3] text-xs mt-3'>Want to talk or get a live demo? <span className='text-black font-medium'>Get in touch →</span></p>
            <img className='w-full absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={HERO_IMG} alt="" />
        </main>
        
        <div className='relative flex overflow-x-hidden'>
        <div  className='flex items-center gap-x-24 mt-96 animate-marquee whitespace-nowrap' >
            <img className='w-28' src={COMPANY1} alt="" />
            <img className='w-28' src={COMPANY2} alt="" />
            <img className='w-28' src={COMPANY3} alt="" />
            <img className='w-28' src={COMPANY4} alt="" />
            <img className='w-28' src={COMPANY5} alt="" />
            <img className='w-28' src={COMPANY6} alt="" />
            <img className='w-28' src={COMPANY7} alt="" />
        </div>
        </div>
    </>
  )
}

export default Hero