import styled from 'styled-components'
import { Icon, Flex, H5, Card } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons } from './styled'

const ASNAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">{'A few ways to use our ASN API'}</Title>
        <Container flex="1 1 calc((100% - 32px) / 2)">
          <UseCase text="Utilize ASN API service to strengthen your cybersecurity measures by identifying potentially malicious traffic sources. Analyzing ASN data enables you to detect suspicious IP addresses, flagging them for further investigation. By leveraging IP-to-ASN mapping and ASN lookup, you can uncover patterns, track down offending networks, and implement security policies to safeguard your online assets from emerging threats." />
          <UseCase text="Employ ASN API service to streamline network operations by obtaining comprehensive information on IP addresses and ASN prefixes. With access to data such as allocation dates, registry names, and related domains, you can make informed decisions for network capacity planning, routing optimization, and peering arrangements. Spyskey's accurate and up-to-date ASN data empowers you to manage your network resources efficiently and effectively." />
          <UseCase text="Enhance your location-based services by incorporating ASN API service to refine IP geolocation data. By correlating IP addresses with their respective ASNs, you can obtain more granular information about user locations, enabling you to deliver targeted marketing campaigns, localized content, or tailored user experiences. Leverage Spyskey's comprehensive ASN database to unlock the potential of location-based services for your business." />
          <UseCase text="Tap into the power of ASN API service for academic research or data-driven decision-making. Access to detailed ASN information and IP-to-ASN mapping can help you understand internet infrastructure, uncover network trends, and analyze global connectivity patterns. Spyskey's vast and up-to-date ASN data provides valuable insights for researchers, network analysts, and decision-makers in various industries." />
        </Container>
        <SignInContactButtons />
      </Content>
    </Block>
  )
}

export default ASNAPIUsecases

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 1140px) {
    gap: 16px;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  @media (max-width: 1140px) {
    gap: 16px;
    margin-bottom: 24px;
  }
`

const UseCase = ({ text }) => (
  <UseCaseCard color="white">
    <Icon icon="use-case" size="50px" mobileSize="24px" color="primary" />
    <H5 weight={500}>{text}</H5>
  </UseCaseCard>
)

const UseCaseCard = styled(Card)`
  padding: 50px;
  gap: 25px;

  @media (max-width: 1140px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding: 0;
    background: none;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    ${H5} {
      white-space: normal;
      font-size: 14px;
      letter-spacing: 0.01em;
      font-weight: 600;
      line-height: 160%;
    }
  }
`
