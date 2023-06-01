import { Flex, H3, Card, Text, Tooltip, Icon } from '@/core'
import routes from '@/constants/routes'
import { ServiceDetails, VerticalDelimiter } from './styled'
import styled from 'styled-components'

const CarrierSummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">Carrier</H3>
      <StyledCard direction="column" gap="32px" color="white">
        <DarkCard>
          <Flex direction="column" gap="8px" width="100%">
            <Text>Carrier name</Text>
            <Text weight={600}>{data?.Carrier}</Text>
          </Flex>
          <VerticalDelimiter />
          <Flex direction="column" gap="8px" width="100%">
            <Flex gap="4px" align="center">
              <Text>Mcc</Text>
              <Tooltip hint="Tootip">
                <Icon icon="info" size="20px" color="light-grey" />
              </Tooltip>
            </Flex>
            <Text weight={600}>{data?.mcc}</Text>
          </Flex>
          <VerticalDelimiter />
          <Flex direction="column" gap="8px" width="100%">
            <Flex gap="4px" align="center">
              <Text>Mnc</Text>
              <Tooltip hint="Tootip">
                <Icon icon="info" size="20px" color="light-grey" />
              </Tooltip>
            </Flex>
            <Text weight={600}>{data?.mnc}</Text>
          </Flex>
        </DarkCard>
        <Delimiter />
        <ServiceDetails
          title="Mobile Carrier API"
          description="Provides carrier details for the IP address (if IP belongs to a mobile network).
					This includes the networks’s name, mcc (mobile country code) and mnc (mobile network code)."
          linkText="Read more"
          link={routes['carrier-api']}
        />
      </StyledCard>
    </Flex>
  )
}

export default CarrierSummary

const StyledCard = styled(Card)`
  padding: 32px 40px;
  overflow: visible;

  @media (max-width: 1140px) {
    padding: 32px;
  }
`

const DarkCard = styled(Card)`
  background: rgba(80, 92, 117, 0.05);
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  gap: 32px;
  overflow: visible;

  @media (max-width: 1140px) {
    flex-direction: column;

    & > :nth-child(2),
    & > :nth-child(4) {
      height: 1px;
      width: 100%;
    }
  }
`

const Delimiter = styled.div`
  background: #f1f4f9;
  height: 1px;
  width: 100%;
`
