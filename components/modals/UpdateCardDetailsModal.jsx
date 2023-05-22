import styled from 'styled-components'
import { Modal, Flex, Button } from '@/core'
import { ModalTitle, ModalSubtitle, Form, TextInput } from './styled.jsx'
import { useForm } from '@mantine/form'
import store from '@/store/AuthStore'
import { observer } from 'mobx-react-lite'

const UpdateCardDetailsModal = observer(({ onClose }) => {
  const form = useForm({
    initialValues: {
      number: '',
      cvc: '',
      month: '',
      year: '',
    },

    validate: {
      number: (value) => {
        if (!value) return 'number required'
        if (isNaN(Number(value)) || value.length !== 16)
          return 'card should be 16 digits'
        return null
      },
      cvc: (value) => {
        if (!value) return 'cvc required'
        if (value.length !== 3) return 'cvc should be 3 digits'
        return null
      },
      month: (value) => {
        if (!value) return 'month required'
        if (isNaN(Number(value))) return 'Month should be a number'
        if (Number(value) < 0 || Number(value) > 12)
          return 'Month should be in range 1-12'
        return null
      },
      year: (value) => {
        if (!value) return 'year required'
        if (isNaN(Number(value))) return 'Year should be a number'
        const year = new Date().getFullYear()
        if (Number(value) < year) return 'Invalid year'
        return null
      },
    },
  })
  const onSubmit = form.onSubmit((values) => {
    store
      .updateCardDetails(values)
      .then(() => onClose())
      .catch((error) => {
        if (error?.response?.status === 500)
          form.setErrors({ number: 'Server error' })
        else if (error.errors) form.setErrors(error.errors)
        else form.setErrors('number', error.message)
      })
  })
  return (
    <Modal onClose={onClose} width="500px">
      <ModalTitle>Update card details</ModalTitle>
      {/* <ModalSubtitle>
        <Caption>
          Strong passwords include numbers, letters, and punctuation marks
        </Caption>
      </ModalSubtitle> */}

      <Form onSubmit={onSubmit}>
        <TextInput
          label="Enter card number"
          name="number"
          {...form.getInputProps('number')}
        />
        <Row>
          <TextInput
            label="Enter expiration month"
            name="month"
            {...form.getInputProps('month')}
          />
          <TextInput
            label="Enter expiration year"
            name="year"
            {...form.getInputProps('year')}
          />
        </Row>
        <TextInput
          label="Enter card cvc"
          name="cvc"
          {...form.getInputProps('cvc')}
        />
        <div />
        <Button type="submit">Update</Button>
      </Form>
    </Modal>
  )
})

export default UpdateCardDetailsModal

const Row = styled(Flex)`
  gap: 20px;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`
