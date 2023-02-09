import styled from 'styled-components'
import {
  Flex,
  H1,
  H3,
  H6,
  Caption,
  Card,
  Icon,
  Button,
  Checkbox,
  Text,
} from '@/core'
import { TextField, TextareaField } from '@/components/reusable/FormFields'

const DataDownload = () => {
  return (
    <Flex direction="column" gap="150px" width="100%">
      <Flex gap="50px" flex="1 1">
        <DataSubscriptionCard />
        <RequestForm />
      </Flex>

      <div />
    </Flex>
  )
}

export default DataDownload

const DataSubscriptionCard = () => {
  const features = ['Geolocation', 'Privacy Detection', 'Company', 'Carrier']
  return (
    <Card gap="30px" width="530px" color="white">
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

const PriceContainer = styled(Flex)`
  padding-bottom: 30px;
  width: 100%;
  border-bottom: 1px solid rgba(7, 22, 37, 0.1);
`

const RequestForm = () => {
  return (
    <Flex direction="column" gap="40px">
      <H3 color="dark">Request your quote today</H3>
      <Flex gap="20px" width="100%">
        <TextField label="Name" name="name" />
        <TextField label="Company name" name="company" />
      </Flex>
      <TextField label="Company email" name="email" />

      <Flex direction="column" gap="20px" width="100%">
        <Text color="dark" weight="700">
          Interested in the following data
        </Text>
        <Flex gap="20px" width="100%" fwrap>
          <Checkbox label="Geolocation" />
          <Checkbox label="Company" />
          <Checkbox label="Carrier" />
          <Checkbox label="ASN" />
          <Checkbox label="Abuse" />
          <Checkbox label="Privacy Detection" />
          <Checkbox label="IP Ranges" />
          <Checkbox label="Hosted Domains" />
        </Flex>
      </Flex>

      <TextareaField
        label={
          <Text color="dark" weight="700">
            Message
          </Text>
        }
        name="message"
        placeholder="Tell us more about what you need (optional)"
        rows="4"
      />
      <Button width="270px">Request Quote</Button>
    </Flex>
  )
}

const RequestCard = styled(Card)``
