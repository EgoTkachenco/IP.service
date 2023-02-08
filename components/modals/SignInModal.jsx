import styled from 'styled-components'
import { Modal, Caption, Button } from '@/core'
import {
  ModalTitle,
  ModalSubtitle,
  PasswordInput,
  TextInput,
  Form,
} from './styled.jsx'

const SignInModal = ({ onRegistration, onForget, onClose }) => {
  return (
    <Modal onClose={onClose} isIllustration={true}>
      <ModalTitle>Log In</ModalTitle>
      <ModalSubtitle>
        <Caption>Don't have an account yet?</Caption>
        <Caption color="light-grey" onClick={onRegistration}>
          Registration
        </Caption>
      </ModalSubtitle>

      <Form>
        <TextInput label="Email" name="email" />
        <PasswordInput label="Password" name="password" />
        <ForgotPassword color="light-grey" onClick={onForget}>
          Forgot your password?
        </ForgotPassword>
        <Button>Create an account</Button>
      </Form>
    </Modal>
  )
}

export default SignInModal

const ForgotPassword = styled(Caption)`
  margin: -10px 0 10px;
`
