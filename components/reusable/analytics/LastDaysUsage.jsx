import { Card, H6, H1, Chip } from '@/core'
import { CardTitle, CardContent } from '@/components/reusable/styled.jsx'

const LastDaysUsage = ({ value, today }) => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>Last 7 days</H6>
        <Chip type="primary-transparent">Requests today: {today}</Chip>
      </CardTitle>
      <CardContent justify="center" align="center">
        <H1 color="dark">{value}</H1>
      </CardContent>
    </Card>
  )
}

export default LastDaysUsage
