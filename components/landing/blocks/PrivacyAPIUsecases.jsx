import styled from 'styled-components'
import { Flex, H3, Text } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons, OnlyDesktop, OnlyMobile } from './styled'

const PrivacyAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <LeftContainer>
          <Title color="dark">
            {'A few ways to use our\nPrivacy Detection API'}
          </Title>
          <OnlyDesktop>
            <SignInContactButtons />
          </OnlyDesktop>
        </LeftContainer>
        <Container flex="1 1 calc((100% - 50px) / 2)">
          <UseCase>
            <Text>Enforce content access restrictions by detecting VPNs</Text>
          </UseCase>
          <UseCase>
            <Text>
              Fight fraud by flagging users who are masking their identity
            </Text>
          </UseCase>
          <UseCase>
            <Text>Filter malicious traffic by blocking bots and spammers</Text>
          </UseCase>
          <UseCase>
            <Text>
              Prevent web scraping by blocking proxies and requests from servers
            </Text>
          </UseCase>
        </Container>
        <OnlyMobile>
          <SignInContactButtons />
        </OnlyMobile>
      </Content>
    </Block>
  )
}

export default PrivacyAPIUsecases

const Content = styled(BlockInner)`
  display: flex;
  align-items: stretch;
  gap: 80px;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 24px;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  @media (max-width: 1140px) {
    gap: 16px;
    margin-bottom: 16px;
    & > * {
      flex: 1 1 100%;
    }
  }
`

const LeftContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;

  ${Title} {
    text-align: left;
  }

  @media (max-width: 1140px) {
    gap: 32px;
    align-items: stretch;
    min-width: unset;
  }
`

const UseCase = styled(Flex)`
  padding-left: 16px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0%;
    height: 100%;
    width: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
  }
`
