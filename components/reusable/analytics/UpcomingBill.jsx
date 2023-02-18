import styled from 'styled-components'
import { Card, H1, H6, Flex, Chip, Text } from '@/core'

const UpcomingBill = () => {
  return (
    <Card color="white">
      <Flex width="100%" justify="space-between">
        <H6>UPCOMING BILL</H6>
        <Chip type="primary-transparent">Your Plan</Chip>
      </Flex>
      <Price color="dark">$99.00</Price>
      <Delimiter />
      <Flex width="100%" justify="space-between">
        <Text>Subscribtion Plan (Bussiness)</Text>
        <Text weight="700">$99.00</Text>
      </Flex>
    </Card>
  )
}

export default UpcomingBill

const Price = styled(H1)`
  margin-top: 19px;
`

const Delimiter = styled.div`
  width: 100%;
  margin: 34px 0;
  background: #f1f4f9;
  height: 1px;
`
