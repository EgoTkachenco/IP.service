import styled from 'styled-components'
import { Flex, H4 } from '@/core'
import Switch from '@/components/reusable/Switch'
import { useState } from 'react'
import PlanCard from '@/components/reusable/UpgradePlanCard'
import Animation from '@/components/reusable/Animation'

const Upgrade = ({ currentPlan, plans, setUserPlan }) => {
  const [period, setPeriod] = useState('month')

  return (
    <Flex direction="column" gap="30px" width="100%">
      <TitleContainer>
        <H4 color="dark">Get two months free with annual billing</H4>
        <Switch
          labelOff="Yearly"
          labelOn="Monthly"
          value={period === 'month'}
          onChange={(value) => setPeriod(value ? 'month' : 'year')}
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
                price={period === 'year' ? plan.year_price : plan.month_price}
                description={plan.description}
                additional_description={plan.additional_description}
                options={plan.options}
                setPlan={() => setUserPlan(plan.name, period)}
                isCurrent={currentPlan?.name === plan.name}
              />
            </Animation>
          ))}
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
