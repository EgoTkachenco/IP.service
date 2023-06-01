import { Flex, H3, Card, Text } from '@/core'
import routes from '@/constants/routes'
import { ServiceDetails, Delimiter } from './styled'
import styled from 'styled-components'

const WhoisSummary = ({ id, data }) => {
  const formatRaw = (raw) =>
    raw &&
    raw
      .split('\n')
      .map((row) => {
        const [label, value] = row.replace(/  +/g, ' ').split(' ')
        return { label, value }
      })
      .filter(({ value }) => value)
      .map(({ label, value }, i) => (
        <Flex key={i}>
          <RawLabel weight={600}>{label}</RawLabel>
          <Text>{value}</Text>
        </Flex>
      ))

  return (
    <Flex direction="column" gap="32px" id={id} width="100%">
      <H3 color="dark">WHOIS Details</H3>
      <StyledCard direction="column" gap="32px" color="white">
        <Flex gap="40px" direction="column">
          <Flex direction="column" gap="16px">
            {formatRaw(data?.raw)}
          </Flex>
          <Flex direction="column" gap="16px">
            {formatRaw(data?.organisation?.raw)}
          </Flex>
        </Flex>

        <Delimiter />
        <ServiceDetails
          description="Get all this data and more in JSON format using our ASN API"
          linkText="Read more"
          link={routes['whois-api']}
        />
      </StyledCard>
    </Flex>
  )
}

export default WhoisSummary

const StyledCard = styled(Card)`
  width: 100%;
  padding: 40px;

  @media (max-width: 1140px) {
    padding: 32px;
  }
`

const RawLabel = styled(Text)`
  width: 200px;
`
