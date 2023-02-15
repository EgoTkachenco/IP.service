import styled from 'styled-components'
import { Modal, Caption, Button } from '@/core'
import {
  ModalTitle,
  ModalSubtitle,
  PasswordInput,
  TextInput,
  Form,
} from './styled.jsx'
import { useForm } from '@mantine/form'
import { useRequest } from '@/hooks'
import { login } from '@/utils/api'

const SignInModal = ({ onRegistration, onForget, onClose }) => {
  const form = useForm({
    initialValues: {
      identifier: '',
      password: '',
    },

    validate: {
      identifier: (value) => {
        if (!value) return 'Email required'
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email'
        return null
      },
      password: (value) => {
        if (!value) return 'Password required'
        return null
      },
    },
  })
  const { apiCall: loginUser, isFetch } = useRequest(login)

  const onSubmit = form.onSubmit((values) => {
    loginUser(values)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error.message)
      })
  })

  return (
    <Modal onClose={onClose} isIllustration={true}>
      <ModalTitle>Log In</ModalTitle>
      <ModalSubtitle>
        <Caption>Don't have an account yet?</Caption>
        <Caption color="light-grey" onClick={onRegistration}>
          Registration
        </Caption>
      </ModalSubtitle>
      {isFetch ? 'loading...' : ''}
      <Form onSubmit={onSubmit}>
        <TextInput
          label="Email"
          name="email"
          {...form.getInputProps('identifier')}
        />
        <PasswordInput
          label="Password"
          name="password"
          {...form.getInputProps('password')}
        />
        <ForgotPassword color="light-grey" onClick={onForget}>
          Forgot your password?
        </ForgotPassword>
        <Button type="submit">Create an account</Button>
      </Form>
    </Modal>
  )
}

export default SignInModal

const ForgotPassword = styled(Caption)`
  margin: -10px 0 10px;
`
