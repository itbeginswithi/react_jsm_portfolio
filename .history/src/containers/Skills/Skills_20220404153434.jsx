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
          {skills.map((skills) => (
            <motion.div></motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills