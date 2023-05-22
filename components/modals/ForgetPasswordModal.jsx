import styled from 'styled-components'
import { Modal, Caption, Button } from '@/core'
import { ModalTitle, ModalSubtitle, TextInput, Form } from './styled.jsx'
import { observer } from 'mobx-react-lite'
import store from '@/store/AuthStore'
import { useForm } from '@mantine/form'
import { useState } from 'react'

const ForgetPasswordModal = observer(({ onClose, redirect }) => {
  const [isSended, setIsSended] = useState(false)
  const form = useForm({
    initialValues: {
      identifier: '',
    },

    validate: {
      identifier: (value) => {
        if (!value) return 'Email required'
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email'
        return null
      },
    },
  })
  const { forgetPassword, isFetch } = store
  const onSubmit = form.onSubmit((values) => {
    forgetPassword(values)
      .then(() => {
        setIsSended(true)
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
          <Caption>Enter your phone number or email</Caption>
        </ModalSubtitle>
      )}

      {!isSended && (
        <Form onSubmit={onSubmit}>
          <TextInput
            label="Email"
            name="email"
            {...form.getInputProps('identifier')}
          />
          <Button type="submit" disabled={isFetch}>
            Send
          </Button>
        </Form>
      )}

      {isSended && (
        <ModalSubtitle align="center">
          Check your email for password reset url
        </ModalSubtitle>
      )}
    </Modal>
  )
})

export default ForgetPasswordModal
