import styled from 'styled-components'
import { Flex, H2, H5, Card, Icon } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons, UseCase } from './styled'

const AbuseAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title as="h2" color="dark">
          {'Making the Most of Our Abuse Contact API'}
        </Title>
        <Container flex="1 1 calc((100% - 64px) / 3)">
          <UseCase text="Enhance network security by swiftly reporting IP misuse incidents." />
          <UseCase text="Strengthen cybersecurity measures with real-time abuse contact data." />
          <UseCase text="Monitor IP usage patterns to proactively identify potential threats." />
          <UseCase text="Facilitate efficient collaboration between abuse departments and ISPs." />
          <UseCase text="Improve customer support by resolving IP-related disputes effectively." />
          <UseCase text="Empower threat intelligence teams with comprehensive abuse contact details." />
          <UseCase text="Streamline data center management by addressing IP allocation issues." />
          <UseCase text="Bolster incident response strategies with accurate contact information." />
          <UseCase text="Foster a safer online environment through proactive abuse reporting." />
        </Container>
        <SignInContactButtons />
      </Content>
    </Block>
  )
}

export default AbuseAPIUsecases

// const UseCase = ({ text }) => (
//   <UseCaseCard color="white">
//     <Icon icon="use-case" size="50px" mobileSize="24px" color="primary" />
//     <H5 align="center">{text}</H5>
//   </UseCaseCard>
// )

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
  flex-wrap: wrap;
  @media (max-width: 1140px) {
    gap: 24px;
  }
`

// const UseCaseCard = styled(Card)`
//   padding: 44px 24px;
//   gap: 15px;
//   justify-content: center;
//   align-items: center;
//   flex: 1 1 calc((100% - 64px) / 3);

//   @media (max-width: 1140px) {
//     flex: 1 1 100%;
//     flex-direction: row;
//     padding: 0;
//     background: none;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 8px;

//     ${H5} {
//       white-space: normal;
//       font-size: 14px;
//       letter-spacing: 0.01em;
//       font-weight: 600;
//       line-height: 160%;
//       text-align: left;
//     }
//   }
// `
