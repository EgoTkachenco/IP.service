import styled from 'styled-components'
import { Card, H6, Text, Flex, Button, Icon } from '@/core'
import { CardBottom } from '@/components/reusable/styled.jsx'
import { getOrderUrl, getDownloadOrderUrl } from '@/utils/api'

const OrderHistory = ({ orders }) => {
  // 	getOrderUrl
  // getDownloadOrderUrl
  const onViewClick = (id) => {
    getOrderUrl(id)
      .then(({ link }) => {
        if (link) window.open(link, '_blank')
      })
      .catch((error) => console.log(error.message))
  }
  const onDownloadClick = (id) => {
    getDownloadOrderUrl(id)
      .then(({ link }) => {
        if (link) window.open(link, '_blank')
      })
      .catch((error) => console.log(error.message))
  }
  return (
    <Card color="white" width="100%">
      <H6>ORDER HISTORY</H6>
      <Row>
        <Column>
          <Text color="dark" weight={700}>
            Amount
          </Text>
        </Column>
        <Column>
          <Text color="dark" weight={700}>
            Date
          </Text>
        </Column>
        <Column>
          <Text color="dark" weight={700}>
            Status
          </Text>
        </Column>
        <Column>
          <Text color="dark" weight={700}>
            Action
          </Text>
        </Column>
      </Row>
      {orders &&
        orders.map((order, i) => (
          <Row key={i} noBorder={i === 0}>
            <Column>
              <Text color="grey" weight={400}>
                ${order.amount.toFixed(2)}
              </Text>
            </Column>
            <Column>
              <Text color="grey" weight={400}>
                {order.created_at.replace(' ', '\n')}
              </Text>
            </Column>
            <Column>
              <Text color="grey" weight={400}>
                {order.status}
              </Text>
            </Column>
            <Column>
              {order.invoice_id && (
                <Flex gap="8px">
                  <Button
                    variant="primary-transparent"
                    width="90px"
                    size="small"
                    onClick={() => onViewClick(order.invoice_id)}
                  >
                    View
                  </Button>
                  <Button
                    width="45px"
                    size="small"
                    onClick={() => onDownloadClick(order.invoice_id)}
                  >
                    <Icon icon="export" size="19px" />
                  </Button>
                </Flex>
              )}
            </Column>
          </Row>
        ))}
    </Card>
  )
}

export default OrderHistory

const Row = styled(CardBottom)`
  align-items: center;
  justify-content: flex-start;
  border: ${({ noBorder }) => (noBorder ? 'none' : 'inherite')};
`

const Column = styled(Flex)`
  width: 172px;
  flex-direction: column;
  gap: 10px;
`
