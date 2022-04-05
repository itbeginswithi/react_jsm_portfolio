import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'

import './Work.scss';
import {AppWrapper} from '../../wrapper'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})

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
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        )))}
      </div>

      <motion.div
        animate={animateCard}
        trans
      >

      </motion.div>
    </>
  )
}

export default AppWrapper(Work, 'work')