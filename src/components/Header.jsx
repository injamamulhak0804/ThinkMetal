import React, { useState } from 'react'
import {LOGO} from "../contants/utils"
import Button from './Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  
  return (
    <nav className='flex mt-4 px-5 justify-between font-inter'>
        <div className='flex w-24'>
            <img src={LOGO} className='mr-14 z-20' alt="" />  
          <ul className={`absolute md:relative z-10 bg-white p-10 md:p-0 w-full text-center ${isMenuOpen ? 'block' : 'hidden' } md:flex md:items-center md: gap-8 md:text-sm`}>
            <li>Product </li>
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Integrations</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className='md:hidden z-10'>
          <button onClick={toggleMenu} className='p-2 z-20'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className='hidden md:flex items-center'>
          <button className='mr-3'>Login</button>
          <Button text="Start for free" />
        </div>
    </nav>
  )
}

export default Header

// className='md:flex hidden items-center text-sm gap-8'