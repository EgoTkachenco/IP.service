import { Flex, H3, H4, Card, Text, Icon, H6 } from '@/core'
import routes from '@/constants/routes'
import { CheckValue, ServiceDetails } from './styled'
import styled from 'styled-components'

const ASNSummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">ASN</H3>
      <StyledCard direction="column" gap="32px" color="white">
        <ASNContainer>
          <H4 color="primary" weight={700}>
            {data?.ashandle || data?.['aut-num']}
          </H4>
          <Text weight={600}> - {data?.organisation['org-name']}</Text>
        </ASNContainer>
        <ValuesContainer>
          <ASNItem
            icon="web"
            label="Domain"
            value={<H6 weight={600}>{data?.domain}</H6>}
          />
          <ASNItem
            icon="brief-case"
            label="Asn type"
            value={<H6 weight={600}>{data?.organisation['org-type']}</H6>}
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
        </ValuesContainer>
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

  @media (max-width: 1140px) {
    padding: 32px;
  }
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

const ASNContainer = styled(Flex)`
  align-items: center;
  @media (max-width: 1140px) {
    flex-wrap: wrap;
    H4 {
      font-size: 20px;
      line-height: 160%;
    }
  }
`

const ValuesContainer = styled(Flex)`
  gap: 60px;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 32px;
  }
`
