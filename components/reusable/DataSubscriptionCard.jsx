import styled from 'styled-components'
import {
  Flex,
  H1,
  H6,
  Caption,
  Card as CardCore,
  Icon,
  Button,
  Text,
} from '@/core'

const DataSubscriptionCard = () => {
  const features = ['Geolocation', 'Privacy Detection', 'Company', 'Carrier']
  return (
    <Card color="white">
      <H6 color="dark">Data download subscription</H6>
      <PriceContainer direction="column" gap="10px">
        <Caption>Starts at</Caption>
        <H1 color="primary">$1,000</H1>
      </PriceContainer>
      <Text>
        Daily data downloads for IP geolocation, IP ranges, carrier, company and
        more to get access to our latest and most accurate IP data. The data is
        same as as we provide via our API — quality is guaranteed. We provide
        the data in any format of your choice (eg. CSV, JSON, MMDB) and even
        customize the fields.
      </Text>
      <Flex direction="column" gap="20px">
        <Text color="dark">All the IP data you can think of</Text>
        {features.map((feature, i) => (
          <Flex gap="8px" align="center" key={i}>
            <Icon icon="checkmark" size="16px" color="primary" />
            <Caption weight="400" color="text">
              {feature}
            </Caption>
          </Flex>
        ))}
      </Flex>
      <Button variant="dark-transparent">
        Learn more about Data IP download
      </Button>
    </Card>
  )
}

export default DataSubscriptionCard

const Card = styled(CardCore)`
  gap: 30px;
  width: 530px;

  @media (max-width: 1140px) {
    width: 100%;
  }
`

const PriceContainer = styled(Flex)`
  padding-bottom: 30px;
  width: 100%;
  border-bottom: 1px solid rgba(7, 22, 37, 0.1);
`
