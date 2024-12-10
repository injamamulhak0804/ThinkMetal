import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text}) => {
  return (
    <Link to="/error">
      <button 
    style={{ animationDelay: '0.9s' }}
    className='px-7 hover:bg-transparent hover:text-gray-600 
    outline outline-2 transition-all duration-1300 hover:shadow-2xl linear outline-[#FB432C] py-3 font-inter 
    font-medium text-sm rounded-3xl bg-[#FB432C] text-white animate-fadeIn'>{text}</button>
    </Link>
  )
}

export default Button