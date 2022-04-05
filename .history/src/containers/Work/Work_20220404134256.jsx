import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'

import './Work.scss';
import {AppWrapper} from '../../wrapper'

const Work = () => {
  return (
    <>
       <h2 className="head-text">
        My Creative <span>Portofolio</span> <br/>Section <span>Good Business</span>
      </h2>
    </>
  )
}

export default AppWrapper(Work, 'work')