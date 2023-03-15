import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
	* { 
		box-sizing: border-box;
	}
	body {
		max-width: 100%;
		margin: 0;	
		font-family: ${theme.fonts.primary};
		scroll-behavior: smooth;

		&.no-scroll {
			overflow-y: scroll;
			#__next {
				max-height: 100vh;
				overflow: hidden;
			}
			/* & > div {
				overflow-y: scroll;
			} */
		}
	}
	h1, h2, h3, h4, h5, h6, p, a {
		text-decoration: none;
		margin: 0;
	}

	/* width */
	.custom-scroll::-webkit-scrollbar, .custom-scroll-dark::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	/* Track */
	.custom-scroll::-webkit-scrollbar-track {
		background: transparent; 
	}

	.custom-scroll-dark::-webkit-scrollbar{
		background: transparent; 
	}
	
	/* Handle */
	.custom-scroll::-webkit-scrollbar-thumb {
		background: rgba(31, 45, 58, 0.25);
		border-radius: 10px;
	}

	.custom-scroll-dark::-webkit-scrollbar-thumb {
		background: #1F2D3A;
		border-radius: 10px;
	}

	/* Handle on hover */
	.custom-scroll::-webkit-scrollbar-thumb:hover {
		/* background: rgba(255, 255, 255, 0.25); */
	}

	/* mantine carousel */
	.mantine-Carousel-controls {
		width: calc(100% + 112px);
		left: -56px;
		@media (max-width: 1140px) {
			display: none;
			width: calc(100% + (48px * 2));
			left: -48px;
		}
	}
	.mantine-Carousel-control {
		background: transparent !important;
		box-shadow: unset;
		border: none;

		&[data-inactive=true] {
			opacity: 0.25;
		}
	}
	
`
