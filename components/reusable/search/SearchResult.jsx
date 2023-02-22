import styled from 'styled-components'
import { Card, Chip, Flex } from '@/core'
import JSONPreview from './JSONPreview'
import PlanCard from './PlanCard'

const Result = ({ result }) => {
  if (!result) return ''

  return (
    <WrapperCard color="white">
      <ChipContainer gap="10px">
        <Chip type="success">Basic</Chip>
      </ChipContainer>
      <JSONPreview title="Abuse" data={result.abuse} />
      <Divider />
      <JSONPreview title="Company" data={result.company} />
      <Divider />
      <JSONPreview
        title="ASN"
        data={result.asn}
        bottomSlot={
          <PlanCard
            name="Basic"
            buttonColor="success"
            buttonText="Buy for $99.00/mo"
            onClick={() => {}}
            marginBottom={false}
          />
        }
      />

      {/* <ChipContainer gap="10px">
        <Chip type="success">Basic</Chip>
        <Chip type="secondary">Standart</Chip>
      </ChipContainer>
      <JSONPreview title="Geolocation" data={Geolocation_standart} />
      <Divider />
      <JSONPreview
        title="ASN"
        data={ASN_standart}
        bottomSlot={
          <PlanCard
            name="Standart"
            buttonColor="secondary"
            buttonText="Buy for $249.00/mo"
            onClick={() => {}}
          />
        }
      />

      <ChipContainer gap="10px">
        <Chip type="success">Basic</Chip>
        <Chip type="secondary">Standart</Chip>
        <Chip type="primary">Business</Chip>
      </ChipContainer>
      <JSONPreview
        title="Domains"
        data={Domains_business}
        bottomSlot={
          <PlanCard
            name="Business"
            buttonColor="primary"
            buttonText="Buy for $499.00/mo"
            onClick={() => {}}
            marginBottom={false}
          />
        }
      /> */}
    </WrapperCard>
  )
}

export default Result

const WrapperCard = styled(Card)`
  width: 100%;
  @media (max-width: 1140px) {
    padding: 16px;
  }
`

const ChipContainer = styled(Flex)`
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 1px solid rgba(7, 22, 37, 0.1);
  margin-bottom: 30px;
`

const Divider = styled.div`
  height: 1px;
  background: rgba(7, 22, 37, 0.1);
  width: 100%;
  margin: 30px 0;

  @media (max-width: 1140px) {
    margin: 24px 0;
  }
`

const Geolocation_basic = [
  { name: 'hostname', value: 'dns.google', type: 'object' },
  { name: 'city', value: 'Mountain View', type: 'object' },
  { name: 'region', value: 'California', type: 'object' },
  { name: 'country', value: 'US', type: 'object' },
  { name: 'loc', value: '37.3860,-122.0838', type: 'object' },
  { name: 'postal', value: '94035', type: 'object' },
  { name: 'timezone', value: 'America/Los_Angeles', type: 'object' },
]

const ASN_basic = [
  { name: 'name', value: 'Mountain View', type: 'object' },
  { name: 'domain', value: 'California', type: 'object' },
  { name: 'route', value: 'US', type: 'object' },
  { name: 'type', value: '37.3860,-122.0838', type: 'object' },
]

const Geolocation_standart = [
  {
    name: 'address',
    value: 'US, CA, Mountain View, 1600 Amphitheatre Parkway, 94043',
    type: 'number',
  },
  { name: 'country', value: 'US', type: 'number' },
  { name: 'email', value: 'network-abuse@google.com', type: 'number' },
  { name: 'name', value: 'Abuse', type: 'number' },
  { name: 'network', value: '8.8.8.0/24', type: 'number' },
  { name: 'phone', value: '+1-650-253-0000', type: 'number' },
]

const ASN_standart = [
  { name: 'name', value: 'Google LLC', type: 'object' },
  { name: 'domain', value: 'google.com', type: 'object' },
  { name: 'type', value: 'bussiness', type: 'object' },
]

const Domains_business = [
  { name: 'ip', value: '"dns.google', type: 'object' },
  { name: 'total', value: 'Mountain View', type: 'object' },
  {
    name: 'domains',
    value: 'California',
    type: 'array',
    children: [
      '41.cn',
      'mcqs.az',
      'etempurl.com',
      'ftempurl.com',
      'proxyie.cn',
    ],
  },
]
