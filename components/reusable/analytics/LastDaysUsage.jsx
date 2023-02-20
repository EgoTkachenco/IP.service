import { Card, H6, Text, Chip } from '@/core'
import { CardTitle, CardContent } from '@/components/reusable/styled.jsx'

const LastDaysUsage = () => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>Last 7 days</H6>
        <Chip type="primary-transparent">Requests today: 0</Chip>
      </CardTitle>
      <CardContent justify="center" align="center">
        <Text color="light-grey">No requests this week</Text>
      </CardContent>
    </Card>
  )
}

export default LastDaysUsage
