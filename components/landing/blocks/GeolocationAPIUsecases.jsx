import styled from 'styled-components'
import { Flex, H5, Card, Icon } from '@/core'
import { Block, BlockInner, Title } from './Block'

const GeolocationAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">{'Ways to use our \n IP Geolocation API'}</Title>
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
    <Icon icon="use-case" size="50px" mobileSize="24px" color="primary" />
    <H5 align="center">{text}</H5>
  </UseCaseCard>
)

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  @media (max-width: 1140px) {
    gap: 16px;
  }
`

const UseCaseCard = styled(Card)`
  padding: 47px 72px;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex: 1 1 calc((100% - 64px) / 3);

  @media (max-width: 1140px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding: 0;
    background: none;
    justify-content: flex-start;
    gap: 8px;

    ${H5} {
      white-space: nowrap;
      font-size: 14px;
      letter-spacing: 0.01em;
      font-weight: 600;
      line-height: 160%;
    }
  }
`
