import { Card, H6, Chip, Text } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom,
  Price,
} from '@/components/reusable/styled.jsx'

const UpcomingBill = ({ currentPlan }) => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>UPCOMING BILL</H6>
        <Chip type="primary-transparent">Your Plan</Chip>
      </CardTitle>

      <CardContent>
        <Price value={currentPlan?.current_price || 0} fixed="2" />
      </CardContent>

      <CardBottom>
        <Text>Subscribtion Plan ({currentPlan?.name || 'Free'})</Text>
        <Price
          color="text"
          value={currentPlan?.current_price || 0}
          variant="small"
          fixed="2"
        />
      </CardBottom>
    </Card>
  )
}

export default UpcomingBill
