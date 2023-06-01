import { Flex, H3, Card, Button } from '@/core'
import routes from '@/constants/routes'
import { CheckValue, ServiceDetails, Delimiter } from './styled'
import styled from 'styled-components'
import { useState } from 'react'
import List from './List'

const RangesSummary = ({ id, data }) => {
  const [tab, setTab] = useState(1)
  const ranges = (tab === 1 ? data?.prefixes : data?.prefixes6) || []
  return (
    <Flex direction="column" gap="32px" id={id} width="100%">
      <TopContainer>
        <H3 color="dark">IP Address Ranges</H3>

        <ButtonsContainer flex="1">
          <Button
            color={tab === 1 ? 'primary' : 'grey'}
            outline={tab !== 1}
            onClick={() => setTab(1)}
          >
            IPv4 Ranges
          </Button>
          <Button
            color={tab === 2 ? 'primary' : 'grey'}
            outline={tab !== 2}
            onClick={() => setTab(2)}
          >
            IPv6 Ranges
          </Button>
        </ButtonsContainer>
      </TopContainer>
      <StyledCard color="white">
        <List
          data={ranges.map((netblock) => ({
            netblock,
            company: '---',
            'Num of IPS': '---',
          }))}
          columns={['netblock', 'company', 'Num of IPS']}
          moreText="Show more IP ranges"
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

export default RangesSummary

const StyledCard = styled(Card)`
  padding: 40px;
  gap: 32px;
  width: 100%;

  @media (max-width: 1140px) {
    padding: 32px;
  }
`

const TopContainer = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`

const ButtonsContainer = styled(Flex)`
  gap: 12px;
  width: 300px;
`
