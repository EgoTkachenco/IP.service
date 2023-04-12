import styled from 'styled-components'
import { Flex, H4, Button, Link as TextLink } from '@/core'
import Link from 'next/link'
import routes from '@/constants/routes'
import SubscriptionCard from '@/components/reusable/SubscriptionCard'

const Subscription = ({
  currentPlan,
  plans,
  upgradeToBasic,
  isFreePlan = true,
}) => {
  const basicPlan = plans?.find((plan) => plan.name === 'Basic')
  if (!plans) return
  return (
    <Flex direction="column" gap="30px" width="100%">
      <H4 color="dark">Your Plan</H4>

      <CardsContainer flex="1">
        {isFreePlan ? (
          <>
            <SubscriptionCard
              price={0}
              subtitle="You're on the Free plan"
              features={[
                '50k lookups per month.\n No additional lookups.',
                'Geolocation data',
              ]}
            />
            <SubscriptionCard
              price={basicPlan.month_price}
              subtitle="Upgrade to Basic"
              features={basicPlan.options
                .filter((option) => option.included)
                .map((option) => option.name)}
              bottomSlot={
                <UpgradePlanButtons
                  upgradeToBasic={() => upgradeToBasic(basicPlan.name, 'month')}
                />
              }
            />
          </>
        ) : (
          <SubscriptionCard
            price={currentPlan.current_price}
            priceType={currentPlan.type}
            subtitle={`You're on the ${currentPlan.title} plan`}
            features={basicPlan.options
              .filter((option) => option.included)
              .map((option) => option.name)}
            bottomSlot={
              <TextLink color="primary">
                Switch to annual billing and get 2 month free
              </TextLink>
            }
          />
        )}
      </CardsContainer>
    </Flex>
  )
}

export default Subscription

const UpgradePlanButtons = ({ upgradeToBasic }) => (
  <Flex gap="16px" width="100%" flex="1">
    <Button onClick={upgradeToBasic}>Upgrade to Basic</Button>
    <Link href={routes.upgrade}>
      <Button outline color="dark">
        View All Plans
      </Button>
    </Link>
  </Flex>
)

const CardsContainer = styled(Flex)`
  width: 100%;
  gap: 30px;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 24px;
  }
`
