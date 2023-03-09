import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H1, H6 } from '@/core'
import { BlockInner } from './Block'

const Slogan = () => {
  return (
    <Wrapper>
      <Image fill src="/slogan-back.png" alt="Slogan back" loading="lazy" />
      <Content>
        <Flex direction="column">
          <H1 color="dark">Made for developers</H1>
          <H1 color="primary">Trusted by enterprises</H1>
        </Flex>
        <SloganText weight="500">
          Our database is built, maintained, and supported by our in-house team
          of developers and engineers. These data experts are ready to
          troubleshoot problems, build unique use cases, and create additional
          enterprise solutions.
        </SloganText>
      </Content>
    </Wrapper>
  )
}

export default Slogan

const Wrapper = styled.div`
  position: relative;
`

const Content = styled(BlockInner)`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 75px 0;
  & > * {
    position: relative;
  }
`

const SloganText = styled(H6)`
  max-width: 575px;
`
