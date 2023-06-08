import styled from 'styled-components'
import { Modal, Caption, Button, InputError } from '@/core'
import {
  ModalTitle,
  ModalSubtitle,
  PasswordInput,
  TextInput,
  Form,
} from './styled.jsx'
import { useForm } from '@mantine/form'
import store from '@/store/AuthStore'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import routes from '@/constants/routes.js'

const SignInModal = observer(({ onRegistration, onForget, onClose }) => {
  const router = useRouter()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => {
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
  const { signIn, isFetch } = store
  const onSubmit = form.onSubmit((values) => {
    signIn(values)
      .then((user) => {
        if (user.role.name === 'admin') router.push('/admin')
        else router.push(routes.app)
        onClose()
      })
      .catch((error) => {
        if (error.errors.identifier)
          error.errors.email = error.errors.identifier
        if (error.errors) form.setErrors(error.errors)
        else form.setErrors('email', error.message)
      })
  })
  const error =
    form.getInputProps('email').error || form.getInputProps('password').error

  return (
    <Modal onClose={onClose} isIllustration={true}>
      <ModalTitle>Log In</ModalTitle>
      <ModalSubtitle>
        <Caption>Don't have an account yet?</Caption>
        <Caption color="light-grey" onClick={onRegistration}>
          Registration
        </Caption>
      </ModalSubtitle>

      <Form onSubmit={onSubmit}>
        <TextInput
          label="Email"
          name="email"
          value={form.getInputProps('email').value}
          onChange={form.getInputProps('email').onChange}
        />
        <PasswordInput
          label="Password"
          name="password"
          value={form.getInputProps('password').value}
          onChange={form.getInputProps('password').onChange}
        />
        <ForgotPassword color="light-grey" onClick={onForget}>
          Forgot your password?
        </ForgotPassword>
        <Button type="submit" disabled={isFetch}>
          Enter
        </Button>
        <InputError color="danger" show={!!error}>
          {error}
        </InputError>
      </Form>
    </Modal>
  )
})

export default SignInModal

const ForgotPassword = styled(Caption)`
  margin: -10px 0 10px;
  cursor: pointer;
`
