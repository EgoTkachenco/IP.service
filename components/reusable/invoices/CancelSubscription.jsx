import { Flex, H4, Text, Button } from '@/core'

const CancelSubscription = ({ reactivate, isActive }) => {
  return (
    <Flex direction="column" gap="15px">
      <H4 color="dark">Cancel subscription (Danger zone)</H4>
      <Text>
        {isActive
          ? "Exercise caution as cancelling your subscription could potentially disrupt your app's functioning. \nWe advise confirming that your app is no longer utilizing our API before moving forward with the cancellation."
          : 'Kindly Activate your subscription to take advantage of the most affordable and top-rated IP intelligence services available in the market.'}
      </Text>
      <div />
      <Button onClick={reactivate} width="260px" disabled={!isActive}>
        Reactivate Subscribtion
      </Button>
    </Flex>
  )
}

export default CancelSubscription
