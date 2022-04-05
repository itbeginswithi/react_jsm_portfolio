import React from "react";
import Link from "react-scroll";

import "./Navbar.scss";
import images from "../../constants";

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
                to="target"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
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
