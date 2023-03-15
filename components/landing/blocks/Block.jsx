import styled from 'styled-components'
import { Flex, H3 } from '@/core'

export const Block = styled.div`
  margin: 150px 0;

  @media (max-width: 1140px) {
    margin: 48px 0;
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

export const Title = styled(H3)`
  text-align: center;
  @media (max-width: 1140px) {
    width: 100%;
    text-align: left;
    font-size: 24px;
  }
`
