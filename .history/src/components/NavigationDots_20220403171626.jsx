import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {["home", "about", "contact", "work", "skills"].map(
              (item) => (
                <li key={`link-${item}`} className="app__flex p-text">
                  <Link
                    to={item}
                    // spy={true}
                    // smooth={true}
                    // hashSpy={true}
                    // offset={50}
                    duration={500}
                    isDynamic={true}
                    activeClass="activeLink"
                   onClick={() => setToggle(false)}
                  >
                    {item}
                  </Link>
                </li>
                
    </div>
  )
}

export default NavigationDots