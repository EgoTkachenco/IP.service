import styled from 'styled-components'
import { Flex, H3, Button, Checkbox, Text } from '@/core'
import { TextField, TextareaField } from '@/components/reusable/FormFields'
import { useMediaQuery } from '@mantine/hooks'

const RequestForm = () => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <Form>
      <H3 color="dark">Request your quote today</H3>
      <Row flex="1">
        <TextField label="Name" name="name" />
        <TextField label="Company name" name="company" />
      </Row>
      <TextField label="Company email" name="email" />

      <Flex direction="column" gap="20px" width="100%">
        <Text color="dark" weight="700">
          Interested in the following data
        </Text>
        <Flex gap="20px" width="100%" fwrap>
          <Checkbox label="Geolocation" />
          <Checkbox label="Company" />
          <Checkbox label="Carrier" />
          <Checkbox label="ASN" />
          <Checkbox label="Abuse" />
          <Checkbox label="Privacy Detection" />
          <Checkbox label="IP Ranges" />
          <Checkbox label="Hosted Domains" />
        </Flex>
      </Flex>

      <TextareaField
        label={
          <Text color="dark" weight="700">
            Message
          </Text>
        }
        name="message"
        placeholder="Tell us more about what you need (optional)"
        rows="4"
      />
      <Button width={isMobile ? '100%' : '270px'}>Request Quote</Button>
    </Form>
  )
}

export default RequestForm

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const Row = styled(Flex)`
  width: 100%;
  gap: 20px;

  @media (max-width: 1140px) {
    gap: 8px;
  }
`
