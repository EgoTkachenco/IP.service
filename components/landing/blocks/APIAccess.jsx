import styled from 'styled-components'
import { Flex } from '@/core'
import PlanCard from '@/components/reusable/PricingPlanCard'
import Animation from '@/components/reusable/Animation'

const APIAccess = ({ currentPlan, period, plans, onPlanChange }) => {
  let priceKey = period === 'year' ? 'year_price' : 'month_price'
  return (
    <CardsContainer flex="1 1">
      {plans?.map((plan, i) => (
        <Animation
          style={{ display: 'flex' }}
          key={plan.name}
          delay={i * 0.2 + 0.3}
        >
          <PlanCard
            isCurrent={currentPlan?.name === plan.name}
            name={plan.name}
            priceType={period === 'year' ? 'yearly' : 'monthly'}
            price={period === 'year' ? plan.year_price : plan.month_price}
            description={`Per ${period}, billed $${plan[priceKey].toFixed(
              0
            )} ${period}ly \n${plan.description}`}
            additional_description={plan.additional_description}
            options={plan.options.filter((option) => option.included)}
            types={(i + 1) * 2 + 1}
            onSubscription={() => onPlanChange(plan.name)}
            buttonId={`${plan.name}-${period}-btn`}
          />
        </Animation>
      ))}
    </CardsContainer>
  )
}

export default APIAccess

const CardsContainer = styled(Flex)`
  gap: 24px;
  align-items: stretch;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`
