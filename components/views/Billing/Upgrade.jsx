import styled from 'styled-components'
import { Flex, H4 } from '@/core'
import Switch from '@/components/reusable/Switch'
import { useState } from 'react'
import PlanCard from '@/components/reusable/UpgradePlanCard'
import PlansStore from '@/store/PlansStore'
import { observer } from 'mobx-react-lite'

const Upgrade = observer(() => {
  const { plans } = PlansStore
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
        {plans.map((plan) => (
          <PlanCard
            name={plan.name}
            key={plan.name}
            priceType={period}
            price={period === 'yearly' ? plan.price * 12 : plan.price}
            description={plan.description}
            labelTitle="150k lookups per month"
            labelDescription="$20 per additional 10k lookups"
            options={plan.options}
          />
        ))}
      </CardsContainer>
    </Flex>
  )
})

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
