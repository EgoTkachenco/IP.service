import styled from 'styled-components'
import InputError from './InputError'
import Flex from '../Flex'
import { useState, useEffect } from 'react'
import TextField from './TextField'

export default function Input({
  id,
  name,
  value = '',
  onChange = () => {},
  placeholder,
  error,
  rightSlot,
  leftSlot,
  type,
  disabled = false,
  readOnly = false,
  variant,
  width = '100%',
  noErrorMessage = false,
}) {
  const [state, setState] = useState('')
  useEffect(() => {
    setState(value)
  }, [value])

  const handleChange = (newValue) => {
    setState(newValue)
    onChange(newValue)
  }

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  return (
    <Flex direction="column" width={width}>
      <TextField
        variant={variant}
        focused={focused}
        leftSlot={leftSlot}
        rightSlot={rightSlot}
        error={!!error}
      >
        <InputField
          id={id}
          name={name}
          value={state}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </TextField>
      <InputError color="danger" show={!noErrorMessage && !!error}>
        {!noErrorMessage && (error || ' ')}
      </InputError>
    </Flex>
  )
}

export const InputField = styled.input`
  flex-grow: 1;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.typographic.caption.size};
  line-height: ${({ theme }) => theme.typographic.caption.height};
  font-weight: 500;
  transition: all 0.3s;
  background: none;
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`
