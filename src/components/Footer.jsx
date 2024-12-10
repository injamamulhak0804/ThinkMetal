import React from 'react'
import { LOGO_ORANGE } from '../contants/utils'
import Button from "./Button"

const Footer = () => {
  return (
    <>
      <section>
        <div className='flex flex-col font-inter justify-center items-center'>
            <img src={LOGO_ORANGE} className='w-10' alt="" />
            <h3 className='md:text-[1.5rem] text-[1rem] px-6 md:px-0 font-semibold text-center font-inter'>Increase your team’s visibility and alignment</h3>
            <p className='text-xs my-5 text-[#525252]'>Start for free, flexible for all teams.</p>
            <div className='mt-10 flex gap-2  items-center'>
                <button className='cursor-pointer md:me-5 font-semibold'>Request a demo</button>
                <Button text="Start for free" />
            </div>
        </div>
    </section>
    <footer className='mt-[150px] font-inter  max-w-[80%] mx-auto'>
         <div className='md:flex flex-wrap justify-between gap-20 items-start'>
            <img className='w-10 mb-10' src={LOGO_ORANGE} alt="" />
         <div className='mb-10'>
            <p className='font-medium mb-3 text-sm'>Product</p>
            <p className='text-[#5F6980] text-xs mb-3'>Features</p>
            <p className='text-[#5F6980] text-xs mb-3'>Pricing</p>
            <p className='text-[#5F6980] text-xs mb-3'>Changelog</p>
            <p className='text-[#5F6980] text-xs mb-3'>Support</p>
         </div>
         <div className='mb-10'>
            <p className='font-medium mb-3 text-sm'>Legal</p>
            <p className='text-[#5F6980] text-xs mb-3'>Terms of Privacy</p>
            <p className='text-[#5F6980] text-xs mb-3'>Privacy Policy</p>
            <p className='text-[#5F6980] text-xs mb-3'>Security</p>
         </div>
         <div className='mb-10'>
            <p className='font-medium mb-3 text-sm'>Company</p>
            <p className='text-[#5F6980] text-xs mb-3'>Blog</p>
            <p className='text-[#5F6980] text-xs mb-3'>Contact</p>
         </div>
         <div className='mb-10'>
            <p className='font-medium mb-3 text-sm'>Social</p>
            <p className='text-[#5F6980] text-xs mb-3'>Dribbble</p>
            <p className='text-[#5F6980] text-xs mb-3'>Behance</p>
            <p className='text-[#5F6980] text-xs mb-3'>Discord</p>
         </div>
         </div>
         <p className='text-center text-[#5F6980] text-xs my-10'>All rights reserved.© 2024 ThinkMetal</p>
    </footer>
    </>
  )
}

export default Footer