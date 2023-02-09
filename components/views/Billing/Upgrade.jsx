import styled from 'styled-components'
import { Flex, H1, H4, Chip, Caption, Card, Icon, Button } from '@/core'
import Switch from '@/components/reusable/Switch'
import { useState } from 'react'

const Upgrade = () => {
  const [period, setPeriod] = useState('monthly')

  return (
    <Flex direction="column" gap="30px" width="100%">
      <Flex justify="space-between" align="flex-end" width="100%">
        <H4 color="dark">Get two months free with annual billing</H4>
        <Switch
          labelOff="Yearly"
          labelOn="Monthly"
          value={period === 'monthly'}
          onChange={(value) => setPeriod(value ? 'monthly' : 'yearly')}
        />
      </Flex>

      <Flex gap="24px" width="100%" flex="1 1" align="stretch">
        <PlanCard
          name="Basic"
          priceType={period}
          price={99}
          description={
            'For teams developers and hobbbyists\n that just need basic geolocation data'
          }
          labelTitle="150k lookups per month"
          labelDescription="$20 per additional 10k lookups"
          features={features}
        />
        <PlanCard
          name="Standart"
          priceType={period}
          price={249}
          description={
            'Ideal for growning startup,\n business and/or professionals'
          }
          labelTitle="250k lookups per month"
          labelDescription="$30 per additional 25k lookups"
          features={features}
          isCurrent={true}
        />
        <PlanCard
          name="Business"
          priceType={period}
          price={499}
          description={'For businesses who needs \n extensive API data'}
          labelTitle="500k lookups per month"
          labelDescription="$60 per additional 50k lookups"
          features={features}
        />
      </Flex>
    </Flex>
  )
}

export default Upgrade

const PlanCard = ({
  name,
  price,
  priceType,
  description,
  labelTitle,
  labelDescription,
  features,
  isCurrent,
}) => {
  return (
    <PlanCardWrapper color="white" gap="30px">
      <PlanCardName>
        <Chip type="primary-transparent">{name}</Chip>
      </PlanCardName>
      <Flex direction="column" gap="16px" width="100%" align="stretch">
        <Flex align="flex-end" pt="10px">
          <PlanCardPrice color="dark">${price.toFixed(2)}</PlanCardPrice>
          <Caption>/{priceType}</Caption>
        </Flex>
        <Caption>{description}</Caption>
      </Flex>
      <PriceCardLabel>
        <Caption color="white" weight="700">
          {labelTitle}
        </Caption>
        <Caption>{labelDescription}</Caption>
      </PriceCardLabel>

      <Flex direction="column" gap="25px">
        {features.map((feature, i) => (
          <Flex
            gap="8px"
            align="center"
            key={i}
            style={{ opacity: feature.isActive ? 1 : 0.5 }}
          >
            <Icon
              icon={feature.isActive ? 'checkmark' : 'closemark'}
              size="16px"
              color={feature.isActive ? 'primary' : 'grey'}
            />
            <Caption weight="400" color={feature.isActive ? 'text' : 'grey'}>
              {feature.name}
            </Caption>
          </Flex>
        ))}
      </Flex>
      <PriceCardDelimiter />
      <Button variant={isCurrent ? 'primary-transparent' : ''}>
        {isCurrent ? 'Current Plan' : name}
      </Button>
    </PlanCardWrapper>
  )
}

const PlanCardWrapper = styled(Card)`
  position: relative;
`

const PlanCardPrice = styled(H1)`
  line-height: 100%;
`

const PlanCardName = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const PriceCardLabel = styled.div`
  background: linear-gradient(90.43deg, #002e47 7.13%, #031924 99.63%);
  border-radius: 10px;
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const PriceCardDelimiter = styled.div`
  height: 1px;
  background: #f1f4f9;
  width: 100%;
`

const features = [
  { name: 'Priority support', isActive: true },
  { name: 'Geolocation', isActive: true },
  { name: 'ASN', isActive: true },
  { name: 'Privacy Detection', isActive: true },
  { name: 'Abuse', isActive: false },
  { name: 'Carrier', isActive: false },
  { name: 'Company', isActive: false },
  { name: 'IP Whois', isActive: false },
  { name: 'IP Rangers', isActive: false },
  { name: 'IP Actiity', isActive: false },
  { name: 'Support SLA', isActive: false },
  { name: 'Invoiced  Payments', isActive: false },
  { name: 'Live Onboarding', isActive: false },
  { name: 'Account Manager', isActive: false },
]
