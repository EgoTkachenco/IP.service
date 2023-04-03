import { Modal, Caption, Button } from '@/core'
import {
  ModalTitle,
  ModalSubtitle,
  TextInput,
  Form,
  PasswordInput,
} from './styled.jsx'
import { observer } from 'mobx-react-lite'
import store from '@/store/AuthStore'
import { useForm } from '@mantine/form'

const ResetPasswordCodeModal = observer(({ onClose }) => {
  const form = useForm({
    initialValues: {
      identifier: '',
      key: '',
      password: '',
      password_confirmation: '',
    },

    validate: {
      identifier: (value) => {
        if (!value) return 'Email required'
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email'
        return null
      },
      key: (value) => {
        if (!value) return 'Code required'
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
  const { resetPassword, isFetch } = store
  const onSubmit = form.onSubmit((values) => {
    resetPassword(values)
      .then(() => {
        onClose()
      })
      .catch((error) => {
        if (error?.response?.status === 500)
          form.setErrors({ identifier: 'Server error' })
        else if (error.errors) form.setErrors(error.errors)
        else form.setErrors('identifier', error.message)
      })
  })

  return (
    <Modal onClose={onClose} isIllustration={true}>
      <ModalTitle>Password recovery</ModalTitle>
      <ModalSubtitle>
        <Caption>Enter code from email</Caption>
      </ModalSubtitle>

      <Form onSubmit={onSubmit}>
        <TextInput label="Code" name="code" {...form.getInputProps('key')} />
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
        <Button type="submit" disabled={isFetch}>
          Send
        </Button>
      </Form>
    </Modal>
  )
})

export default ResetPasswordCodeModal
