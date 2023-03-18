import styled from 'styled-components'
import { Flex, H3 } from '@/core'
import { Block, BlockInner, Title } from './Block'
import {
  UseCase,
  SignInContactButtons,
  OnlyDesktop,
  OnlyMobile,
} from './styled'

const ReverseAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <LeftContainer>
          <Title color="dark">{`A few ways to use our Reverse IP data`}</Title>
          <OnlyDesktop>
            <SignInContactButtons direction="column" />
          </OnlyDesktop>
        </LeftContainer>
        <Container flex="1 1 calc((100% - 32px) / 2)">
          <UseCase
            p="44px 24px"
            text="Identify competitors' websites on shared hosting to better understand their online presence and improve marketing strategies."
          />
          <UseCase
            p="44px 24px"
            text="Detect potential security threats or malicious domains by analyzing the websites hosted on specific IP addresses."
          />
          <UseCase
            p="44px 24px"
            text="Gather insights into hosting patterns and relationships between domains to enhance data-driven decision-making."
          />
          <UseCase
            p="44px 24px"
            text="Discover new prospects by exploring related websites and domains, enabling targeted outreach and promotional campaigns."
          />
        </Container>
        <OnlyMobile>
          <SignInContactButtons />
        </OnlyMobile>
      </Content>
    </Block>
  )
}

export default ReverseAPIUsecases

const Content = styled(BlockInner)`
  display: flex;
  align-items: stretch;
  gap: 69px;

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
  min-width: 250px;
  width: 250px;
  justify-content: space-between;
  ${Title} {
    text-align: left;
  }

  @media (max-width: 1140px) {
    gap: 32px;
    align-items: stretch;
    min-width: unset;
    width: 100%;
  }
`
