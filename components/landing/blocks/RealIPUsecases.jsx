import styled from 'styled-components'
import { Flex, H3, Text } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons, OnlyDesktop, OnlyMobile } from './styled'

const RealIPUsecases = () => {
  return (
    <Block>
      <Content>
        <LeftContainer>
          <Title as="h2" color="dark">
            {'A few ways to use our real IP address detector'}
          </Title>
          <OnlyDesktop>
            <SignInContactButtons />
          </OnlyDesktop>
        </LeftContainer>
        <Container flex="1 1 calc((100% - 50px) / 2)">
          <UseCase>
            <Text>
              The service can be an invaluable tool in your cybersecurity
              arsenal. By identifying the actual IP address of users, businesses
              can spot potential security threats lurking behind obscured IP
              addresses. This allows for the implementation of robust security
              measures, fortifying your organization's digital landscape against
              malicious activities.
            </Text>
          </UseCase>
          <UseCase>
            <Text>
              For businesses that rely on providing location-specific services
              or content, this tool can aid in determining the exact geolocation
              of a visitor's IP address. This will enable a more precise
              delivery of services, improving user satisfaction and engagement.
            </Text>
          </UseCase>
          <UseCase>
            <Text>
              Unveiling the real IP addresses of users can provide businesses
              with a robust tool to detect suspicious patterns and prevent
              fraudulent activities. This utility can drastically reduce the
              risk of online fraud, ensuring a safer and more secure
              transactional environment for both businesses and their customers.
            </Text>
          </UseCase>
          <UseCase>
            <Text>
              For marketers aiming to gain a deeper understanding of their
              audience, uncovering the real IP addresses of users can provide
              more accurate data about user demographics and browsing habits.
              Such insights can inform the development of highly tailored
              marketing strategies that effectively reach the intended audience.
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

export default RealIPUsecases

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
  align-items: stretch;
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
  align-items: center;

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
