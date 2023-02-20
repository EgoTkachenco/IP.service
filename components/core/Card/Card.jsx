import Flex from '../Flex/Flex'
import styled from 'styled-components'

const Card = styled(Flex).attrs(({ p, direction, theme }) => ({
  p: p || theme.card.default_padding,
  direction: direction || 'column',
}))`
  overflow: hidden;
  box-shadow: ${({ shadowed, theme }) =>
    shadowed ? theme.card.default_shadow : ''};
  border-radius: ${({ theme }) => theme.card.default_radius};
  background: ${({ bordered, color, theme }) =>
    color && !bordered ? theme.colors[color] : ''};

  ${({ bordered, color, theme }) =>
    bordered
      ? `border: 1px solid ${color ? theme.colors[color] : theme.colors.dark}`
      : ''};

  @media (max-width: 1140px) {
    padding: 24px;
  }
`

export default Card
