import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'

import './Work.scss';
import {AppWrapper} from '../../wrapper'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const filterWork = [
    {
      title:}
  ];

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
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div key={index} className='app__work-item app__flex'>
            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.title} />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrapper(Work, 'work')