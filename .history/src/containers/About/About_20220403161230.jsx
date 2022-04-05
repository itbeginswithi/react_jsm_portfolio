import React from 'react'
import {motion} from 'framer-motion'

import './About.scss'

const abouts = [
  {
    title: 'Web Development',
    description: 'I am good at developing the web'
  },
  {
    title: 'Web Design',
    description: 'I am good at developing the web'
  },
  {
    title: 'Web Design',
    description: 'I am good at developing the web'
  },

]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know That
        <span>Good Design</span>
        <br/>
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">

      </div>
    </>
  )
}

export default About