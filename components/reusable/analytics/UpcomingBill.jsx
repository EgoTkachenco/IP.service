import styled from 'styled-components'
import { Card, H6, Chip, Text } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom,
  Price,
} from '@/components/reusable/styled.jsx'

const UpcomingBill = () => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>UPCOMING BILL</H6>
        <Chip type="primary-transparent">Your Plan</Chip>
      </CardTitle>

      <CardContent>
        <Price value="99" fixed="2" />
      </CardContent>

      <CardBottom>
        <Text>Subscribtion Plan (Bussiness)</Text>
        <Price color="text" value="99" variant="small" fixed="2" />
      </CardBottom>
    </Card>
  )
}

export default UpcomingBill
