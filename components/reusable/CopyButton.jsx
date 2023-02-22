import { Button } from '@/core'
import { useClipboard } from '@mantine/hooks'

const CopyButton = (props) => {
  const clipboard = useClipboard({ timeout: 500 })

  return (
    <Button
      {...props}
      color={clipboard.copied ? 'success' : props.color}
      onClick={() => clipboard.copy(JSON.stringify(props.data))}
    >
      {clipboard.copied ? 'Copied' : props.children}
    </Button>
  )
}

export default CopyButton
