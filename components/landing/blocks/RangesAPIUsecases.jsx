import styled from 'styled-components'
import { Icon, Flex, H5, Card } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons, UseCase } from './styled'

const RangesAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">{'A few ways to use our\nIP Ranges API'}</Title>

        <Container flex="1 1 calc((100% - 64px) / 3)">
          <UseCase text="Use Reverse IP API to identify potentially malicious domains or websites sharing the same IP address for threat intelligence and mitigation efforts." />
          <UseCase text="Monitor and manage a portfolio of domains by identifying other domains hosted on the same IP address for effective resource management and conflict minimization." />
          <UseCase text="Identify competitors' websites sharing the same IP address to reveal relationships between businesses and gain insights into their online strategies." />
          <UseCase text="Detect cybersquatting, typosquatting, and phishing domains hosted on the same IP address to protect your brand's reputation and prevent potential customer loss." />
          <UseCase text="Assess the reputation of an IP address by examining the domains hosted on it to determine if the IP is associated with spam, malware, or other malicious activities." />
          <UseCase text="Evaluate the performance and reliability of web hosting providers by analyzing the other domains sharing the same IP address for insights into server load and uptime." />
          <UseCase text="Discover potential SEO issues caused by sharing IP addresses with low-quality or spammy websites, which can negatively impact search engine rankings." />
          <UseCase text="Identify potential advertising and affiliate marketing opportunities by examining domains hosted on the same IP address to discover new partnerships and niche markets." />
          <UseCase text="Cluster related websites together based on shared IP addresses for content analysis, market research, or categorization efforts." />
        </Container>
        <SignInContactButtons />
      </Content>
    </Block>
  )
}

export default RangesAPIUsecases

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 1140px) {
    gap: 24px;
    align-items: flex-start;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
`

// const UseCase = ({ text }) => (
//   <UseCaseCard color="white">
//     <Icon icon="use-case" size="50px" mobileSize="24px" color="primary" />
//     <H5 weight={500}>{text}</H5>
//   </UseCaseCard>
// )

// const UseCaseCard = styled(Card)`
//   padding: 50px;
//   gap: 25px;
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
//       font-size: 14px;
//       letter-spacing: 0.01em;
//       font-weight: 600;
//       line-height: 160%;
//     }
//   }
// `
