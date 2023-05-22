import { Flex, H3, H4, Card, Text, Icon, H6 } from '@/core'
import routes from '@/constants/routes'
import { CheckValue, ServiceDetails } from './styled'
import styled from 'styled-components'

const ASNSummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">ASN</H3>
      <StyledCard direction="column" gap="32px" color="white">
        <Flex align="center">
          <H4 color="primary" weight={700}>
            AS34058
          </H4>
          <Text weight={600}> - {data?.descr}</Text>
        </Flex>
        <Flex gap="60px">
          <ASNItem
            icon="web"
            label="Domain"
            value={<H6 weight={600}>{data?.domain}</H6>}
          />
          <ASNItem
            icon="brief-case"
            label="Asn type"
            value={<H6 weight={600}>ISP</H6>}
          />
          <ASNItem
            icon="route"
            label="Route"
            value={
              <H6 weight={600} color="primary">
                {data?.network}
              </H6>
            }
          />
        </Flex>
        <ServiceDetails
          title="ASN data"
          description="ASN details for every IP address and every ASN’s related domains, allocation date, registry name, total number of IP addresses, and assigned prefixes."
          linkText="ASN API"
          link={routes['asn-api']}
        />
      </StyledCard>
    </Flex>
  )
}

export default ASNSummary

const StyledCard = styled(Card)`
  padding: 32px 40px;
`

const ASNItem = ({ icon, label, value }) => (
  <Flex direction="column">
    <Flex gap="20px">
      <Icon icon={icon} color="text" size="24px" /> <Text>{label}</Text>
    </Flex>
    <ASNItemValue>{value}</ASNItemValue>
  </Flex>
)

const ASNItemValue = styled.div`
  padding: 8px 0 0 44px;
`
