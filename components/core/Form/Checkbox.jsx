import { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '@/styles/theme'
import Flex from '../Flex'
import { Label } from '../Text'

type CheckboxSize = keyof typeof theme.forms.checkbox.sizes

interface CheckboxProps {
  name?: string
  value: boolean
  onChange?: (value: boolean) => void
  label?: string | JSX.Element
  size: CheckboxSize
}

export default function Checkbox({
  name,
  value,
  onChange = () => {},
  label,
  size = 'medium',
}: CheckboxProps) {
  const [state, setState] = useState(false)
  useEffect(() => {
    setState(!!value)
  }, [value])
  const handleChange = (newValue: boolean) => {
    setState(newValue)
    onChange(newValue)
  }

  return (
    <Flex align="center" onClick={() => handleChange(!state)} gap="8px">
      <Box size={size}>
        <Value active={!!state} />
      </Box>
      <Label color="gray">{label}</Label>
    </Flex>
  )
}

const Box = styled.div<{ size: CheckboxSize }>`
  border: 1px solid ${theme.colors.dark};
  border-radius: 8px;
  width: ${({ size }) => theme.forms.checkbox.sizes[size]};
  height: ${({ size }) => theme.forms.checkbox.sizes[size]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`
const Value = styled.div<{ active: boolean }>`
  width: 50%;
  height: 25%;
  transform: rotate(-45deg) translate(2px, -1px);
  transition: all 0.3s;
  border: 2px solid transparent;
  border-color: ${({ active }) =>
    active ? theme.colors.primary : 'transparent'};
  border-right: none;
  border-top: none;
`
