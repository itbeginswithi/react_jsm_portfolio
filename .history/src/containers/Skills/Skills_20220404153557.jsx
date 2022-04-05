import React, {useState} from 'react'
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import {AppWrapper} from '../../wrapper'
import {images} from '../../constants'
import './Skills.scss'

const skills = [
  {},
];

const experiences = [
  {},
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
            >
              <div className="app__flex" style={{}}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills