import React, { useState } from 'react'
import {LOGO} from "../contants/utils"
import Button from './Button'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  // className='flex gap-1 items-center'
  
  return (
    <>
      <p className='scroll-watcher'></p>
      <nav className='flex mt-4 px-3 max-w-[1100px] mx-auto justify-between font-inter'>
          <div className='flex w-24'>
            <img src={LOGO} className='mr-14 z-20 animate-fadeIn' style={{ animationDelay: '0.1s' }} alt="" />  
            <ul className={`absolute md:relative z-10 bg-white p-10 md:p-0 w-full text-center ${isMenuOpen ? 'block' : 'hidden' } md:flex md:items-center md: gap-8 md:text-sm font-inter`}>
              <Link to="/error" className='flex items-center my-5 gap-2 md:my-0 justify-center text-center animate-fadeIn' style={{ animationDelay: '0.1s' }}>
                <span>Product</span> <span><IoIosArrowDown/></span>
              </Link>
              <li className='mb-5 md:mb-0 animate-fadeIn' style={{ animationDelay: '0.3s' }}><Link to="/error">Home</Link></li>
              <li className='mb-5 md:mb-0 animate-fadeIn' style={{ animationDelay: '0.4s' }}><Link to="/error">Shop</Link></li>
              <li className='mb-5 md:mb-0 animate-fadeIn' style={{ animationDelay: '0.5s' }}><Link to="/error">Pages</Link></li>
              <li className='mb-5 md:mb-0 animate-fadeIn' style={{ animationDelay: '0.6s' }}><Link to="/error">Integrations</Link></li>             
              <li className='mb-5 md:mb-0 animate-fadeIn' style={{ animationDelay: '0.7s' }}><Link to="/error">Developers</Link></li>
            </ul>
          </div>
          <div className='md:hidden z-10'>
            <button  onClick={toggleMenu} className='z-20 '>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          <div className='hidden md:flex items-center'>
            <Link to="/error">
            <button className='mr-3 animate-fadeIn' style={{ animationDelay: '0.7s' }}>Login</button></Link>
            <Link to="/error"><Button text="Start for free" /></Link>            
          </div>
      </nav>
    </>
  )
}

export default Header

// className='md:flex hidden items-center text-sm gap-8'