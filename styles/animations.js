import { keyframes } from 'styled-components'

export const infinite_line = (gap = 0) => keyframes`
	0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(calc(-100% - ${gap}), 0);
  }
`

export const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const app_load = (blur = false) => keyframes`
	0% {
		opacity: 1;
		height: 100%;
	}
	99% {
		opacity: ${blur ? 1 : 0};
		height: 100%;
	}
	100% {
		height: ${blur ? '100%' : 0};
	}
`
