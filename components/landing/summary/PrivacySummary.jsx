import { Flex, H3, Card } from '@/core'
import routes from '@/constants/routes'
import { CheckValue, ServiceDetails, Delimiter } from './styled'
import styled from 'styled-components'

const PrivacySummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">Privacy Detection</H3>
      <StyledCard direction="column" gap="32px" color="white">
        <Flex gap="44px">
          <CheckValue label="VPN" value={data?.is_vpn} />
          <CheckValue label="Proxy" value={data?.is_proxy} />
          <CheckValue label="Tor" value={data?.is_tor} />
          <CheckValue label="Relay" value={false} />
          <CheckValue label="Hosting" value={false} />
        </Flex>
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
`
