import { Card, H6, Text } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom as CardBottomCore,
  TokenQuery,
} from '@/components/reusable/styled.jsx'
import styled from 'styled-components'
import CopyButton from '@/components/reusable/CopyButton'
import TokenPreview from '@/components/reusable/TokenPreview'

const AccessToken = ({ token, host }) => {
  return (
    <Card color="white">
      <CardTitle align="center">
        <H6>ACCESS TOKEN</H6>
        <CopyButton
          color="dark"
          width="auto"
          outline
          size="small"
          data={`${host}/[IP address]?token=${token}`}
        >
          Copy to Clipboard
        </CopyButton>
      </CardTitle>
      <CardContent align="center">
        <TokenPreview
          token={token}
          p="0"
          textColor="dark"
          iconSize="30px"
          small
        />
      </CardContent>
      <CardBottom>
        <Text weight={700} color="dark">
          How to use
        </Text>
        <TokenQuery host={host} token={token} />
      </CardBottom>
    </Card>
  )
}

export default AccessToken

const CardBottom = styled(CardBottomCore)`
  flex-direction: column;
  gap: 12px;
`
