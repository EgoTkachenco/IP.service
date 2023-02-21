import { motion } from 'framer-motion'

const PageChangeAnimation = ({ children, width }) => (
  <motion.div
    style={{ width: width || '100%' }}
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
)

export default PageChangeAnimation
