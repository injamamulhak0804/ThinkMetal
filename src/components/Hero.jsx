import React from 'react'
import Button from './Button'
import { COMPANY1, COMPANY2, COMPANY3, COMPANY4, COMPANY5, COMPANY6, COMPANY7, HERO_IMG } from '../contants/utils'

const Hero = () => {
  return (
    <>
        <main className='hero_container'>
            <h1>Create, inspect, and apply synthetic surveillance broadly.</h1>
            <p className='hero_desc'>Start with a stunning homepage. Stay motivated without hurting your pocket.</p>
            <Button text="Start for free" />
            <p className='get_in_touch'>Want to talk or get a live demo? <span>Get in touch →</span></p>
            <img className='hero_img' src={HERO_IMG} alt="" />
        </main>
        <marquee className="marquree"  behavior="scroll" direction="left" scrollamount="10">
            <img src={COMPANY1} alt="" />
            <img src={COMPANY2} alt="" />
            <img src={COMPANY3} alt="" />
            <img src={COMPANY4} alt="" />
            <img src={COMPANY5} alt="" />
            <img src={COMPANY6} alt="" />
            <img src={COMPANY7} alt="" />
        </marquee>
    </>
  )
}

export default Hero