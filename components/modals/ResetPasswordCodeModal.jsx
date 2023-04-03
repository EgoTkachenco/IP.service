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
import { useState } from 'react'

const ResetPasswordCodeModal = observer(({ onClose }) => {
  const [isSended, setIsSended] = useState(false)
  const form = useForm({
    initialValues: {
      key: '',
      password: '',
      password_confirmation: '',
    },

    validate: {
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
  const { resetPassword, isFetch, forgetIdentifier } = store
  const onSubmit = form.onSubmit((values) => {
    resetPassword({ ...values, identifier: forgetIdentifier })
      .then(() => {
        setIsSended(true)
        // onClose()
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
      {!isSended && (
        <ModalSubtitle>
          <Caption>Enter code from email</Caption>
        </ModalSubtitle>
      )}

      {!isSended && (
        <Form onSubmit={onSubmit}>
          <TextInput label="Code" name="code" {...form.getInputProps('key')} />
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
      )}

      {isSended && <ModalTitle align="center">Successfull</ModalTitle>}
    </Modal>
  )
})

export default ResetPasswordCodeModal
