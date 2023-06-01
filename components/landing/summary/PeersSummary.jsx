import { Flex, H3, Card, Text } from '@/core'
import routes from '@/constants/routes'
import { CheckValue, ServiceDetails, Delimiter } from './styled'
import styled from 'styled-components'
import List from './List'

const PeersSummary = ({ id, data = [] }) => {
  return (
    <Flex direction="column" gap="32px" id={id} width="100%">
      <H3 color="dark">Peers</H3>
      <Text>There are {data?.length || 0} peers for this ASN.</Text>
      <StyledCard direction="column" gap="32px" color="white">
        <List
          data={data.map((peer) => ({
            peer,
            name: '---',
          }))}
          columns={['peer', 'name']}
          moreText="Show more peers"
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

export default PeersSummary

const StyledCard = styled(Card)`
  padding: 40px;
  width: 100%;

  @media (max-width: 1140px) {
    padding: 32px;
  }
`
