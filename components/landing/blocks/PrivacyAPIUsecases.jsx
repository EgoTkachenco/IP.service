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
            <Text>
              Our Privacy Detection API strengthens your online security by
              identifying users with concealed IP addresses. Mitigate risks,
              prevent unauthorized transactions, and protect your business from
              potential fraudsters using our cutting-edge IP detection
              solutions.
            </Text>
          </UseCase>
          <UseCase>
            <Text>
              Maintain compliance with geo-restricted content regulations by
              integrating our Privacy Detection API. Accurately detect and block
              users employing VPNs, proxies, or Tor to bypass regional
              restrictions, ensuring a secure and compliant content distribution
              network.
            </Text>
          </UseCase>
          <UseCase>
            <Text>
              Boost your organization's cybersecurity measures with our Privacy
              Detection API. Unmask IP addresses attempting to infiltrate your
              network, proactively combat threats, and safeguard sensitive data
              using our advanced IP concealment detection techniques.
            </Text>
          </UseCase>
          <UseCase>
            <Text>
              Leverage our Privacy Detection API to gain accurate insights into
              user behavior. By revealing hidden IP addresses, our API empowers
              you to create more precise user profiles, optimize marketing
              strategies, and deliver tailored experiences for genuine
              customers.
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
