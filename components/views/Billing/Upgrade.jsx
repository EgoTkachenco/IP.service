import styled from 'styled-components'
import { Flex, H4 } from '@/core'
import Switch from '@/components/reusable/Switch'
import { useState } from 'react'
import PlanCard from '@/components/reusable/UpgradePlanCard'

const Upgrade = () => {
  const [period, setPeriod] = useState('monthly')

  return (
    <Flex direction="column" gap="30px" width="100%">
      <TitleContainer>
        <H4 color="dark">Get two months free with annual billing</H4>
        <Switch
          labelOff="Yearly"
          labelOn="Monthly"
          value={period === 'monthly'}
          onChange={(value) => setPeriod(value ? 'monthly' : 'yearly')}
        />
      </TitleContainer>

      <CardsContainer flex="1 1">
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
      </CardsContainer>
    </Flex>
  )
}

export default Upgrade

const TitleContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 32px;

    & > :first-child {
      width: 100%;
    }
  }
`

const CardsContainer = styled(Flex)`
  width: 100%;
  gap: 24px;
  align-items: stretch;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
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
