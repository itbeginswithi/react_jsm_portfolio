import React from 'react'

import { NavigationDots, socialMedia } from '../components';

const AppWrapper = (Component, idName, classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>

        <div className="app__wrapper app__flex"
    </div>
  )
}

export default AppWrapper