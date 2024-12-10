import React from 'react'
import { TESTIMONIAL_IMG1, TESTIMONIAL_IM2, TESTIMONIAL_PROFILE_IM1, TESTIMONIAL_PROFILE_IM2 } from '../contants/utils'

const Testimonials = () => {
  return (
    <section className='bg-[#F9FAFB]'>
      <div className='py-20 gap-20 font-inter flex items-start justify-center'>
        <div className='max-w-[35%]'>
          <img className='w-10' src={TESTIMONIAL_IMG1} alt="" />
          <p className='text-[14px] font-normal py-5'>
          Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures.
          </p>
          <div className='flex items-center gap-2'>
            <img src={TESTIMONIAL_PROFILE_IM1} alt="" />
            <div>
              <p className='text-[16px] font-semibold'>Gabriel Valdivia</p>
              <p className='text-xs text-[#737373]'>Principal Product Designer, Patreon</p>
            </div>
          </div>
        </div>

        <div className='max-w-[35%]'>
          <img className='w-8' src={TESTIMONIAL_IM2} alt="" />
          <p className='text-[14px] font-normal py-5'>
          Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.
          </p>
          <div className='flex items-center gap-2'>
            <img src={TESTIMONIAL_PROFILE_IM2} alt="" />
            <div>
              <p className='text-[16px] font-semibold'>Buzz Usborne</p>
              <p className='text-xs text-[#737373]'>Principal Designer, Buildkite</p>
            </div>
          </div>
        </div>
        
      </div>

      
    </section>
  )
}

export default Testimonials