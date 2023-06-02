import { Flex, H3, Card } from '@/core'
import routes from '@/constants/routes'
import { CheckValue, ServiceDetails, Delimiter } from './styled'
import styled from 'styled-components'

const PrivacySummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">Privacy Detection</H3>
      <StyledCard direction="column" gap="32px" color="white">
        <ValuesContainer>
          <CheckValue label="VPN" value={data?.is_vpn} />
          <CheckValue label="Proxy" value={data?.is_proxy} />
          <CheckValue label="Tor" value={data?.is_tor} />
          {/* <CheckValue label="Relay" value={false} />
          <CheckValue label="Hosting" value={false} /> */}
        </ValuesContainer>
        <Delimiter />
        <ServiceDetails
          title="Privacy Detection data"
          description="Detects various methods used to mask a user's true IP address, including VPN detection, proxy detection, tor usage, relay usage, or a connection via a hosting provider."
          linkText="Privacy Detection API"
          link={routes['privacy-api']}
        />
      </StyledCard>
    </Flex>
  )
}

export default PrivacySummary

const StyledCard = styled(Card)`
  padding: 40px;

  @media (max-width: 1140px) {
    padding: 32px;
  }
`

const ValuesContainer = styled(Flex)`
  gap: 44px;

  @media (max-width: 1140px) {
    gap: 24px;
    flex-wrap: wrap;
  }
`
