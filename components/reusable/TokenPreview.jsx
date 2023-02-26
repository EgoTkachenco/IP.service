import styled from 'styled-components'
import { Card, H1, Icon } from '@/core'
import { useClipboard, useMediaQuery } from '@mantine/hooks'

const TokenPreview = ({
  token,
  color = 'white',
  small = false,
  iconSize = '40px',
  textColor = 'text',
  p = '16px 24px',
}) => {
  const clipboard = useClipboard({ timeout: 1000 })
  const isMobile = useMediaQuery('(max-width: 1140px)')
  const icon_size = isMobile ? '24px' : iconSize
  return (
    <TokenCard color={color} p={p} small={small}>
      <H1 color={textColor}>{token}</H1>
      <Icon
        icon="copy"
        size={icon_size}
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
  padding: ${({ p }) => p};
  flex-direction: row;
  align-items: center;
  gap: 21px;

  ${H1} {
    ${({ small }) =>
      small &&
      `
				font-size: 36px;
				line-height: 45px;
		`}
    @media (max-width: 1140px) {
      font-size: 20px;
      line-height: 25px;
    }
  }

  @media (max-width: 1140px) {
    gap: 16px;
  }
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
