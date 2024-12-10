import React from 'react'

const Button = ({text}) => {
  return (
    <button className='px-7 hover:bg-transparent hover:text-gray-600 
    outline outline-2 transition-all duration-1300 hover:shadow-2xl linear outline-[#FB432C] py-3 font-inter 
    font-medium text-sm rounded-3xl bg-[#FB432C] text-white'>{text}</button>
  )
}

export default Button