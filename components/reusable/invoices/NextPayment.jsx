import styled from 'styled-components'
import { Caption, Card, H6, Text } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom,
} from '@/components/reusable/styled.jsx'
import { format } from 'date-fns'

const NextPayment = ({ date }) => {
  return (
    <PaymentCard color="white">
      <CardTitle>
        <H6>Next PAYMENT</H6>
      </CardTitle>
      <CardContent />
      <CardBottom>
        {date ? (
          <Text weight={600} color="dark">
            {format(new Date(date), 'MMMM dd, yyyy')}
          </Text>
        ) : (
          <Caption>No pending payment</Caption>
        )}
      </CardBottom>
    </PaymentCard>
  )
}

export default NextPayment

const PaymentCard = styled(Card)`
  width: 350px;
  min-width: 350px;

  @media (max-width: 1140px) {
    width: 100%;
    min-width: unset;
  }
`
