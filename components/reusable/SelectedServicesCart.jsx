import styled from 'styled-components'
import { Flex, Card, H3, H6, Button, Icon, Text, Caption, Chip } from '@/core'

const SelectedServicesCart = ({
  details,
  period,
  selected,
  onItemRemove,
  onSubscribe,
  discount,
  price,
}) => {
  const list = details.filter((el) => selected.includes(el.id))
  const priceKey = period === 'month' ? 'month_price' : 'year_price'

  const sum = list.reduce((acc, option) => (acc += option[priceKey]), 0)
  const additional_req_sum = list.reduce(
    (acc, option) => (acc += option.additional_requests_price),
    0
  )
  return (
    <CartCard color="white">
      <Flex width="100%" justify="space-between">
        <Title>Selected Services</Title>
        {discount ? <Chip type="red">-{discount}%</Chip> : ''}
      </Flex>
      <Content>
        {list.length === 0 ? (
          <EmptyBox>
            <Icon icon="box" size="64px" color="text" />
            <Text weight={600}>Add services and subscribe</Text>
          </EmptyBox>
        ) : (
          <>
            {list.map((el) => (
              <ListItem key={el.id}>
                <IconWrapper color={el.color}>
                  <Icon icon={el.icon} size="24px" color="white" />
                </IconWrapper>
                <Text color="dark" weight={700}>
                  {el.name}
                </Text>
                <Icon
                  icon="close"
                  size="24px"
                  color="light-grey"
                  onClick={() => onItemRemove(el.id)}
                />
              </ListItem>
            ))}
            <Text weight={600}>Total:</Text>
            <Flex align="baseline">
              <H3 color="dark" weight={700}>
                ${price.toFixed(0)}
              </H3>
              <Caption weight={700}>/100k lookups</Caption>
            </Flex>
            <Lookups>
              <Caption weight={700} color="dark">
                100k lookups per month
              </Caption>
              <Caption weight={500}>
                ${additional_req_sum.toFixed(0)} per additional 10k lookups
              </Caption>
            </Lookups>
          </>
        )}
      </Content>
      <Button
        id="custom-plan-subscribe"
        value={sum.toFixed(0)}
        disabled={list.length === 0}
        variant={list.length === 0 ? 'primary-transparent' : null}
        onClick={onSubscribe}
      >
        Subscribe
      </Button>
    </CartCard>
  )
}

export default SelectedServicesCart

const CartCard = styled(Card)`
  width: 360px;
  min-width: 360px;
  min-height: 492px;
  position: sticky;
  top: 0;
  @media (max-width: 1140px) {
    width: 100%;
    position: static;
    top: unset;
  }
`

const Title = styled(H6)`
  width: 100%;
  padding-bottom: 25px;
  border-bottom: 1px solid #f1f4f9;
`

const Content = styled(Flex)`
  width: 100%;
  flex-grow: 1;
  gap: 10px;
  padding: 25px 0 20px;
  flex-direction: column;
`

const EmptyBox = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: auto 0;
`

const ListItem = styled(Flex)`
  gap: 20px;
  align-items: center;
  padding: 10px 0;
  width: 100%;

  & > :nth-child(2) {
    flex-grow: 1;
  }
`

const IconWrapper = styled(Flex)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${({ theme, color }) => theme.colors[color] || 'transparent'};
  border-radius: 8px;
`

const Lookups = styled(Card)`
  background: rgba(80, 92, 117, 0.05);
  padding: 25px 20px;
  gap: 2px;
  margin: 20px 0;
  width: 100%;
  border-radius: 8px;
`
