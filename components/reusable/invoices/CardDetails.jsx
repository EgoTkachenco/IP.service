import { Card, H6, Icon, Caption } from '@/core'
import { CardTitle, CardContent } from '@/components/reusable/styled.jsx'
import styled from 'styled-components'

const CardDetails = () => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>Card on file</H6>
        <Icon icon="edit" size="20px" color="primary" />
      </CardTitle>
      <CardContent>
        <CreditCard
          name="George Johnson"
          expirationDate="09/2024"
          cardNumber="**** **** ****  35 76"
        />
      </CardContent>
    </Card>
  )
}

export default CardDetails

const CreditCard = ({ name, expirationDate, cardNumber }) => {
  return (
    <CreditCardContainer>
      <CreditCardBackground src="/creadit-card.png" />
      <CreditCardName color="white">{name}</CreditCardName>
      <CreditCardNumber color="white">{cardNumber}</CreditCardNumber>
      <CreditCardDate color="white">{expirationDate}</CreditCardDate>
    </CreditCardContainer>
  )
}

const CreditCardContainer = styled.div`
  position: relative;
  aspect-ratio: 10 / 6;
  width: 100%;
  max-width: 565px;
`

const CreditCardBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const CreditCardName = styled(H6)`
  position: absolute;
  top: 30px;
  left: 30px;
  text-transform: uppercase;
  @media (max-width: 1140px) {
    top: 16px;
    left: 16px;
  }
`

const CreditCardNumber = styled(Caption)`
  position: absolute;
  bottom: 30px;
  left: 30px;

  @media (max-width: 1140px) {
    bottom: 16px;
    left: 16px;
  }
`

const CreditCardDate = styled(Caption)`
  position: absolute;
  bottom: 30px;
  right: 30px;

  @media (max-width: 1140px) {
    bottom: 16px;
    right: 16px;
  }
`
