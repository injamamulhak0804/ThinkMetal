import React from 'react'
import { ERROR_IMG } from '../contants/utils'

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <img src={ERROR_IMG} alt="" />
        <h2 className='text-[#FB432C] text-4xl font-inter'>Page not found</h2>
        <p className='font-inter text-center max-w-[40%] text-[#4B4B4B] my-7 mx-auto '>The page you're looking for isn't available. Try to search again or use the go back button below.</p>
        <button className='bg-[#FB432C] px-14 font-medium text-xl rounded-md text-white py-2'>Start for free</button>
    </div>
  )
}

export default ErrorPage