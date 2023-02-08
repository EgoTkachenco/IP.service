import styled from 'styled-components'
import { Modal, Caption, Button, Checkbox } from '@/core'
import {
  ModalTitle,
  ModalSubtitle,
  PasswordInput,
  TextInput,
  Form,
} from './styled.jsx'

const SignUpModal = ({ onLogin, onClose }) => {
  return (
    <Modal onClose={onClose} isIllustration={true}>
      <ModalTitle>Registration</ModalTitle>
      <ModalSubtitle>
        <Caption>Already have an account?</Caption>
        <Caption color="light-grey" onClick={onLogin}>
          Log in
        </Caption>
      </ModalSubtitle>

      <Form>
        <TextInput label="Email" name="email" />
        <PasswordInput label="Password" name="password" />
        <PasswordInput label="Password confirmation" name="confirmPassword" />
        <CheckboxBlock>
          <Checkbox label="I'll get by with the rules of the coronation of the service" />
        </CheckboxBlock>
        <Button>Create an account</Button>
      </Form>
    </Modal>
  )
}

export default SignUpModal

const CheckboxBlock = styled(Caption)`
  margin: 0 0 10px;
`
