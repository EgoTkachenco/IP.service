import styled from 'styled-components'
import { get_padding_sizes } from '@/styles/utils'

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ fwrap }) => (fwrap ? 'wrap' : 'unset')};
  width: ${({ width }) => width || 'initial'};
  padding: ${({ p, px, py, pl, pr, pt, pb }) =>
    get_padding_sizes({ p, px, py, pl, pr, pt, pb })};

  ${({ flex }) => (flex ? `& > * {flex: ${flex};}` : '')}
`

export default Flex
