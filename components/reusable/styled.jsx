import styled from 'styled-components'
import { Flex, Icon, Caption } from '@/core'

export const CardTitle = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding-bottom: 24px;
`

export const CardContent = styled(Flex)`
  width: 100%;
  flex-grow: 1;
`

export const CardBottom = styled(Flex)`
  margin-top: 24px;
  padding-top: 24px;
  width: 100%;
  justify-content: space-between;

  border-top: 1px solid #f1f4f9;
`

export const Price = styled.div.attrs(
  ({ color, fixed = 0, variant = 'large', value }) => ({
    color: color || 'dark',
    children: !isNaN(Number(value))
      ? '$' + Number(value).toFixed(fixed)
      : value,
    variant,
  })
)`
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: 700;
  ${({ variant }) => {
    if (variant === 'small')
      return `
				font-size: 16px;
				line-height: 150%;
				letter-spacing: 0.01em;
			`
    if (variant === 'medium')
      return `
				font-size: 32px;
				line-height: 40px;
			`
    return `
			font-size: 48px ;
			line-height: 60px;
		`
  }}

  @media (max-width: 1140px) {
    ${({ variant }) => {
      if (variant === 'small')
        return `
					font-size: 12px;
				`
      return `
				font-size: 24px ;
				line-height: 30px;
			`
    }}
  }
`

export const TokenQuery = ({ token, host }) => (
  <Flex align="center" gap="4px" fwrap>
    <Icon icon="question" size="18px" color="primary" />
    <Caption weight="700" inline>
      Query Parameter
    </Caption>
    <Caption inline>
      {host}/[IP address] ?token={token}
    </Caption>
  </Flex>
)
