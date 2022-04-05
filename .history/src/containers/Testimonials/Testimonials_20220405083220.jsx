import React, { useState } from 'react'
import { motion } from "framer-motion";
import {HiChevronLeft, HiChevronRight} from 'react-icons'

import './Testimonial.scss'
import { AppWrapper, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const brands = [];
const testimonials = [];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      
    </>
  )
}

export default AppWrapper(MotionWrap(Testimonials), 'ttestimonials')