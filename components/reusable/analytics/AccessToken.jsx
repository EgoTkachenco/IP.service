import { Card, H6, Text, Chip } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom as CardBottomCore,
  TokenQuery,
} from '@/components/reusable/styled.jsx'
import styled from 'styled-components'

const AccessToken = () => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>ACCESS TOKEN</H6>
        <Chip type="grey-outline">Copy to Clipboard</Chip>
      </CardTitle>
      <CardContent justify="center" align="center">
        <Text color="light-grey">No requests this week</Text>
      </CardContent>
      <CardBottom>
        <Text weight={700} color="dark">
          How to use
        </Text>
        <TokenQuery token={123123} />
      </CardBottom>
    </Card>
  )
}

export default AccessToken

const CardBottom = styled(CardBottomCore)`
  flex-direction: column;
  gap: 12px;
`
