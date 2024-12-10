import React from 'react'
import { PROGRESS_IMG1 } from '../contants/utils'

const Progress = () => {
  return (
    <section className='font-inter max-w-[1100px] mx-auto'>
        <h3 className='text-[3rem] leading-10 md:leading-0 text-center font-semibold font-inter'>Your Archive of progress</h3>
        <div className='my-10 flex flex-wrap justify-center gap-10'>
            <div className='md:max-w-[45%] px-5 md:px-0'>
                <div className='bg-[#FCFCFC] rounded-lg border pt-10'>
                    <h5 className='text-center font-semibold'>Projects</h5>
                    <p className='text-[#525252] text-sm text-center'>Organize, follow, and archive.</p>
                    <img src={PROGRESS_IMG1} className='w-[450px] mx-auto' alt="" />
                </div>
            </div>
            <div className='md:max-w-[45%] px-5 md:px-0'>
                <div className='bg-[#FCFCFC] rounded-lg border pt-10'>
                    <h5 className='text-center font-semibold'>Member profiles</h5>
                    <p className='text-[#525252] text-sm text-center'>Automatic portfolios of your work.</p>
                    <img src={PROGRESS_IMG1} className='w-[450px] mx-auto' alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Progress