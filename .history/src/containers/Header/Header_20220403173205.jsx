import React from 'react'
import { motion } from 'framer-motion'

import './Header.scss'
import {AppWrapper}
import {images} from '../../constants'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className="app_header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className="p__text">Hello, I am</p>
              <h1 className="head-text">Micael</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p__text">Web Developer</p>
            <p className="p__text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{scale: [0,1]}}
          transition={{duration: 0.5, delayChildren: 0.5}}
          src={images.circle}
          alt="overlay_circle"
          className="overlay_circle"
          draggable="false"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, i) => (
          <div className="circle-cmp app__flex" key={`circle-${i}`}>
            <img src={circle} alt="circle"/>
          </div>
        )) } 
      </motion.div>
    </div>
  )
}

export default Header