import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { useClickOutside } from 'hooks'
import Flex from '../Flex'
import Icon from '../Icon'
import theme from '@/styles/theme'
import TextField, { TextFieldVariant } from './TextField'
import { InputField } from './Input'
import InputError from './InputError'

interface SelectProps {
  id?: string
  name?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  options: [string] | []
  error?: string
  isRead?: boolean

  variant: TextFieldVariant
  rightSlot?: JSX.Element
  leftSlot?: JSX.Element
}

const Select = ({
  id,
  name,
  value = '',
  onChange = () => {},
  placeholder,
  options = [],
  error,
  isRead,
  variant,
  rightSlot,
  leftSlot,
}: SelectProps) => {
  const [show, setShow] = useState(false)
  const [state, setState] = useState(value)
  useEffect(() => {
    setState(value)
  }, [value])
  const handleClick = (option: string) => {
    setState(option)
    onChange(option)
    setShow(false)
  }
  const ref = useClickOutside<HTMLDivElement>(() => setShow(false))

  return (
    <Flex direction="column" ref={ref} style={{ position: 'relative' }}>
      <TextField
        type={variant}
        focused={show}
        leftSlot={leftSlot}
        rightSlot={
          rightSlot || (
            <Icon
              icon="chevron"
              style={{ transform: `rotate(${show ? '180deg' : '0'})` }}
            />
          )
        }
        onClick={() => !isRead && setShow(true)}
      >
        <InputField
          id={id}
          name={name}
          value={state}
          onChange={() => {}}
          placeholder={placeholder}
          readOnly={true}
        />
      </TextField>
      <Menu show={show}>
        {options &&
          options.map((option, i) => (
            <Option
              key={option + i}
              onClick={() => handleClick(option)}
              title={option}
            >
              {option}
            </Option>
          ))}
      </Menu>
      <InputError color="danger" show={!!error}>
        {error}
      </InputError>
    </Flex>
  )
}

export default Select

const Menu = styled.div<{ show: boolean }>`
  position: absolute;
  width: 100%;
  max-width: 100%;
  top: calc(100% + 2px);
  left: 0;
  z-index: 100;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  gap: 2px;
  background-color: white;
  max-height: 200px;
  overflow: auto;
  border: 1px solid ${theme.colors.dark};
`

const Option = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.dark};
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`
