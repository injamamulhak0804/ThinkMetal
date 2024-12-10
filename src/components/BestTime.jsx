import React from 'react'
import Button from "./Button"
import {BEST_TIME_IMG, BEST_TIME_PROFILE_IMG, POLLS_IMG, TICK_IMG_OUTLINE} from "../contants/utils"
import { IoIosArrowForward } from "react-icons/io";
import { CiAt } from "react-icons/ci";

const BestTime = () => {
  return (
    <section>
        <div className='bestTime_container'>
            <p>Best time here</p>
            <h3 className="bestTime_header">Better feedback at the right time.</h3>
            <div className="feedback_div">
                <div className="feedback_content_container">
                    <div className='feedback_content_1'>
                            <div className='feedback_sub_content1'>
                                <div><img src={BEST_TIME_IMG} alt="" /></div>
                                <div className='feedback_sub_img_content'>
                                    <h4>Cloudhub</h4>
                                    <p>2m ago in Brand</p>
                                </div>
                            </div>
                            <div>
                                <Button text="view post"/>
                            </div>
                        
                    </div>
                    <div className='feedback_content_2'>
                        <div className='feedback_sub_content2'>
                            <div><img src={BEST_TIME_PROFILE_IMG} alt="" /></div>
                            <div>
                                <p>3 people are looking for feedback this week</p>
                            </div>
                        </div>
                        <div><IoIosArrowForward style={{color:"#777777"}} /></div>
                    </div>
                </div>
            </div>
            <div className="feedback_sub_containers">
                <div>
                    <CiAt style={{fontWeight:"800"}} />
                    <h4>Mentions</h4>
                    <p>Mention anyone on your team
                    to include them in a post.</p>
                </div>
                <div>
                    <img src={POLLS_IMG} alt="" />
                    <h4>Polls</h4>
                    <p>Get a quick gut check from
                    the team on design options.</p>
                </div>
                <div>
                    <img src={TICK_IMG_OUTLINE} alt="" />
                    <h4>Resolve comments</h4>
                    <p>Mark comments as resolved to
                    keep the conversation focused.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestTime