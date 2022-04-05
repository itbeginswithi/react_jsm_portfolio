import React, {useState} from 'react'

import './Footer.scss'
import {AppWrapper, MotionWrap} from '../../wrapper'
import { images } from '../../constants'

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>take a coffee and chat with me</h2>
    </>
  )
}

export default AppWrapper(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')