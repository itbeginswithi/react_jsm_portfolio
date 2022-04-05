import React from 'react'
import {motion, MotionValue} from 'framer-motion'

import './About.scss'

const abouts = [
  {
    title: 'Web Development',
    description: 'I am a good web developer',
    imgUrl: ''
  },
  {
    title: 'Web Design',
    description: 'I am good at developing the web',
    imgUrl: ''
  },
  {
    title: 'UI/UX',
    description: 'I am good at developing the web',
    imgUrl: ''
  },
  {
    title: 'Web Animations',
    description: 'I am good at developing the web',
    imgUrl: ''
  },

]

const About = () => {
  return (
    <div id="about">
      <h2 className="head-text">
        I know That
        <span>Good Design</span>
        <br/>
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className></h2>
          </motion.div>
        })}
      </div>
    </div>
  )
}

export default About