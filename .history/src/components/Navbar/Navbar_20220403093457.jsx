import React from 'react'

import './Navbar.scss'
import {logo} from '../../constants/images'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt="logo"/>
        </div>        
    </nav>
  )
}

export default Navbar