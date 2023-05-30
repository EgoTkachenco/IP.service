import React from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useContext } from 'react'

const ButtonCore = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  background: transparent;
  line-height: 120%;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;

  font-family: ${({ font, theme }) => theme.fonts[font]};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  white-space: nowrap;
  line-height: 160%;
  letter-spacing: 0.01em;
  font-weight: 700;
  padding: ${(props) => props.padding};

  @media (max-width: 1140px) {
    font-size: 12px;
    line-height: 160%;
    padding-left: 12px;
    padding-right: 12px;
  }

  svg:not(.stroke) {
    cursor: pointer;
    fill: ${({ color, theme }) => theme.colors[color]} !important;
  }
  svg.stroke {
    cursor: pointer;
    stroke: ${({ color, theme }) => theme.colors[color]} !important;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`
const ButtonFlatCore = styled(ButtonCore)`
  background: ${({ color, theme }) => theme.colors[color]};
  color: #ffffff;

  svg:not(.stroke) {
    fill: #ffffff !important;
  }
  svg.stroke {
    stroke: #ffffff !important;
  }

  &:hover {
    background: transparent;
    border-color: ${({ color, theme }) => theme.colors[color]};
    color: ${({ color, theme }) => theme.colors[color]};

    svg:not(.stroke) {
      fill: ${({ color, theme }) => theme.colors[color]} !important;
    }
    svg.stroke {
      stroke: ${({ color, theme }) => theme.colors[color]} !important;
    }
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`
const ButtonOutlineCore = styled(ButtonCore)`
  border-color: ${({ color, theme }) => theme.colors.grey};
  color: ${({ color, theme }) =>
    color === 'white' ? theme.colors[color] : 'dark'};
  /* theme.colors[color] */
  background: transparent;

  &:hover {
    background: ${({ color, theme }) => theme.colors[color]};
    color: ${({ color, theme }) =>
      color === 'white' ? theme.colors['dark'] : theme.colors['white']};

    svg:not(.stroke) {
      fill: ${({ color, theme }) =>
        color === 'white'
          ? theme.colors['dark']
          : theme.colors['white']} !important;
    }
    svg.stroke {
      stroke: ${({ color, theme }) =>
        color === 'white'
          ? theme.colors['dark']
          : theme.colors['white']} !important;
    }
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
    border-color: ${({ color, theme }) => theme.colors[color]};
    color: ${({ color, theme }) => theme.colors[color]};

    svg:not(.stroke) {
      fill: ${({ color, theme }) => theme.colors[color]} !important;
    }
    svg.stroke {
      stroke: ${({ color, theme }) => theme.colors[color]} !important;
    }
  }
`
const ButtonTextCore = styled(ButtonCore)`
  background: transparent;
  border-radius: 30px;
  color: ${({ color, theme }) => theme.colors[color]};
  font-weight: 600;
  padding: 0;
  transition: all 0.1s;

  &:active {
    transform: scale(1.02);
  }
`
const PrimaryTransparentButton = styled(ButtonCore)`
  background: rgba(14, 93, 246, 0.1);
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`
const DarkTransparentButton = styled(ButtonCore)`
  background: rgba(80, 92, 117, 0.05);
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    background: rgba(80, 92, 117, 0.1);
  }
`
const IconButton = styled(ButtonCore)`
  max-width: ${({ height }) => height};
  min-width: ${({ height }) => height};
  padding: 0;
  height: ${({ height }) => height};
  background: ${({ color, theme }) => theme.colors[color]};
  border-radius: 50%;
  svg {
    cursor: pointer;
  }
  path {
    fill: white;
  }

  &:hover {
    background: transparent;
    border-color: ${({ color, theme }) => theme.colors[color]};
    color: ${({ color, theme }) => theme.colors[color]};

    path {
      fill: ${({ color, theme }) => theme.colors[color]};
    }
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`

// Variants for custom buttons
const variants = {
  'primary-transparent': PrimaryTransparentButton,
  'dark-transparent': DarkTransparentButton,
  icon: IconButton,
}

const Button = React.forwardRef(function Button(
  {
    id,
    variant,
    color = 'primary',
    text,
    outline,
    font = 'primary',
    children,
    size = 'large',
    type = 'button',
    onClick = () => {},
    width,
    height,
    disabled = false,
    value = undefined,
  },
  ref
) {
  let ButtonTemplate = ButtonFlatCore

  if (variant) ButtonTemplate = variants[variant]
  else if (outline) ButtonTemplate = ButtonOutlineCore
  else if (text) ButtonTemplate = ButtonTextCore

  const theme = useContext(ThemeContext)

  const sizeProps = theme.buttons.sizes[size]
  if (height) sizeProps.height = height
  return (
    <ButtonCore
      id={id}
      ref={ref}
      as={ButtonTemplate}
      color={color}
      font={font}
      type={type}
      width={width}
      onClick={onClick}
      disabled={disabled}
      value={value}
      {...sizeProps}
    >
      {children}
    </ButtonCore>
  )
})

export default Button
