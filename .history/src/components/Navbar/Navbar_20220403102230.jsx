import React, { useState } from "react";
import {Link} from "react-scroll";

import "./Navbar.scss";
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import {images} from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "work", "skills", "contact"].map(
          (item, i) => (
            <li key={i} className="app__flex p-text">
              <div />
              <Link
                to={item}
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                delay={100}
                isDynamic={true}  
                activeClass="activeLink"
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)}/>
            {toggle && (
              
            )}
      </div>
    </nav>
  );
};

export default Navbar;