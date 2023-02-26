import styled from 'styled-components'
import { Flex } from '@/core'
import SubscriptionsTable from '@/components/reusable/SubscriptionsTable'
import PlanCard from '@/components/reusable/PricingPlanCard'
import { AnimatePresence } from 'framer-motion'
import Animation from '@/components/reusable/Animation'

const APIAccess = ({ period, plans }) => {
  return (
    <Container direction="column" gap="168px" width="100%">
      <CardsContainer flex="1 1">
        <AnimatePresence mode="wait">
          {plans.map((plan, i) => (
            <Animation
              style={{ display: 'flex' }}
              key={plan.name}
              delay={i * 0.2 + 0.3}
            >
              <PlanCard
                name={plan.name}
                priceType={period}
                price={
                  period === 'yearly' ? plan.year_price * 12 : plan.month_price
                }
                description={plan.description}
                additional_description={plan.additional_description}
                options={plan.options.filter((option) => option.included)}
                types={(i + 1) * 2 + 1}
              />
            </Animation>
          ))}
        </AnimatePresence>
      </CardsContainer>

      <SubscriptionsTable />
    </Container>
  )
}

export default APIAccess

const Container = styled(Flex)`
  flex-direction: column;
  gap: 168px;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 48px;
  }
`

const CardsContainer = styled(Flex)`
  gap: 24px;
  align-items: stretch;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`
