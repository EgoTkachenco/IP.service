import { H1, H4, Flex, Card, Icon, Caption, Spacer } from '@/core'
import styled from 'styled-components'
import Whitelists from '@/components/reusable/Whitelists'

const Token = () => {
  return (
    <>
      <Flex direction="column" gap="10px">
        <Title color="dark">Access Token</Title>
        <Card
          color="white"
          gap="21px"
          direction="row"
          px="24px"
          py="16px"
          align="center"
        >
          <H1>dbaf59e6154d0d</H1>
          <Icon icon="copy" size="40px" color="primary" onClick={() => {}} />
        </Card>
        <Caption>is your access token</Caption>
      </Flex>
      <SecondTitle color="dark">Token Security</SecondTitle>
      <Whitelists />
    </>
  )
}

export default Token

const Title = styled(H4)`
  margin-bottom: 20px;
`

const SecondTitle = styled(H4)`
  margin: 65px 0 30px;
`
