import React from 'react'

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
        whileInView={{opacity: [0,0,1], y: [100, 50, 0]}}
        transition={{duration: 0.5}}
        cla
    >
        <Component/>
    </motion.div>
  )
}

export default MotionWrap