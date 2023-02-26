import { motion } from 'framer-motion'

const SlideDown = ({ children, width, delay, style = {} }) => (
  <motion.div
    style={{ width: width || '100%', ...style }}
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: delay || 0,
      duration: 0.3,
    }}
  >
    {children}
  </motion.div>
)

const Animation = ({ type = 'slide-down', ...props }) => {
  if ((type = 'slide-down')) return <SlideDown {...props} />

  if ((type = 'slide-down')) return <SlideDown {...props} />

  return <SlideDown {...props} />
}

export default Animation
