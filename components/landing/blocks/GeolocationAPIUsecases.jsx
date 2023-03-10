import styled from 'styled-components'
import { Flex, H2, H5, Card, Icon } from '@/core'
import { Block, BlockInner } from './Block'

const GeolocationAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <H2 color="dark" align="center">
          {'Ways to use our \n IP Geolocation API'}
        </H2>
        <Container flex="1 1 calc((100% - 62px) / 3)" gap="31px" fwrap>
          <UseCase text="Optimize web personalization" />
          <UseCase text={'Pre-populate \n sign-up forms'} />
          <UseCase text="Personalize content based on location" />
          <UseCase text="Localize language, pricing, and currency" />
          <UseCase text="Gather statistics and demographics" />
          <UseCase text="Enforce IP-based restrictions" />
        </Container>
      </Content>
    </Block>
  )
}

export default GeolocationAPIUsecases

const UseCase = ({ text }) => (
  <UseCaseCard color="white">
    <Icon icon="use-case" size="50px" color="primary" />
    <H5 align="center">{text}</H5>
  </UseCaseCard>
)

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
`

const UseCaseCard = styled(Card)`
  padding: 47px 72px;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex: 1 1 calc((100% - 64px) / 3);

  @media (max-width: 1140px) {
    flex: 1 1 calc((100% - 32px) / 2);
  }

  @media (max-width: 700px) {
    flex: 1 1 100%;
  }
`
