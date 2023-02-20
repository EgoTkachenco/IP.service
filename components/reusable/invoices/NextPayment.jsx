import styled from 'styled-components'
import { Caption, Card, H6 } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom,
} from '@/components/reusable/styled.jsx'

const NextPayment = () => {
  return (
    <PaymentCard color="white">
      <CardTitle>
        <H6>Next PAYMENT</H6>
      </CardTitle>
      <CardContent />
      <CardBottom>
        <Caption>No pending payment</Caption>
      </CardBottom>
    </PaymentCard>
  )
}

export default NextPayment

const PaymentCard = styled(Card)`
  width: 350px;

  @media (max-width: 1140px) {
    width: 100%;
  }
`
