import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {["home", "about", "contact", "work", "skills"].map((item, i) => (
                  <Link
                    key={i}
                    to={item}
                    duration={500}
                    isDynamic={true}
                    activeClass="activeLink"
                    style={active === true ? "active" :}
                  >
                    {item}
                  </Link>
        )}
    </div>
  )
}

export default NavigationDots