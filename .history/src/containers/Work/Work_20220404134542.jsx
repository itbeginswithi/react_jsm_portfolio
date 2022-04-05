import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'

import './Work.scss';
import {AppWrapper} from '../../wrapper'

const Work = () => {

  const handleWorkFilter = () => {

  }

  return (
    <>
       <h2 className="head-text">
        My Creative <span>Portofolio</span> Section
      </h2>
      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item => (
          <div 
            key={item}
            className={}
            onClick={() => handleWorkFilter(item)}
          >

          </div>
        )))}
      </div>
    </>
  )
}

export default AppWrapper(Work, 'work')