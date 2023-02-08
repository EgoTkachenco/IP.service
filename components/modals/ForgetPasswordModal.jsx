import styled from 'styled-components'
import { Modal, Caption, Button } from '@/core'
import {
  ModalTitle,
  ModalSubtitle,
  PasswordInput,
  TextInput,
  Form,
} from './styled.jsx'

const ForgetPasswordModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose} isIllustration={true}>
      <ModalTitle>Password recovery</ModalTitle>
      <ModalSubtitle>
        <Caption>Enter your phone number or email</Caption>
      </ModalSubtitle>

      <Form>
        <TextInput label="Email" name="email" />
        <Button>Send</Button>
      </Form>
    </Modal>
  )
}

export default ForgetPasswordModal

const ForgotPassword = styled(Caption)`
  margin: -10px 0 10px;
`
