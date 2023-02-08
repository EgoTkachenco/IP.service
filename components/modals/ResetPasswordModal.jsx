import styled from 'styled-components'
import { Modal, Caption, Button } from '@/core'
import { ModalTitle, ModalSubtitle, Form, PasswordInput } from './styled.jsx'

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
