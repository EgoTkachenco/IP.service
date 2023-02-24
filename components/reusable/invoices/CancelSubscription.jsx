import { Flex, H4, Text, Button } from '@/core'

const CancelSubscription = () => {
  return (
    <Flex direction="column" gap="15px">
      <H4 color="dark">Cancel subscription (Danger zone)</H4>
      <Text>
        {
          'Please proceed with caution. Cancelling your subscription may break your app. We recommend \n to make sure your app is not using our API anymore before you proceed.'
        }
      </Text>
      <div />
      <Button width="260px">Reactivate Subscribtion</Button>
    </Flex>
  )
}

export default CancelSubscription
