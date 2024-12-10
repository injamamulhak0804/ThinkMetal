import React from 'react'
import { FEEDBACK_IMG, PLAY_BTN, TICK_IMG } from '../contants/utils'
import Button from './Button'

const Better_FeedBack = () => {
  return (
<section className='font-inter max-w-[1100px] mx-auto'>
<div className='flex flex-wrap px-5 md:px-0 justify-between gap-10'>
  <div className='w-[100%] md:w-[50%]'>
    <div className='bg-[#FAFAFA] rounded-lg'>  
      <img className='image-animation' src={FEEDBACK_IMG} alt="" />
    </div>
  </div>
  <div className='w-[100%] leading-[3rem] md:leading-0  md:w-[40%]  flex flex-col items-start gap-4'>
    <Button text="Feedback" />
    <h3 className='text-[3rem] font-semibold font-inter'>Better feedback at the right time.</h3>
    <p className='text-[#5F6980] md:text-sm text-md leading-8'>
    Campsite has been instrumental in keeping designers aware of
    each others' work-in-progress in a way that was previously
    slowing us down. It's also one of the only channels where.
    </p>
    <div className='flex items-center gap-2 font-medium' >
      <img src={PLAY_BTN} alt="" />
      <p>See how it works</p>
    </div>
  </div>
</div>
</section>
  )
}

export default Better_FeedBack