import { Flex, H3, Card, Icon, Text, H6 } from '@/core'
import routes from '@/constants/routes'
import { ServiceDetails, Delimiter, VerticalDelimiter } from './styled'
import styled from 'styled-components'

const AbuseSummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">Abuse Details</H3>
      <StyledCard direction="column" gap="32px" color="white">
        <Flex gap="12px">
          <Icon icon="pin" size="20px" color="text" />
          <Text>{data?.address}</Text>
        </Flex>
        <Flex gap="12px" align="center">
          <Icon icon="mail-fill" size="20px" color="text" />
          <Text color="primary" as="a" href={`mailto:${data?.email}`}>
            {data?.email}
          </Text>
        </Flex>
        <DarkCard>
          <Flex direction="column" gap="8px" width="100%">
            <Text>Name</Text>
            <H6 weight={600}>{data?.name}</H6>
          </Flex>
          <VerticalDelimiter />
          <Flex direction="column" gap="8px" width="100%">
            <Text>Network</Text>
            <H6 weight={600}>{data?.network}</H6>
          </Flex>
        </DarkCard>
        <Delimiter />
        <ServiceDetails
          title="Abuse Contact data"
          description="Our abuse contact API returns data containing information belonging to the abuse contact of every IP address on the Internet."
          linkText="Abuse Contact API"
          link={routes['abuse-api']}
        />
      </StyledCard>
    </Flex>
  )
}

export default AbuseSummary

const StyledCard = styled(Card)`
  padding: 32px 40px;

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

    & > :nth-child(2) {
      height: 1px;
      width: 100%;
    }
  }
`
