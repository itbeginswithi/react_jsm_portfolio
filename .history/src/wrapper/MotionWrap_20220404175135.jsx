import React from 'react'

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div>
        <Component/>
    </motion.div>
  )
}

export default MotionWrap