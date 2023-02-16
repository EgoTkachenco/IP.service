import styled from 'styled-components'
import { Caption } from '../Text'

const InputError = styled(Caption)`
  transition: all 0.3s ease-in-out;
  padding: 0;
  opacity: ${({ show }) => (show ? '1' : '0')};
  max-height: ${({ show }) => (show ? '16px' : 0)};
  width: 100%;
`

export default InputError
