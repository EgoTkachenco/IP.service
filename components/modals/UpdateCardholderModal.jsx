import styled from 'styled-components'
import { Modal, Caption, Button } from '@/core'
import { ModalTitle, ModalSubtitle, Form, TextInput } from './styled.jsx'
import { useForm } from '@mantine/form'
import store from '@/store/AuthStore'
import { observer } from 'mobx-react-lite'

const UpdateCardholderModal = observer(({ onClose }) => {
  const form = useForm({
    initialValues: {
      cardholder: store.user?.card?.name || '',
    },

    validate: {
      cardholder: (value) => {
        if (!value) return 'Cardholder required'
        return null
      },
    },
  })
  const onSubmit = form.onSubmit((values) => {
    store
      .updateCardholder(values.cardholder)
      .then(() => onClose())
      .catch((error) => {
        if (error?.response?.status === 500)
          form.setErrors({ cardholder: 'Server error' })
        else if (error.errors) form.setErrors(error.errors)
        else form.setErrors('cardholder', error.message)
      })
  })
  return (
    <Modal onClose={onClose}>
      <ModalTitle>Update cardholder</ModalTitle>
      {/* <ModalSubtitle>
        <Caption>
          Strong passwords include numbers, letters, and punctuation marks
        </Caption>
      </ModalSubtitle> */}

      <Form onSubmit={onSubmit}>
        <TextInput
          label="Enter cardholder"
          name="cardholder"
          {...form.getInputProps('cardholder')}
        />
        <div />
        <Button type="submit">Update</Button>
      </Form>
    </Modal>
  )
})

export default UpdateCardholderModal
