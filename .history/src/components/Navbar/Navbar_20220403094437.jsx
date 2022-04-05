import React from "react";
import Link from "react-scroll";

import "./Navbar.scss";
import {images} from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {["home", "about", "contact", "work", "skills", "contact"].map(
          (item, i) => (
            <li key={i}>
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
