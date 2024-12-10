import React from 'react'
import { FEEDBACK_IMG, PLAY_BTN, TICK_IMG } from '../contants/utils'
import Button from './Button'

const Better_FeedBack = () => {
  return (
<section className='mt-52 font-inter'>
<div className='flex justify-between gap-10'>
  <div>
    <div className='bg-[#FAFAFA] rounded-lg'>  
      <img src={FEEDBACK_IMG} alt="" />
    </div>
  </div>
  <div className='w-[50%] flex flex-col items-start gap-4'>
    <Button text="Feedback" />
    <h3 className='text-[3rem] font-semibold font-inter'>Better feedback at the right time.</h3>
    <p className='text-[#5F6980] text-sm'>
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