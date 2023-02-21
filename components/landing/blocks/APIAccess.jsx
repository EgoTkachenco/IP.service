import styled from 'styled-components'
import { Flex, H3, Caption, Card, Icon, Button } from '@/core'
import SubscriptionsTable from '@/components/reusable/SubscriptionsTable'
import PlanCard from '@/components/reusable/PricingPlanCard'

const APIAccess = ({ period }) => {
  return (
    <Container direction="column" gap="168px" width="100%">
      <CardsContainer flex="1 1">
        <PlanCard
          name="Basic"
          priceType={period}
          price={99}
          description="*For teams and developers"
          labelTitle="150k lookups per month"
          labelDescription="$20 per additional 10k lookups"
          features={['Basic support', 'Geolocation', 'ASN']}
          types={2}
        />
        <PlanCard
          name="Standart"
          priceType={period}
          price={249}
          description="*For growing startups and businesses"
          labelTitle="250k lookups per month"
          labelDescription="$30 per additional 25k lookups"
          features={[
            'Geolocation',
            'ASN',
            'Privacy Detection',
            'Priority Support',
          ]}
          types={3}
        />
        <PlanCard
          name="Business"
          priceType={period}
          price={499}
          description="*For businesses who needs extensive API data"
          labelTitle="500k lookups per month"
          labelDescription="$60 per additional 50k lookups"
          features={[
            'Abuse',
            'Carrier',
            'Company',
            'Hosted Domains',
            'Priority Support',
          ]}
          types={7}
        />
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
  align-items: strench;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`
