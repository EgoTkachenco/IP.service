import { keyframes } from 'styled-components'

export const infinite_line = (gap = 0) => keyframes`
	0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(calc(-100% - ${gap}), 0);
  }
`
