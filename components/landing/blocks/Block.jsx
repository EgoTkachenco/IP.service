import styled from 'styled-components'
import { Flex } from '@/core'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'

// const MotionBlock = styled.div`
//   margin: 150px 0;
//   transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s;
// `
// export const Block = ({ children }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })

//   return (
//     <MotionBlock ref={ref} style={{ opacity: isInView ? 1 : 0 }}>
//       {children}
//     </MotionBlock>
//   )
// }

export const Block = styled.div`
  margin: 150px 0;

  @media (max-width: 1140px) {
    margin: 100px 0;
  }
`

export const BlockInner = styled(Flex)`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1140px) {
    padding: 0 24px;
  }
`
