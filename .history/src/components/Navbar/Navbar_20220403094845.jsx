import React from "react";
import {Link} from "react-scroll";

import "./Navbar.scss";
import {images} from "../../constants";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar">
        {["home", "about", "contact", "work", "skills", "contact"].map(
          (item, i) => (
            <li key={i} >
              <div />
              <Link
                style={{cursor: "pointer"}}
                to={item}
                spy={true}
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                delay={100}
                isDynamic={true}  
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;