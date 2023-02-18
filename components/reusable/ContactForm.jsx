import styled from 'styled-components'
import { Card, Flex, Text, Checkbox, Button } from '@/core'
import { TextField, TextareaField } from './FormFields'
import { useMediaQuery } from '@mantine/hooks'

const ContactForm = () => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <ContactCard color="dark">
      <Flex direction="column" gap="20px" width="100%">
        <Text color={isMobile ? 'dark' : 'white'} weight="700">
          Please select contact reason
        </Text>
        <Flex justify="space-between" width="100%">
          <Checkbox label="General inquiry" />
          <Checkbox label="Support request" />
          <Checkbox label="Sales inquiry" />
        </Flex>
      </Flex>
      <TextField label="Name" name="name" variant={isMobile ? null : 'dark'} />
      <TextField
        label="Email"
        name="email"
        variant={isMobile ? null : 'dark'}
      />
      <TextareaField
        label={
          <Text color={isMobile ? 'dark' : 'white'} weight="700">
            Message
          </Text>
        }
        name="message"
        variant={isMobile ? null : 'dark'}
        placeholder="Tell us more about what you need (optional)"
        rows="4"
      />
      <Button>Send message</Button>
    </ContactCard>
  )
}

export default ContactForm

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
