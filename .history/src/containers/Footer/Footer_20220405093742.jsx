import React, {useState} from 'react'

import './Footer.scss'
import {AppWrapper, MotionWrap} from '../../wrapper'
import { images } from '../../constants'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrapper(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')