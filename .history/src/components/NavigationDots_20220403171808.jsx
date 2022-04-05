import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {["home", "about", "contact", "work", "skills"].map((item, i) => (
                  <Link
                    to={item}
                    duration={500}
                    isDynamic={true}
                    activeClass="activeLink"
                   onClick={() => setToggle(false)}
                  >
                    {item}
                  </Link>
        )}
    </div>
  )
}

export default NavigationDots