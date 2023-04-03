import styled from 'styled-components'
import { Flex, Card, H5, Text, Icon, H6, Button } from '@/core'
import { useEffect, useState } from 'react'

const OrdersTable = ({ orders, loadOrders }) => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  useEffect(() => {
    setPage(1)
  }, [search])
  useEffect(() => {
    loadOrders(page, search)
  }, [page])
  const isFirstPage = page === 1
  const isLastPage = page === orders?.meta.last_page
  return (
    <AdminCard color="white">
      <H5 color="dark">Orders</H5>
      <Delimiter />
      <Row flex="1" title={true}>
        <Flex>
          <H6 color="dark">Payment ID</H6>
        </Flex>
        <Flex>
          <H6 color="dark">Amount</H6>
        </Flex>
        <Flex>
          <H6 color="dark">Status</H6>
        </Flex>
        <Flex>
          <H6 color="dark">Created At</H6>
        </Flex>
        <Flex></Flex>
      </Row>
      {orders?.data.map((order, i) => (
        <Row key={i} flex="1">
          <Flex>
            <Text>{order.payment_id || '---'}</Text>
          </Flex>
          <Flex>
            <Text>${order.amount.toFixed(2)}</Text>
          </Flex>
          <Flex>
            <Text>{order.status || '---'}</Text>
          </Flex>
          <Flex>
            <Text>{order.created_at.replace(' ', '\n') || '---'}</Text>
          </Flex>
          <Flex>
            <Button width="100px" size="small" onClick={() => {}}>
              Paid
            </Button>
            <Button
              width="100px"
              size="small"
              color="danger"
              onClick={() => {}}
            >
              Canceled
            </Button>
          </Flex>
        </Row>
      ))}
      <Flex justify="flex-end" width="100%" gap="16px" pt="32px">
        <Button
          width="100px"
          size="small"
          outline
          color="dark"
          disabled={isFirstPage}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button
          width="100px"
          size="small"
          outline
          color="dark"
          disabled={isLastPage}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Flex>
    </AdminCard>
  )
}

export default OrdersTable

const AdminCard = styled(Card)`
  width: 100%;
`

const Delimiter = styled.div`
  margin: 8px 0;
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.text};
`

const Row = styled(Flex)`
  width: 100%;
  border-radius: 8px;
  background: transparent;
  transition: all 0.3s;
  align-items: center;

  &:hover {
    background: ${({ title }) => (title ? '' : 'rgba(80, 92, 117, 0.1)')};
  }

  & > div {
    padding: 8px 16px;
  }
  & > :nth-child(1) {
    width: 15%;
  }
  & > :nth-child(2) {
    width: 20%;
  }
  & > :nth-child(3) {
    width: 20%;
  }
  & > :nth-child(4) {
    width: 35%;
  }
  & > :nth-child(5) {
    width: 10%;
    justify-content: flex-end;
    gap: 8px;
  }
`
