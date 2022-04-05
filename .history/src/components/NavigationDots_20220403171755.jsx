import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {["home", "about", "contact", "work", "skills"].map((item, i) => (
                <a key={i}
                    href={}
                >
                    {item}
                </a>
        )}
    </div>
  )
}

export default NavigationDots