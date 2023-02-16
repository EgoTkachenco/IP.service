import styled from 'styled-components'
import { Modal, Caption, Button, Checkbox } from '@/core'
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

const SignUpModal = observer(({ onLogin, onClose }) => {
  const router = useRouter()
  const form = useForm({
    initialValues: {
      identifier: '',
      password: '',
      password_confirmation: '',
      accept: false,
    },

    validate: {
      identifier: (value) => {
        if (!value) return 'Email required'
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email'
        return null
      },
      password: (value) => {
        if (!value) return 'Password required'
        if (value.length < 8)
          return 'The password must be at least 8 characters.'
        return null
      },
      password_confirmation: (value) => {
        if (!value) return 'Password required'
        if (value !== form.values.password) return 'Password not match'
        return null
      },
    },
  })
  const { signUp, isFetch } = store
  const onSubmit = form.onSubmit((values) => {
    signUp(values)
      .then(() => {
        // router.push('/app')
        onClose()
      })
      .catch((error) => {
        if (error.errors) form.setErrors(error.errors)
        else form.setErrors('identifier', error.message)
      })
  })
  return (
    <Modal onClose={onClose} isIllustration={true}>
      <ModalTitle>Registration</ModalTitle>
      <ModalSubtitle>
        <Caption>Already have an account?</Caption>
        <Caption color="light-grey" onClick={onLogin}>
          Log in
        </Caption>
      </ModalSubtitle>

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
        <PasswordInput
          label="Password confirmation"
          name="confirmPassword"
          {...form.getInputProps('password_confirmation')}
        />
        <CheckboxBlock>
          <Checkbox
            label="I'll get by with the rules of the coronation of the service"
            {...form.getInputProps('accept')}
          />
        </CheckboxBlock>
        <Button type="submit" disabled={isFetch}>
          Create an account
        </Button>
      </Form>
    </Modal>
  )
})

export default SignUpModal

const CheckboxBlock = styled(Caption)`
  margin: 0 0 10px;
`
