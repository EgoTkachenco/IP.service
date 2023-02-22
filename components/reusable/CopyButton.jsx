import { Button, Caption } from '@/core'
import { useClipboard } from '@mantine/hooks'
import styled from 'styled-components'

const CopyButton = (props) => {
  const clipboard = useClipboard({ timeout: 1000 })

  return (
    <Button
      {...props}
      color={clipboard.copied ? 'success' : props.color}
      onClick={() => clipboard.copy(JSON.stringify(props.data))}
    >
      {props.children}
      {clipboard.copied && <CopiedLabel color="white">Copied</CopiedLabel>}
    </Button>
  )
}

export default CopyButton

const CopiedLabel = styled(Caption)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.success};
  border-radius: 8px;
`
