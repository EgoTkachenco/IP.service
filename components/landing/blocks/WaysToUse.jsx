import styled from 'styled-components'
import { Flex, H2, H5, Card, Icon } from '@/core'
import { Block, BlockInner } from './Block'

const WaysToUse = () => {
  return (
    <Block>
      <Content>
        <H2 color="dark" align="center">
          {'Ways to use our \n IP Geolocation API'}
        </H2>
        <Flex flex="1 1 calc((100% - 62px) / 3)" gap="31px" fwrap>
          <UseCaseCard text="Optimize web personalization" />
          <UseCaseCard text={'Pre-populate \n sign-up forms'} />
          <UseCaseCard text="Personalize content based on location" />
          <UseCaseCard text="Localize language, pricing, and currency" />
          <UseCaseCard text="Gather statistics and demographics" />
          <UseCaseCard text="Enforce IP-based restrictions" />
        </Flex>
      </Content>
    </Block>
  )
}

export default WaysToUse

const UseCaseCard = ({ text }) => (
  <Card
    color="white"
    px="72px"
    py="47px"
    align="center"
    justify="center"
    gap="15px"
  >
    <Icon icon="use-case" size="50px" color="primary" />
    <H5 align="center">{text}</H5>
  </Card>
)

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;
`
