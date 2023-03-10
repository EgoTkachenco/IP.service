import styled from 'styled-components'
import { Card, Flex, Text, Checkbox, Button, InputError } from '@/core'
import { TextField, TextareaField } from './FormFields'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { sendFeedback } from '@/utils/api'

const REASONS = ['General inquiry', 'Support request', 'Sales inquiry']

const ContactForm = ({ isDark = false, onSubmit }) => {
  const [sended, setSended] = useState(false)
  const router = useRouter()
  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      contact_reason: '',
      comment: '',
    },

    validate: {
      first_name: (value) => (value ? null : 'Required'),
      last_name: (value) => (value ? null : 'Required'),
      contact_reason: (value) => (value ? null : 'Required'),
      email: (value) => {
        if (!value) return 'Email required'
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email'
        return null
      },
    },
  })

  const handleSubmit = form.onSubmit((values) => {
    sendFeedback({ ...values, url: router.pathname })
      .then(() => {
        setSended(true)
      })
      .catch((error) => {
        if (error.code === 'ERR_BAD_RESPONSE')
          form.setErrors({ email: 'Server error' })
        else if (error.errors) form.setErrors(error.errors)
        else if (error.message) form.setErrors({ email: error.message })
      })
  })

  const onReasonChange = (newValue) => {
    const value = form.getInputProps('contact_reason').value
    form
      .getInputProps('contact_reason')
      .onChange(value === newValue ? '' : newValue)
  }
  const { value: reasonValue, error: reasonError } =
    form.getInputProps('contact_reason')

  return (
    <Form onSubmit={sended ? (e) => e.preventDefault() : handleSubmit}>
      <Flex gap="30px">
        <TextField
          label="Name"
          placeholder="Name"
          name="name"
          variant={isDark ? 'dark' : null}
          {...form.getInputProps('first_name')}
        />
        <TextField
          label="Surname"
          placeholder="Surname"
          name="surname"
          variant={isDark ? 'dark' : null}
          {...form.getInputProps('last_name')}
        />
      </Flex>

      <TextField
        label="Email"
        placeholder="Email"
        name="email"
        variant={isDark ? 'dark' : null}
        {...form.getInputProps('email')}
      />

      <Flex direction="column" gap="20px" width="100%">
        <Text color={isDark ? 'white' : 'dark'} weight="700">
          Please select contact reason
        </Text>
        <Flex justify="space-between" width="100%">
          {REASONS.map((reason) => (
            <Checkbox
              key={reason}
              label={reason}
              value={reason === reasonValue}
              onChange={() => onReasonChange(reason)}
            />
          ))}
        </Flex>
        <InputError color="danger" show={!!reasonError}>
          {reasonError || ' '}
        </InputError>
      </Flex>

      <TextareaField
        label={
          <Text color={isDark ? 'white' : 'dark'} weight="700">
            Message
          </Text>
        }
        name="message"
        gap="16px"
        variant={isDark ? 'dark' : null}
        placeholder="Tell us more about what you need (optional)"
        rows="4"
        {...form.getInputProps('comment')}
      />
      <Button
        type="submit"
        color={sended ? 'success' : 'primary'}
        disabled={sended}
      >
        {sended ? 'Send Sent successfully' : 'Send message'}
      </Button>
    </Form>
  )
}

export default ContactForm

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

{
  /* <ContactCard color="dark"> */
}
const ContactCard = styled(Card)`
  position: relative;
  z-index: 10;
  width: 500px;
  gap: 30px;
  margin-bottom: -210px;
  padding: 40px;

  @media (max-width: 1140px) {
    margin-bottom: 0;
    padding: 0;
    background: none;
    border-radius: 0;
    width: 100%;
    max-width: 500px;
  }
`
