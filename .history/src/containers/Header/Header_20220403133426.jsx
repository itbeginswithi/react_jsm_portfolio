import React from 'react'
import { motion } from 'framer-motion'

import './Header.scss'
import {images} from '../../constants'

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className="app_header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              pointer
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header