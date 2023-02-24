import styled from 'styled-components'
import { Flex } from '@/core'
import SubscriptionsTable from '@/components/reusable/SubscriptionsTable'
import PlanCard from '@/components/reusable/PricingPlanCard'
// import { observer } from 'mobx-react-lite'
// import PlansStore from '@/store/PlansStore'

const APIAccess = ({ period, plans }) => {
  // const { plans } = PlansStore
  return (
    <Container direction="column" gap="168px" width="100%">
      <CardsContainer flex="1 1">
        {plans.map((plan, i) => (
          <PlanCard
            name={plan.name}
            key={plan.name}
            priceType={period}
            price={
              period === 'yearly' ? plan.year_price * 12 : plan.month_price
            }
            description={plan.description}
            additional_description={plan.additional_description}
            // labelTitle="150k lookups per month"
            // labelDescription="$20 per additional 10k lookups"
            options={plan.options.filter((option) => option.included)}
            types={(i + 1) * 2 + 1}
          />
        ))}
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
