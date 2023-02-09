import styled from 'styled-components'
import { Flex, H1, H4, Text, Caption, Card, Icon, Button } from '@/core'

const Subscription = () => {
  return (
    <>
      <Plan />
      <UserData />
    </>
  )
}

export default Subscription

const Plan = () => {
  return (
    <Flex direction="column" gap="30px" width="100%">
      <H4 color="dark">Your Plan</H4>
      <Flex gap="30px" width="100%" flex="1">
        <PlanCard
          price={0}
          subtitle="You're on the Free plan"
          features={[
            '50k lookups per month. No additional lookups.',
            'Geolocation data',
          ]}
        />
        <PlanCard
          price={99}
          subtitle="Upgrade to Basic"
          features={[
            '50k lookups per month. No additional lookups.',
            'Geolocation data',
          ]}
          bottomSlot={
            <>
              <Flex gap="16px" width="100%">
                <Button>Upgrade to Basic</Button>
                <Button outline color="dark">
                  View All Plans
                </Button>
              </Flex>
            </>
          }
        />
      </Flex>
    </Flex>
  )
}

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

const PlanCardWrapper = styled(Card)`
  height: 364px;
`

const PlanCardPrice = styled(H1)`
  line-height: 100%;
`

const PlanCardSubtitle = styled(Caption)`
  padding: 10px 0 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #f1f4f9;
`

const PlanCardBottom = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  width: 100%;
`

const UserData = () => {
  return (
    <Flex direction="column" gap="10px">
      <H4 color="dark">Your Data Downloads</H4>
      <Text weight="400">You haven't subscribed to any data downloads</Text>
    </Flex>
  )
}
