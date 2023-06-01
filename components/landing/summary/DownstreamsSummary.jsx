import { Flex, H3, Card, Text } from '@/core'
import routes from '@/constants/routes'
import { ServiceDetails, Delimiter } from './styled'
import styled from 'styled-components'
import List from './List'

const DownstreamsSummary = ({ id, data = [] }) => {
  return (
    <Flex direction="column" gap="32px" id={id} width="100%">
      <H3 color="dark">Downstreams</H3>
      <Text>There are {data?.length || 0} downstreams for this ASN.</Text>
      <StyledCard direction="column" gap="32px" color="white">
        <List
          data={data.map((downstream) => ({
            downstream,
            name: '---',
          }))}
          columns={['downstream', 'name']}
          moreText="Show more downstreams"
        />
        <Delimiter />
        <ServiceDetails
          description="Get all this data and more in JSON format using our ASN API"
          linkText="Read more"
          link={routes['asn-api']}
        />
      </StyledCard>
    </Flex>
  )
}

export default DownstreamsSummary

const StyledCard = styled(Card)`
  padding: 40px;
  width: 100%;
`
