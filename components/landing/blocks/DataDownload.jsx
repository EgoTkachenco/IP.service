import styled from 'styled-components'
import { Flex } from '@/core'

import DataSubscriptionCard from '@/components/reusable/DataSubscriptionCard'
import RequestForm from '@/components/reusable/RequestForm'
import Animation from '@/components/reusable/Animation'

const DataDownload = () => {
  return (
    <Flex direction="column" gap="150px" width="100%">
      <Container flex="1 1">
        <Animation>
          <DataSubscriptionCard />
        </Animation>
        <Animation delay={0.3}>
          <RequestForm />
        </Animation>
      </Container>

      <div />
    </Flex>
  )
}

export default DataDownload

const Container = styled(Flex)`
  gap: 50px;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 48px;
  }
`
