import React from 'react'
import { CODE_IMG_BOTTOM } from '../contants/utils'

const KeepEveryOne = () => {
  return (
    <section>
        <div className='bg-[#FB432C] font-inter md:text-center text-white px-4 pt-[30%] md:px-[8%] md:py-[5%]'>
            <h3 className="text-4xl leading-9 font-semibold mb-3">Keep every one in the loop.</h3>
            <p className='text-xs font-normal font-inter md:max-w-[30%] mx-auto text-[#FFFFFF] opacity-90'>All good things starts with a homepage. Get inspired without breaking your wallet.</p>
            <button className='text-black hover:text-white hover:bg-transparent hover:outline my-10 bg-white font-inter px-7 py-3 font-medium text-sm rounded-3xl'>Start for free</button>
            <img src={CODE_IMG_BOTTOM} className='w-[90%] mx-auto' alt="" />
        </div>
    </section>
  )
}

export default KeepEveryOne