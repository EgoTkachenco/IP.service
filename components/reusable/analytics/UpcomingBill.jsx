import styled from 'styled-components'
import { Card, H6, Chip, Text } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom,
  Price,
} from '@/components/reusable/styled.jsx'

const UpcomingBill = ({ planName, price }) => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>UPCOMING BILL</H6>
        <Chip type="primary-transparent">Your Plan</Chip>
      </CardTitle>

      <CardContent>
        <Price value={price} fixed="2" />
      </CardContent>

      <CardBottom>
        <Text>Subscribtion Plan ({planName})</Text>
        <Price color="text" value={price} variant="small" fixed="2" />
      </CardBottom>
    </Card>
  )
}

export default UpcomingBill
