import routes from '@/constants/routes'
import { Flex, Text, Card } from '@/core'
import styled from 'styled-components'
import Link from 'next/link'

const RangesList = ({ data }) => {
  return (
    <Flex gap="24px" direction="column" width="100%" align="center">
      <Row size={3}>
        <Cell header>
          <Text weight={600}>IP RANGE</Text>
        </Cell>
        <Cell header>
          <Text weight={600}>FIRST IP</Text>
        </Cell>
        <Cell header>
          <Text weight={600}>LAST IP</Text>
        </Cell>
      </Row>
      <Flex gap="10px" direction="column" width="100%">
        {data.map((el, i) => (
          <ItemCard key={i}>
            <Row size={3}>
              <Cell>
                <Link href={routes.ips + '/' + el.range}>
                  <Text>{el.range}</Text>
                </Link>
              </Cell>
              <Cell>
                <Text>{el.firstAddress}</Text>
              </Cell>
              <Cell>
                <Text>{el.lastAddress}</Text>
              </Cell>
            </Row>
          </ItemCard>
        ))}
      </Flex>
    </Flex>
  )
}

export default RangesList

const ItemCard = styled(Card)`
  width: 100%;
  padding: 16px 0;
  background: rgba(80, 92, 117, 0.05);
  border-radius: 6px;
`

const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ size }) => new Array(size).fill('1fr').join(' ')};
`

const Cell = styled.div`
  padding: 0 24px;
  border-left: ${({ header }) => (header ? 'none' : '1px solid #e2e2e2')};
  @media (max-width: 1140px) {
    padding: 0 16px;
  }

  &:first-child {
    border-left: none;
  }
`
