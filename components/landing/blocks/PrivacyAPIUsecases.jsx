import styled from 'styled-components'
import { Flex, H3, Text } from '@/core'
import { Block, BlockInner } from './Block'
import { SignInContactButtons } from './styled'

const PrivacyAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <LeftContainer>
          <H3 color="dark">{'A few ways to use our\nPrivacy Detection API'}</H3>
          <SignInContactButtons />
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
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
`

const LeftContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1140px) {
    gap: 32px;
    align-items: stretch;
    min-width: unset;

    ${H3} {
      text-align: center;
    }
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
