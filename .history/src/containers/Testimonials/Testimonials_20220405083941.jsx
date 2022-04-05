import React, { useState } from 'react'
import { motion } from "framer-motion";
import {HiChevronLeft, HiChevronRight} from 'react-icons'

import './Testimonial.scss'
import { AppWrapper, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const brands = [];
const testimonials = [
  {
    name: 'Sarah',
    company: 'Netflix',
    imgUrl: images.css,
    feedback: 'Micael is an awesome developer'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgUrl} alt="testimonials"/>
          </div>
        </>
      )}
    </>
  )
}

export default AppWrapper(MotionWrap(Testimonials, 'app__testimonial'), 'testimonials', 'app__primarybg')