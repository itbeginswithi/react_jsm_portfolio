import React, { useState } from 'react'
import { motion } from "framer-motion";
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'

import './Testimonial.scss'
import { AppWrapper, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const brands = [
  {
    name: 'New Balance',
    imgUrl: images.nb
  },
  {
    name: 'Skype',
    imgUrl: images.skype
  },
  {
    name: 'Spotify',
    imgUrl: images.spotify
  },
  {
    name: 'Bolt',
    imgUrl: images.bolt
  },
];
const testimonials = [
  {
    name: 'Sarah',
    company: 'Netflix',
    imgUrl: images.css,
    feedback: 'Incididunt excepteur sunt eu aute labore Lorem.'
  },
  {
    name: 'Michael',
    company: 'Google',
    imgUrl: images.html,
    feedback: 'Occaecat amet nisi duis laborum reprehenderit. Deserunt nulla sint duis consequat ut velit labore officia mollit labore consequat sint cupidatat. Laborum magna quis qui voluptate pariatur quis sunt aute. Culpa ex nisi velit in quis.'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={test.imgUrl} alt="testimonials"/>
            <div className="app__testimonial-content">
              <p className="p-text">
                {test.feedback}
              </p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex  === 0 ? testimonials.length -1 : currentIndex - 1)}>
              <HiChevronLeft/>
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex  === testimonials.length -1 ? 0 : currentIndex + 1 )}>
              <HiChevronRight/>
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {
          brands.map((brand) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5, type: 'tween'}}
              key={brand.id}
            >
              <img src={brand.imgUrl} alt={brand.name} />
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrapper(MotionWrap(Testimonials, 'app__testimonial'), 'testimonials', 'app__primarybg')