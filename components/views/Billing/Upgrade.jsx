import styled from 'styled-components'
import { Flex, H4 } from '@/core'
import Switch from '@/components/reusable/Switch'
import { useState, useEffect } from 'react'
import PlanCard from '@/components/reusable/UpgradePlanCard'
import PlansStore from '@/store/PlansStore'
import { observer } from 'mobx-react-lite'
import Animation from '@/components/reusable/Animation'

const Upgrade = observer(() => {
  const { plans, loadPlans } = PlansStore
  const [period, setPeriod] = useState('monthly')
  useEffect(() => {
    if (!plans) loadPlans()
  })

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
        {plans &&
          plans.map((plan, i) => (
            <Animation
              key={plan.name}
              delay={i * 0.2}
              style={{ display: 'flex', alignItems: 'strench' }}
            >
              <PlanCard
                key={plan.name}
                name={plan.name}
                priceType={period}
                price={
                  period === 'yearly' ? plan.year_price * 12 : plan.month_price
                }
                description={plan.description}
                additional_description={plan.additional_description}
                options={plan.options}
              />
            </Animation>
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
