import styled from 'styled-components'
import { Flex, H1, Caption, Card, Icon } from '@/core'

const SubscriptionCard = ({
  price,
  subtitle,
  features = [],
  bottomSlot,
  priceType = 'month',
}) => {
  return (
    <CardWrapper color="white">
      <Flex align="flex-end">
        <CardPrice color="dark">${price.toFixed(2)}</CardPrice>
        <Caption>/{priceType === 'month' ? 'monthly' : 'yearly'}</Caption>
      </Flex>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <Flex direction="column" gap="20px">
        {features.map((feature, i) => (
          <Flex gap="8px" align="center" key={i}>
            <Icon icon="checkmark" size="16px" color="primary" />
            <Caption>{feature}</Caption>
          </Flex>
        ))}
      </Flex>
      <CardBottom>{bottomSlot}</CardBottom>
    </CardWrapper>
  )
}

export default SubscriptionCard

const CardWrapper = styled(Card)`
  height: 364px;
  width: 525px;

  @media (max-width: 1140px) {
    padding: 24px;
    width: 100%;
    height: auto;
  }
`

const CardPrice = styled(H1)`
  line-height: 100%;
`

const CardSubtitle = styled(Caption)`
  padding: 10px 0 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #f1f4f9;
  width: 100%;

  @media (max-width: 1140px) {
    padding: 8px 0 24px;
    margin-bottom: 24px;
  }
`

const CardBottom = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding-top: 24px;
`
