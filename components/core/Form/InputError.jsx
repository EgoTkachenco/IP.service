import styled from 'styled-components'
import { Caption } from '../Text'

const InputError = styled(Caption)`
  transition: all 0.3s;
  padding: 0 0 0 20px;
  opacity: ${({ show }) => (show ? '1' : '0')};
  max-height${({ show }) => (show ? '16px' : 0)};
`

export default InputError
