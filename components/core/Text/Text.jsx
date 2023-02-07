import styled from 'styled-components'

const defaultProps = (props) => ({
  font: props.font || 'primary',
  color: props.color || 'text',
  align: props.align || 'initial',
})

const defaultStyles = ({ theme, font, color, align }) => `
	font-family: ${theme.fonts[font]};
	color: ${theme.colors[color]};
	text-align: ${align};
	white-space: break-spaces;
`

const variantStyles = (props, type) => `
	font-size: ${props.theme.typographic[type].size};
	line-height: ${props.theme.typographic[type].height};
	font-weight: ${props.weight || props.theme.typographic[type].weight};
`

export const H1 = styled.h1.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${(props) => variantStyles(props, 'h1')}
`

export const H2 = styled.h2.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${(props) => variantStyles(props, 'h2')}
`

export const H3 = styled.h3.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${(props) => variantStyles(props, 'h3')}
`

export const H4 = styled.h4.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${(props) => variantStyles(props, 'h4')}
`

export const H5 = styled.h5.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${(props) => variantStyles(props, 'h5')}
	letter-spacing: 0.01em;
`

export const H6 = styled.h6.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${(props) => variantStyles(props, 'h6')}
	letter-spacing: 0.01em;
`

export const Link = styled.div.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${({ caption }) =>
    caption
      ? (props) => variantStyles(props, 'caption')
      : (props) => variantStyles(props, 'link')}
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  cursor: pointer;
  letter-spacing: 0.01em;
  text-decoration-line: underline;
`

export const Caption = styled.div.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${(props) => variantStyles(props, 'caption')}
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  letter-spacing: 0.01em;
`

export const Text = styled.div.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${(props) => variantStyles(props, 'text')}
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  letter-spacing: 0.01em;
`

export const Label = styled.label.attrs(defaultProps)`
  ${({ font, color, align, theme }) =>
    defaultStyles({ font, color, align, theme })}
  ${({ caption }) =>
    caption
      ? (props) => variantStyles(props, 'caption')
      : (props) => variantStyles(props, 'text')}
			
	letter-spacing: -0.02em;
  font-feature-settings: 'calt' off;
  cursor: pointer;
`
