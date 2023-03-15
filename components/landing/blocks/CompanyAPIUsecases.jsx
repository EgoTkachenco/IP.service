import styled from 'styled-components'
import { Flex, H3 } from '@/core'
import { Block, BlockInner, Title } from './Block'
import {
  UseCase,
  SignInContactButtons,
  OnlyDesktop,
  OnlyMobile,
} from './styled'

const CompanyAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <LeftContainer>
          <Title color="dark">{'Ways to use our\nIP Geolocation API'}</Title>
          <OnlyDesktop>
            <SignInContactButtons direction="column" />
          </OnlyDesktop>
        </LeftContainer>
        <Container flex="1 1 calc((100% - 32px) / 2)">
          <UseCase text="Enrich your data" />
          <UseCase text="Customize website experiences" />
          <UseCase text="Target the right users" />
          <UseCase text="Discover high-value leads" />
        </Container>
        <OnlyMobile>
          <SignInContactButtons />
        </OnlyMobile>
      </Content>
    </Block>
  )
}

export default CompanyAPIUsecases

const Content = styled(BlockInner)`
  display: flex;
  align-items: stretch;
  gap: 100px;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 24px;
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

const LeftContainer = styled(Flex)`
  flex-direction: column;
  min-width: 300px;
  justify-content: space-between;

  ${Title} {
    text-align: left;
  }
  @media (max-width: 1140px) {
    gap: 32px;
    align-items: stretch;
    min-width: unset;
  }
`
