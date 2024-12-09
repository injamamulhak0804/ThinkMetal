import React from 'react'
import {LOGO} from "../contants/utils"
import Button from './Button'

const Header = () => {
  return (
    <nav className='nav_container'>
        <div className='logo'>
            <img src={LOGO} alt="" />
          <ul className='nav_links_container'>
            <li>Product </li>
            <li>Home</li>
            <li>Shop</li>
            <li>Page</li>
            <li>Integrations</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className='nav_btn'>
          <button className='login_btn'>Login</button>
          <Button text="Start for free" />
        </div>
    </nav>
  )
}

export default Header