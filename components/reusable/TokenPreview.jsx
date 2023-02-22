import styled from 'styled-components'
import { Card, H1, Icon } from '@/core'
import { useClipboard } from '@mantine/hooks'

const TokenPreview = ({ token }) => {
  const clipboard = useClipboard({ timeout: 1000 })
  return (
    <TokenCard color="white">
      <H1>{token}</H1>
      <Icon
        icon="copy"
        size="40px"
        color="primary"
        onClick={() => clipboard.copy(token)}
      />
      {clipboard.copied && <CopiedMessage color="dark">Copied</CopiedMessage>}
    </TokenCard>
  )
}

export default TokenPreview

const TokenCard = styled(Card)`
  position: relative;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  gap: 21px;
`

const CopiedMessage = styled(H1)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
`
