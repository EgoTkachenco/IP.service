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

  svg:not(.stroke) {
    cursor: pointer;
    fill: ${({ color, theme }) => theme.colors[color]} !important;
  }
  svg.stroke {
    cursor: pointer;
    stroke: ${({ color, theme }) => theme.colors[color]} !important;
  }

  path {
    transition: all 0.3s;
  }

  &:disabled {
    opacity: 0.8;
    cursor: default;
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
  color: ${({ color, theme }) => theme.colors[color]};
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

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s;
    background: ${({ color, theme }) => theme.colors[color]};
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
  &:active {
    transform: scale(1.02);
  }
`
const CustomButton = styled(ButtonCore)`
  background: purple;
  color: #fff;
  font-weight: bold;

  &:hover {
    background: transparent;
    border-color: purple;
    color: purple;
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
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
  custom: CustomButton,
  icon: IconButton,
}

const Button = React.forwardRef(function Button(
  {
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
      ref={ref}
      as={ButtonTemplate}
      color={color}
      font={font}
      type={type}
      width={width}
      onClick={onClick}
      {...sizeProps}
    >
      {children}
    </ButtonCore>
  )
})

export default Button
