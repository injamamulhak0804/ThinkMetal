import React from 'react'
import { CODE_IMG, COMPANY1, COMPANY2, COMPANY3, COMPANY4, COMPANY5, COMPANY6, COMPANY7, HERO_IMG, PLAY_BTN, TICK_IMG } from '../contants/utils'
import Button from './Button'


const ShareAnything = () => {
  return (
    <>
      <section>
        <div className='share_container'>
          <div className='share_1'>
            <Button text="Share" />
            <h3 className='share_header'>Share anything you’re working on.</h3>
            <p>
              Campsite has been instrumental in keeping designers aware of
              each others' work-in-progress in a way that was previously
              slowing us down. It's also one of the only channels where.
            </p>
            <div className='share_1_img_container'>
              <div>
                <img src={TICK_IMG} alt="" />
                <p>Coded</p>
              </div>
              <div>
                <img src={TICK_IMG} alt="" />
                <p>100% Secure</p>
              </div>
            </div>
            <div className='share_2_img_container' >
              <img src={PLAY_BTN} alt="" />
              <p>See how it works</p>
            </div>
          </div>
          <div className='share_2'>
            <div className='img_bg'>  
              <img src={CODE_IMG} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShareAnything