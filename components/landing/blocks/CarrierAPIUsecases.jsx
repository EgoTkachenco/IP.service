import styled from 'styled-components'
import { Flex, H6 } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons, UseCase } from './styled'

const CarrierAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">
          {'Ways to use our\nMobile Carrier Detection API'}
        </Title>
        <Container flex="1 1 calc((100% - 64px) / 3)">
          <UseCase text="Effective targeting of mobile users for ad campaigns with Mobile Carrier Detection APIs." />
          <UseCase text="Optimized mobile network performance and improved user experience with carrier data." />
          <UseCase text="Safer online environment for businesses and consumers with carrier data for fraud prevention." />
          <UseCase text="Market research and consumer analytics with carrier data insights for analyzing trends and optimizing campaigns." />
          <UseCase text="Accurate location-based services and seamless user experience with carrier data." />
          <UseCase text="Error-free accounting and billing with carrier data." />
          <UseCase text="Safe online environment for children and sensitive industries with carrier data for content filtering." />
          <UseCase text="More secure online environment for businesses and consumers with carrier data for network security." />
          <UseCase text="Cost-effective and convenient international mobile experience with carrier data for roaming users." />
        </Container>
        <SignInContactButtons />
      </Content>
    </Block>
  )
}

export default CarrierAPIUsecases

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 1140px) {
    gap: 16px;
    align-items: stretch;
    ${H6} {
      text-align: left;
      font-weight: 500;
      margin-bottom: 24px;
    }
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 16px;
  }
`
