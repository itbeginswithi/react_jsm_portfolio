import React from 'react'

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
        whileInView={{opacity: [0,0,1]}}
    >
        <Component/>
    </motion.div>
  )
}

export default MotionWrap