import React from 'react'
import { CODE_IMG, COMPANY1, COMPANY2, COMPANY3, COMPANY4, COMPANY5, COMPANY6, COMPANY7, HERO_IMG, PLAY_BTN, TICK_IMG } from '../contants/utils'
import Button from './Button'


const ShareAnything = () => {
  return (
    <>
      <section className='font-inter max-w-[1100px] mx-auto'>
        <div className='flex flex-wrap px-5 md:px-0 justify-between gap-10'>
          <div className='w-[100%] leading-[3rem] md:leading-0  md:w-[40%]  flex flex-col items-start gap-4'>
            <Button text="Share" />
            <h3 className='text-[3rem] font-semibold my-6 font-inter'>Share anything you’re working on.</h3>
            <p className='text-[#5F6980] md:text-sm text-md leading-8'>
              Campsite has been instrumental in keeping designers aware of
              each others' work-in-progress in a way that was previously
              slowing us down. It's also one of the only channels where.
            </p>
            <div className='flex gap-5'>
              <div className='flex gap-2'>
                <img src={TICK_IMG} alt="" />
                <p className='font-light text-sm'>Coded</p>
              </div>
              <div className='flex gap-2'>
                <img src={TICK_IMG} alt="" />
                <p className='font-light text-sm'>100% Secure</p>
              </div>
            </div>
            <div className='flex items-center gap-2 font-medium' >
              <img src={PLAY_BTN} alt="" />
              <p>See how it works</p>
            </div>
          </div>
          <div className='w-[100%] md:w-[50%]'>
            <div className='bg-[#FAFAFA] rounded-lg'>  
              <img className='image-animation' src={CODE_IMG} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShareAnything