import React from 'react'
import Button from './Button'
import { COMPANY1, COMPANY2, COMPANY3, COMPANY4, COMPANY5, COMPANY6, COMPANY7, HERO_IMG } from '../contants/utils'
import { TypeWriter } from '../contants/helper'

const Hero = () => {
  return (
    <>
        <main className='relative md:text-center font-inter  px-5 md:px-0 md:mt-20 mt-10 max-w-[1100px] mx-auto'>
            <h1 
            style={{ animationDelay: '0.8s' }}
            className='md:text-[3.2rem] animate-fadeOut text-[2.5rem] text-start md:text-center leading-[2.6rem] md:leading-[3.7rem] md:max-w-[75%] font-semibold md:mx-auto font-inter'>
              <span><TypeWriter/></span> 
            synthetic surveillance broadly.</h1>
            <p 
            style={{ animationDelay: '0.9s' }}
            className='text-[#5f5f5fe0] animate-fadeOut text-start md:text-center font-inter text-sm my-6 md:my-5'>
              Start with a stunning homepage. Stay motivated without hurting your pocket.
            </p>
            <button 
              style={{ animationDelay: '1s' }}
              className='px-7 hover:bg-transparent hover:text-gray-600 
              outline outline-2 transition-all duration-1300 hover:shadow-2xl linear outline-[#FB432C] py-3 font-inter 
              font-medium text-sm rounded-3xl bg-[#FB432C] text-white animate-fadeOut'>Start for free</button>
            <p 
            style={{ animationDelay: '1.1s' }}
            className='text-[#A3A3A3] animate-fadeOut hidden md:block  text-xs mt-3'>Want to talk or get a live demo? <span className='text-black font-medium'>Get in touch →</span></p>
            <img 
            style={{ animationDelay: '1s' }}
            className='w-full absolute -z-10 animate-fadeOut top-[150%] md:top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={HERO_IMG} alt="" />
            <p 
            className='text-[#A3A3A3]  md:hidden left-[42%] transform -translate-x-1/2 -translate-y-1/2 text-xs absolute -bottom-[300px]'>
              Want to talk or get a live demo? 
              <span className='text-black font-medium'>Get in touch →</span>
            </p>
        </main>

        <div className='relative flex overflow-x-hidden max-w-[1100px] mx-auto'>
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