import styled from 'styled-components'
import Image from 'next/image'
import { Flex, Card, H1, Text, Icon } from '@/core'
import { Block, BlockInner } from './Block'

const GeolocationStats = () => {
  return (
    <Wrapper>
      <Content flex="1">
        <StatCard color="white">
          <H1 color="primary">110k+</H1>
          <Text weight={600}>Users</Text>
        </StatCard>
        <StatCard color="white">
          <H1 color="primary">20B+</H1>
          <Text weight={600}>Api reqs a month</Text>
        </StatCard>
        <StatCard color="white">
          <H1 color="primary">12+</H1>
          <Text weight={600}>Data types</Text>
        </StatCard>
        <StatCard color="white">
          <H1 color="primary">6</H1>
          <Text weight={600}>Dedicated data engineers</Text>
        </StatCard>
      </Content>
    </Wrapper>
  )
}

export default GeolocationStats

const Wrapper = styled(Block)`
  margin: 150px 0;
`

const Content = styled(BlockInner)`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StatCard = styled(Card)`
  gap: 4px;
  align-items: center;
  transition: all 0.3s;
  cursor: default;

  &:hover {
    transform: scale(1.05);
  }
`
