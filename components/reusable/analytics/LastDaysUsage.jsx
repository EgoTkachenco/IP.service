import { Card, H6, Flex, Chip } from '@/core'

const LastDaysUsage = () => {
  return (
    <Card color="white">
      <Flex width="100%" justify="space-between">
        <H6>Last 7 days</H6>
        <Chip type="primary-transparent">Requests today: 0</Chip>
      </Flex>
    </Card>
  )
}

export default LastDaysUsage
