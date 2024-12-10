import React from 'react'
import {LOGO} from "../contants/utils"
import Button from './Button'

const Header = () => {
  return (
    <nav className='flex mt-4 justify-between font-inter'>
        <div className='flex w-24'>
            <img src={LOGO} className='mr-14' alt="" />
          <ul className='flex items-center text-sm gap-8'>
            <li>Product </li>
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Integrations</li>
            <li>Developers</li>
          </ul>
        </div>
        <div>
          <button className='mr-3'>Login</button>
          <Button text="Start for free" />
        </div>
    </nav>
  )
}

export default Header