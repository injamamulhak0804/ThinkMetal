import React from 'react'
import {LOGO} from "../contants/utils"

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
          <button className='common_btn'>Start for free</button>
        </div>
    </nav>
  )
}

export default Header