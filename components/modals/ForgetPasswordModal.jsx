import styled from 'styled-components'
import { Modal, Caption, Button } from '@/core'
import { ModalTitle, ModalSubtitle, TextInput, Form } from './styled.jsx'
import { observer } from 'mobx-react-lite'
import store from '@/store/AuthStore'
import { useForm } from '@mantine/form'

const ForgetPasswordModal = observer(({ onClose }) => {
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
        debugger
        console.log('OK')
        // router.push('/app')
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
      <ModalSubtitle>
        <Caption>Enter your phone number or email</Caption>
      </ModalSubtitle>

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
    </Modal>
  )
})

export default ForgetPasswordModal
