import React from 'react'
import Link from 'react-scroll'

import './Navbar.scss'
import images from '../../constants'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo} alt="logo"/>
        </div>    
        <ul>
            {['home', 'about', 'contact', 'work','skills', 'contact'].map((item, i) => (
                <li key={i}>
                    <div/>
                    <Link to={item}>
                </li>
            ))}
        </ul>    
    </nav>
  )
}

export default Navbar