import styled from 'styled-components'
import { H3, Flex, Label, Input, Icon } from '@/core'
import { useState } from 'react'

export const ModalTitle = styled(H3).attrs(() => ({ color: 'dark' }))`
  margin-bottom: 15px;
`

export const ModalSubtitle = styled(Flex).attrs(() => ({ gap: '10px' }))`
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(7, 22, 37, 0.1);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const PasswordInput = ({ label, name }) => {
  const [show, setShow] = useState(false)
  return (
    <Flex direction="column" gap="3px">
      <Label htmlFor={name} color="light-grey" caption>
        {label}
      </Label>
      <Input
        id={name}
        type={show ? 'text' : 'password'}
        rightSlot={
          <Icon
            icon={show ? 'eye-show' : 'eye-hide'}
            onClick={() => setShow(!show)}
            size="20px"
            color="text"
          />
        }
      />
    </Flex>
  )
}

export const TextInput = ({ label, name }) => {
  return (
    <Flex direction="column" gap="3px">
      <Label htmlFor={name} color="light-grey" caption>
        {label}
      </Label>
      <Input id={name} />
    </Flex>
  )
}
