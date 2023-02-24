import styled from 'styled-components'
import { Card, H6, Text, Flex, Button, Icon } from '@/core'
import { CardBottom } from '@/components/reusable/styled.jsx'

const OrderHistory = () => {
  return (
    <Card color="white" width="100%">
      <H6>ORDER HISTORY</H6>
      <Row>
        <Column>
          <Text color="dark" weight={700}>
            Amount
          </Text>
          <Text color="grey" weight={400}>
            $499.00
          </Text>
        </Column>
        <Column>
          <Text color="dark" weight={700}>
            Date
          </Text>
          <Text color="grey" weight={400}>
            Paid
          </Text>
        </Column>
        <Column>
          <Text color="dark" weight={700}>
            Status
          </Text>
          <Text color="grey" weight={400}>
            Paid
          </Text>
        </Column>
        <Column>
          <Text color="dark" weight={700}>
            Action
          </Text>
          <Flex gap="8px">
            <Button variant="primary-transparent" width="90px" size="small">
              View
            </Button>
            <Button width="45px" size="small">
              <Icon icon="export" size="19px" />
            </Button>
          </Flex>
        </Column>
      </Row>
    </Card>
  )
}

export default OrderHistory

const Row = styled(CardBottom)`
  justify-content: flex-start;
`

const Column = styled(Flex)`
  width: 172px;
  flex-direction: column;
  gap: 10px;
`
