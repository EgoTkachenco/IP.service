import styled from 'styled-components'
import { Flex, H1, H4, Caption, Card, Icon, Button } from '@/core'
import Link from 'next/link'
import routes from '@/constants/routes'

const UserPlan = () => {
  return (
    <Flex direction="column" gap="30px" width="100%">
      <H4 color="dark">Your Plan</H4>
      <CardsContainer>
        <PlanCard
          price={0}
          subtitle="You're on the Free plan"
          features={[
            '50k lookups per month.\n No additional lookups.',
            'Geolocation data',
          ]}
        />
        <PlanCard
          price={99}
          subtitle="Upgrade to Basic"
          features={[
            '50k lookups per month.\n No additional lookups.',
            'Geolocation data',
          ]}
          bottomSlot={
            <>
              <Flex gap="16px" width="100%" flex="1">
                <Button>Upgrade to Basic</Button>
                <Link href={routes.upgrade}>
                  <Button outline color="dark">
                    View All Plans
                  </Button>
                </Link>
              </Flex>
            </>
          }
        />
      </CardsContainer>
    </Flex>
  )
}

export default UserPlan

const PlanCard = ({ price, subtitle, features = [], bottomSlot }) => {
  return (
    <PlanCardWrapper color="white">
      <Flex align="flex-end">
        <PlanCardPrice color="dark">${price.toFixed(2)}</PlanCardPrice>
        <Caption>/monthly</Caption>
      </Flex>
      <PlanCardSubtitle>{subtitle}</PlanCardSubtitle>
      <Flex direction="column" gap="20px">
        {features.map((feature, i) => (
          <Flex gap="8px" align="center" key={i}>
            <Icon icon="checkmark" size="16px" color="primary" />
            <Caption>{feature}</Caption>
          </Flex>
        ))}
      </Flex>
      <PlanCardBottom>{bottomSlot}</PlanCardBottom>
    </PlanCardWrapper>
  )
}

const CardsContainer = styled(Flex)`
  width: 100%;
  gap: 30px;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 24px;
  }
`

const PlanCardWrapper = styled(Card)`
  height: 364px;
  width: 525px;

  @media (max-width: 1140px) {
    padding: 24px;
    width: 100%;
    height: auto;
  }
`

const PlanCardPrice = styled(H1)`
  line-height: 100%;
`

const PlanCardSubtitle = styled(Caption)`
  padding: 10px 0 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #f1f4f9;
  width: 100%;

  @media (max-width: 1140px) {
    padding: 8px 0 24px;
    margin-bottom: 24px;
  }
`

const PlanCardBottom = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding-top: 24px;
`
