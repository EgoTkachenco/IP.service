import { useState } from 'react'
import styled from 'styled-components'
import { Caption } from '@/core'
import _ from 'lodash'
import { AnimatePresence, motion } from 'framer-motion'

const Tooltip = ({ children, hint }) => {
  const [show, setShow] = useState(false)
  const debouceOpen = _.debounce(() => setShow(true), 300)
  const debouceClose = _.debounce(() => setShow(false), 300)
  return (
    <Wrapper
      onMouseEnter={debouceOpen}
      onMouseLeave={debouceClose}
      onClick={() => (show ? debouceClose() : debouceOpen())}
    >
      {children}

      <AnimatePresence>
        {show && hint && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -80 },
              enter: { opacity: 1, y: -120 },
              exit: { opacity: 0, y: -80 },
            }}
            animate="enter"
            initial="hidden"
            exit="exit"
          >
            <Hint>{hint}</Hint>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Tooltip

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`

const Hint = styled(Caption)`
  position: absolute;
  /* bottom: 100%; */
  right: 50%;
  transform: translateX(50%);
  background: #ffffff;
  box-shadow: 10px 10.88px 30.07px rgba(7, 22, 37, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 240px;
`
