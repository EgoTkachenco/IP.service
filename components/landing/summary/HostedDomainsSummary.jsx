import { Flex, H3, Card, Text } from '@/core'
import routes from '@/constants/routes'
import { CheckValue, ServiceDetails, Delimiter } from './styled'
import styled from 'styled-components'

const HostedDomainsSummary = ({ id, data }) => {
  console.log(data)
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">Hosted Domains</H3>
      <Text>
        There are {data?.domains.length} domain names hosted across{' '}
        {data?.total} IP addresses on this ASN.
      </Text>
      <StyledCard direction="column" gap="32px" color="white">
        <Flex direction="column" gap="16px" width="100%">
          {data?.domains.map((domain, i) => (
            <DomainCard color="light-card-grey" key={i}>
              {domain}
            </DomainCard>
          ))}
        </Flex>
        <Delimiter />
        <ServiceDetails
          title="Hosted domains API"
          description="Our Hosted Domains API, or Reverse IP API returns a full list of domains that are hosted on a single IP address."
          linkText="Read more"
          link={routes['reverse-api']}
        />
      </StyledCard>
    </Flex>
  )
}

export default HostedDomainsSummary

const StyledCard = styled(Card)`
  padding: 40px;

  @media (max-width: 1140px) {
    padding: 32px;
  }
`
const DomainCard = styled(Card)`
  padding: 16px 24px;
  width: 100%;
`
