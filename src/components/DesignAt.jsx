import React from 'react'
import { CODE_IMG_BOTTOM, DESIGN_COMPANY1, DESIGN_COMPANY2, DESIGN_COMPANY3, DESIGN_COMPANY4, DESIGN_COMPANY5, DESIGN_COMPANY6, DESIGN_COMPANY7, DESIGN_COMPANY8 } from '../contants/utils'

const DesignAt = () => {
  return (
    <section>
        <h3 className="text-3xl px-3 md:text-4xl md:text-center text-start font-inter font-semibold mb-3">Loved By Designers At</h3>
        <div className='flex flex-wrap justify-center mt-10 max-w-[80%] mx-auto gap-5'>
            <img className='max-w-52' src={DESIGN_COMPANY1} alt="" />
            <img className='max-w-52' src={DESIGN_COMPANY2} alt="" />
            <img className='max-w-52' src={DESIGN_COMPANY3} alt="" />
            <img className='max-w-52' src={DESIGN_COMPANY4} alt="" />
            <img className='max-w-52' src={DESIGN_COMPANY5} alt="" />
            <img className='max-w-52' src={DESIGN_COMPANY6} alt="" />
            <img className='max-w-52' src={DESIGN_COMPANY7} alt="" />
            <img className='max-w-52' src={DESIGN_COMPANY8} alt="" />
        </div>
    </section>
  )
}

export default DesignAt