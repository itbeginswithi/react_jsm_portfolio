import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {["home", "about", "contact", "work", "skills"].map((item, i) => (
                <a key={item} className="app__flex p-text">
                  <Link
                    to={item}
                    duration={500}
                    isDynamic={true}
                    activeClass="activeLink"
                   onClick={() => setToggle(false)}
                  >
                    {item}
                  </Link>
                </a>
        )}
    </div>
  )
}

export default NavigationDots