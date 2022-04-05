import React from 'react'
import {Link} from 'react-scroll'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">

        {
            ["home", "about", , "work", "skills"].map((item, i) => (
                    <Link
                        key={i}
                        to={item}
                        duration={500}
                        isDynamic={true}
                        activeClass="activeLink"
                        className="app__navigation-dot"
                        style={active  === item ? {backgroundColor: '#313BAC'} : {}}
                    />
            ))
        }
    </div>
  ) 
}

export default NavigationDots