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
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router.js'
import routes from '@/constants/routes.js'

const ResetPasswordCodeModal = observer(({ onClose }) => {
  const [step, setStep] = useState(0)
  const router = useRouter()
  const form_code = useForm({
    initialValues: {
      code: '',
    },

    validate: {
      code: (value) => {
        if (!value) return 'Code required'
        return null
      },
    },
  })
  const form_password = useForm({
    initialValues: {
      password: '',
      password_confirmation: '',
    },

    validate: {
      password: (value) => {
        if (!value) return 'Password required'
        if (value.length < 8)
          return 'The password must be at least 8 characters.'
        return null
      },
      password_confirmation: (value) => {
        if (!value) return 'Password required'
        if (value !== form_password.values.password) return 'Password not match'
        return null
      },
    },
  })
  const { resetPassword, signIn, isFetch } = store
  const onCodeSubmit = form_code.onSubmit((values) => {
    setStep(1)
  })
  const onSubmit = form_password.onSubmit((values) => {
    const { email } = router.query
    resetPassword({
      identifier: email,
      key: form_code.values.code,
      ...values,
    })
      .then(() => signIn({ email, password: values.password }))
      .then(() => {
        router.push(routes.app)
        onClose()
      })
      .catch((error) => {
        if (error?.response?.status === 500)
          form_password.setErrors({ identifier: 'Server error' })
        else if (error.errors) form_password.setErrors(error.errors)
        else form_password.setErrors('identifier', error.message)
      })
  })

  return (
    <Modal onClose={onClose} isIllustration={true}>
      <ModalTitle>Password recovery</ModalTitle>
      <ModalSubtitle>
        <Caption>Enter code from email</Caption>
      </ModalSubtitle>

      {step === 0 && (
        <Form onSubmit={onCodeSubmit}>
          <TextInput
            label="Code"
            name="code"
            {...form_code.getInputProps('code')}
          />
          <Button type="submit" disabled={isFetch}>
            Next
          </Button>
        </Form>
      )}

      {step === 1 && (
        <Form onSubmit={onSubmit}>
          <PasswordInput
            label="Password"
            name="password"
            {...form_password.getInputProps('password')}
          />
          <PasswordInput
            label="Password confirmation"
            name="confirmPassword"
            {...form_password.getInputProps('password_confirmation')}
          />
          <Button type="submit" disabled={isFetch}>
            Send
          </Button>
        </Form>
      )}
    </Modal>
  )
})

export default ResetPasswordCodeModal
