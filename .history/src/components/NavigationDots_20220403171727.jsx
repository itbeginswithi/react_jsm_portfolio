import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {["home", "about", "contact", "work", "skills"].map((item, i) => (
                <li key={instanceof} className="app__flex p-text">
                  <Link
                    to={item}
                    duration={500}
                    isDynamic={true}
                    activeClass="activeLink"
                   onClick={() => setToggle(false)}
                  >
                    {item}
                  </Link>
                </li>
        )}
    </div>
  )
}

export default NavigationDots