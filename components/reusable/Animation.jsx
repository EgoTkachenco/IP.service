import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: -10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const SlideDown = ({ children, width, delay, style = {} }) => (
  <motion.div
    style={{ width: width || '100%', ...style }}
    variants={variants}
    animate="enter"
    exit="exit"
    transition={{
      type: 'linear',
      duration: 0.3,
      delay: delay || 0,
    }}
  >
    {children}
  </motion.div>
)

const Animation = ({ type = 'slide-down', ...props }) => {
  if ((type = 'slide-down')) return <SlideDown {...props} />

  return <SlideDown {...props} />
}

export default Animation
