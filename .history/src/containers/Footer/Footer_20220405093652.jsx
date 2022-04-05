import React, {useState} from 'react'

import './Footer.scss'
import {AppWrapper, MotionWrap} from '../../wrapper'
import { images } from '../../constants'
import AppWrap from '../../wrapper/AppWrapper'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap(MotionWrap(Footer))