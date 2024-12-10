import React from 'react'
import { CODE_IMG, COMPANY1, COMPANY2, COMPANY3, COMPANY4, COMPANY5, COMPANY6, COMPANY7, HERO_IMG, PLAY_BTN, TICK_IMG } from '../contants/utils'
import Button from './Button'


const ShareAnything = () => {
  return (
    <>
      <section className='mt-52 font-inter'>
        <div className='flex justify-between gap-10'>
          <div className='share_1 w-[50%] flex flex-col items-start gap-4'>
            <Button text="Share" />
            <h3 className='text-[3rem] font-semibold font-inter'>Share anything you’re working on.</h3>
            <p className='text-[#5F6980] text-sm'>
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
          <div>
            <div className='bg-[#FAFAFA] rounded-lg'>  
              <img src={CODE_IMG} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShareAnything