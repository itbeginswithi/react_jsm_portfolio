import React from 'react'
import { motion } from 'framer-motion'

import './Header.scss'
import {images} from '../../constants'

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration}}
      >

      </motion.div>
    </div>
  )
}

export default Header