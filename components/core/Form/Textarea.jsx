import styled from 'styled-components'
import InputError from './InputError'
import Flex from '../Flex'
import { useState, useEffect } from 'react'
import TextField from './TextField'

export default function Textarea({
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
  rows = 1,
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
        textarea={true}
      >
        <TextareaField
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
          rows={rows}
        />
      </TextField>
      <InputError color="danger" show={!!error}>
        {error}
      </InputError>
    </Flex>
  )
}

export const TextareaField = styled.textarea`
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
  resize: none;

  &:focus {
    outline: none;
  }
`
