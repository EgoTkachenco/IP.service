import { Flex, H3, H4, Card, Text } from '@/core'
import routes from '@/constants/routes'
import { ServiceDetails, Delimiter } from './styled'
import styled from 'styled-components'

const CompanySummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">Company</H3>
      <StyledCard direction="column" gap="32px" color="white">
        <H4>{data?.name}</H4>
        <Delimiter />
        <ServiceDetails
          title="Company API"
          description={
            <Flex direction="column" gap="20px">
              Provides the company behind the IP address. This includes the
              company’s name, domain name, and what type of company it is: ISP,
              business, or hosting.).
              <Text style={{ opacity: 0.6 }}>
                Useful for Account Based Marketing
              </Text>
            </Flex>
          }
          linkText="Read more"
          link={routes['company-api']}
        />
      </StyledCard>
    </Flex>
  )
}

export default CompanySummary

const StyledCard = styled(Card)`
  padding: 32px 40px;

  @media (max-width: 1140px) {
    padding: 32px;
  }
`
