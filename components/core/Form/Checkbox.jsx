import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import { Caption } from '../Text'
import Icon from '../Icon'

export default function Checkbox({
  name,
  value,
  onChange = () => {},
  label,
  size = 'medium',
}) {
  const [state, setState] = useState(false)
  useEffect(() => {
    setState(!!value)
  }, [value])
  const handleChange = (newValue) => {
    setState(newValue)
    onChange(newValue)
  }

  return (
    <Flex align="center" onClick={() => handleChange(!state)} gap="10px">
      <Box size={size} active={!!state}>
        <Value active={!!state}>
          <Icon icon="checkmark" size="8px" color="white" />
        </Value>
      </Box>
      <Label color="light-grey">{label}</Label>
    </Flex>
  )
}

const Box = styled.div`
  border: 1px solid
    ${({ theme, active }) => (active ? 'transparent' : theme.colors.text)};
  border-radius: 4px;
  min-width: 18px;
  min-height: 18px;
  max-width: 18px;
  max-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : 'transparent'};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
const Value = styled.div`
  svg {
    transition: all 0.3s;
    opacity: ${({ active }) => (active ? 1 : 0)};
  }
`

const Label = styled(Caption)`
  line-height: 100%;
  cursor: pointer;
`
