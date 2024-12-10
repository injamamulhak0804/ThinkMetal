import React from 'react'
import Button from "./Button"
import {BEST_TIME_IMG, BEST_TIME_PROFILE_IMG, POLLS_IMG, TICK_IMG_OUTLINE} from "../contants/utils"
import { IoIosArrowForward } from "react-icons/io";
import { CiAt } from "react-icons/ci";

const BestTime = () => {
  return (
    <section>
        <div className='bg-[#FB432C] font-inter text-center text-white px-[8%] py-[5%]'>
            <p className='text-sm'>Best time here</p>
            <h3 className="text-4xl font-semibold mb-10">Better feedback at the right time.</h3>
            <div className="bg-[#111111] px-[40px] pb-[80px] rounded-xl">
                <div className="bg-[#222222] rounded-b-xl p-8">
                    <div className='flex justify-between flex-wrap gap-5 items-center'>
                            <div className='flex gap-x-2 items-center text-start text-[#737373]'>
                                <div><img className='w-10' src={BEST_TIME_IMG} alt="" /></div>
                                <div className='feedback_sub_img_content'>
                                    <h4 className='font-normal text-white pb-1'>Cloudhub</h4>
                                    <p className='text-sm'>2m ago in Brand</p>
                                </div>
                            </div>
                            <div>
                                <Button text="view post"/>
                            </div>
                        
                    </div>
                    <div className='flex justify-between mt-10 md:items-baseline items-end'>
                        <div className='flex gap-3 flex-wrap'>
                            <div><img className='w-16' src={BEST_TIME_PROFILE_IMG} alt="" /></div>
                            <div>
                                <p className='font-light text-[10px] md:max-w-[90%] text-start md:text-sm'>3 people are looking for feedback this week</p>
                            </div>
                        </div>
                        <div><IoIosArrowForward style={{color:"#777777"}} /></div>
                    </div>
                </div>
            </div>
            <div className="text-white gap-2 mt-2 flex flex-wrap">
                <div className='text-start p-8 rounded-lg bg-black md:max-w-[32.5%] flex flex-col gap-2'>
                    <CiAt style={{fontWeight:"800"}} />
                    <h4 className='font-medium'>Mentions</h4>
                    <p className='text-sm max-w-[75%] text-[#737373]'>Mention anyone on your team
                    to include them in a post.</p>
                </div>
                <div className='text-start p-8 rounded-lg bg-black md:max-w-[32.5%]  flex flex-col gap-2'>
                    <img className='w-[8%]' src={POLLS_IMG} alt="" />
                    <h4 className='font-medium'>Polls</h4>
                    <p  className='text-sm max-w-[75%] text-[#737373]'>Get a quick gut check from
                    the team on design options.</p>
                </div>
                <div className='text-start p-8 rounded-lg bg-black md:max-w-[32.5%] flex flex-col gap-2'>
                    <img className='w-[8%]' src={TICK_IMG_OUTLINE} alt="" />
                    <h4 className='font-medium'>Resolve comments</h4>
                    <p  className='text-sm max-w-[75%] text-[#737373]'>Mark comments as resolved to
                    keep the conversation focused.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestTime