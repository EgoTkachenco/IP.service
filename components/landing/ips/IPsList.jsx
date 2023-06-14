import routes from '@/constants/routes'
import { Flex, Text, Card } from '@/core'
import styled from 'styled-components'
import Link from 'next/link'

const IPsList = ({ data }) => {
  const formated_data = splitToChunks(data, 3)
  return (
    <Flex gap="24px" direction="column" width="100%" align="center">
      <Flex gap="10px" direction="column" width="100%">
        {formated_data.map((row, i) => (
          <ItemCard key={i}>
            <Row size={3}>
              {row.map((el, i) => (
                <Cell key={i}>
                  <Link href={routes.summary + '/' + el.address}>
                    <Text>{el.address}</Text>
                  </Link>
                </Cell>
              ))}
            </Row>
          </ItemCard>
        ))}
      </Flex>
    </Flex>
  )
}

export default IPsList

const splitToChunks = (data, chunkSize = 3) => {
  const result = []
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize)
    result.push(chunk)
  }
  return result
}

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
