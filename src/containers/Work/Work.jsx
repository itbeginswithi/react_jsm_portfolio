import React, {useState} from 'react'
import { motion } from 'framer-motion';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'

import './Work.scss';
import {AppWrapper, MotionWrap} from '../../wrapper'
import {images} from '../../constants'

const data = [
  {
    title: 'Modern UI/UX Website',
    description: 'A modern UI/UX Portofolio Website',
    projectLink: 'somerandomlink',
    githubLink: 'https://github.com/itbegingswithi',
    image: images.about03,
    tags: ['UI/UX', 'All']
  },
  {
    title: 'Gericht Restaurant Project',
    description: 'A modern UI/UX Landing Page',
    projectLink: 'somerandomlink',
    githubLink: 'https://github.com/itbegingswithi',
    image: images.about01,
    tags: ['UI/UX', 'All']
  },
  {
    title: 'Cool Mobile App',
    description: 'Tinder Clone in React Native',
    projectLink: 'somerandomlink',
    githubLink: 'https://github.com/itbegingswithi',
    image: images.about04,
    tags: ['Mobile App', 'All']
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})

  const handleWorkFilter = (item) => {
    console.log(item)
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500)
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
        {data.filter(item => item.tags.includes(activeFilter)).map((work, index) => (
          <div key={index} className='app__work-item app__flex'>
            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.title} />
              <motion.div
                whileHover={{opacity: [0,1]}}
                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className="app__work-hover app__flex" 
              >
                <a href={work.proprojectLink} target="_blank" rel="noreferrer">
                  <motion.div
                     whileInView={{scale: [0, 1]}}
                     whileHover={{scale: [1, 0.9]}}
                     transition={{duration: 0.25}}
                     className="app__flex" 
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                     whileInView={{scale: [0, 1]}}
                     whileHover={{scale: [1, 0.9]}}
                     transition={{duration: 0.25}}
                     className="app__flex" 
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className="p-text" style={{marginTop: 10}}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}


export default AppWrapper(
  MotionWrap(Work, 'app__work'), 
  'work', 
  'app__primarybg'
)