import styled from 'styled-components'
import { Flex, Card, H5 } from '@/core'

const PlansTable = () => {
  return (
    <AdminCard color="white">
      <H5 color="dark">Plans</H5>
      <Delimiter />
    </AdminCard>
  )
}

export default PlansTable

const AdminCard = styled(Card)`
  width: 100%;
`

const Delimiter = styled.div`
  margin: 8px 0;
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.text};
`
