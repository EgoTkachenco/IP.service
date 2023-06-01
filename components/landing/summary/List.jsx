import { Flex, Button, Card, Text } from '@/core'
import { useState } from 'react'
import styled from 'styled-components'

const page_size = 10

const List = ({ data = [], columns = [], moreText = 'Show more' }) => {
  const [page, setPage] = useState(1)
  const result = data.slice(0, page * page_size)
  const isShowMore = result.length < data.length
  const f_column = (column) => column[0].toUpperCase().concat(column.slice(1))
  return (
    <Flex gap="24px" direction="column" width="100%" align="center">
      <Row size={columns.length}>
        {columns.map((column) => (
          <Cell key={column} header>
            <Text weight={600}>{f_column(column)}</Text>
          </Cell>
        ))}
      </Row>
      <Flex gap="10px" direction="column" width="100%">
        {result.map((el, i) => (
          <ItemCard key={i}>
            <Row size={columns.length}>
              {columns.map((column) => (
                <Cell key={column}>
                  <Text>{el[column]}</Text>
                </Cell>
              ))}
            </Row>
          </ItemCard>
        ))}
      </Flex>
      {isShowMore && (
        <Button
          variant="dark-transparent"
          width="250px"
          onClick={() => setPage(page + 1)}
        >
          {moreText}
        </Button>
      )}
    </Flex>
  )
}

export default List

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

  &:first-child {
    border-left: none;
  }
`
