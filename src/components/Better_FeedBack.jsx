import React from 'react'
import { FEEDBACK_IMG, PLAY_BTN, TICK_IMG } from '../contants/utils'
import Button from './Button'

const Better_FeedBack = () => {
  return (
    <section>
        <div className='share_container'>
          <div className='share_2'>
            <div className='img_bg'>  
              <img src={FEEDBACK_IMG} alt="" />
            </div>
          </div>
          <div className='share_1'>
            <Button text="Share" />
            <h3 className='share_header'>Better feedback at the right time.</h3>
            <p>
            Campsite has been instrumental in keeping designers aware of
            each others' work-in-progress in a way that was previously
            slowing us down. It's also one of the only channels where.
            </p>
            <div className='share_2_img_container' >
              <img src={PLAY_BTN} alt="" />
              <p>See how it works</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Better_FeedBack