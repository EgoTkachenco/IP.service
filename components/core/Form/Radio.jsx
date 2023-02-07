import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '@/styles/theme'
import Flex from '../Flex'
import { Label } from '../Text'

type RadioSize = keyof typeof theme.forms.radio.sizes

interface RadioProps {
  name?: string
  value: string
  onChange: (value: string) => void
  label?: string | JSX.Element
  options: [string] | []
  direction: 'row' | 'column'
  size: RadioSize
}

export default function Radio({
  name,
  value = '',
  onChange = () => {},
  label,
  options = [],
  direction = 'column',
  size = 'medium',
}: RadioProps) {
  const [state, setState] = useState('')
  useEffect(() => {
    setState(value)
  }, [value])
  const handleChange = (newValue: string) => {
    setState(newValue)
    onChange(newValue)
  }
  return (
    <Flex direction={direction} align="center" gap="8px">
      {options.map((option, i) => (
        <RadioElement
          key={`${option}-${i}`}
          label={option}
          value={state === option}
          onChange={() => handleChange(option)}
          size={size}
        />
      ))}
    </Flex>
  )
}

interface RadioElementProps {
  value: boolean
  label: string | JSX.Element
  onChange: React.MouseEventHandler<HTMLDivElement>
  size: RadioSize
}

const RadioElement = ({ value, label, onChange, size }: RadioElementProps) => {
  return (
    <Flex align="center" onClick={onChange} gap="8px">
      <Box size={size}>
        <Value active={value} />
      </Box>
      <Label caption color="gray">
        {label}
      </Label>
    </Flex>
  )
}

const Box = styled.div<{ size: RadioSize }>`
  border: 1px solid ${theme.colors.dark};
  border-radius: 50%;
  width: ${({ size }) => theme.forms.radio.sizes[size]};
  height: ${({ size }) => theme.forms.radio.sizes[size]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 3px;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`
const Value = styled.div<{ active: boolean }>`
  border-radius: 50%;
  width: ${({ active }) => (active ? '100%' : '0')};
  height: ${({ active }) => (active ? '100%' : '0')};
  transition: all 0.3s;
  background: ${({ active }) =>
    active ? theme.colors.primary : 'transparent'};
`
