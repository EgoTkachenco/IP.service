import { useState } from 'react'
import styled from 'styled-components'
import { Modal, Flex, Caption, Label, Input, Icon, Button } from '@/core'
import { ModalTitle, ModalSubtitle } from './styled.jsx'

const ResetPasswordModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Reset password</ModalTitle>
      <ModalSubtitle>
        <Caption>
          Strong passwords include numbers, letters, and punctuation marks
        </Caption>
      </ModalSubtitle>

      <Form>
        <PasswordInput label="Enter new password" name="password" />
        <PasswordInput label="Confirm new password" name="conformPassword" />
        <div />
        <Button>Reset Password</Button>
      </Form>
    </Modal>
  )
}

export default ResetPasswordModal

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const PasswordInput = ({ label, name }) => {
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
