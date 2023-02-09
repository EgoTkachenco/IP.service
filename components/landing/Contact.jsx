import styled from 'styled-components'
import Layout from './layout/Layout'
import {
  Flex,
  Button,
  Text,
  Icon,
  Card,
  Input,
  Chip,
  H1,
  H6,
  Checkbox,
} from '@/core'
import { BlockInner } from './blocks/Block'

import PartnersCarousel from '@/components/reusable/PartnersCarousel'
import { TextField, TextareaField } from '@/components/reusable/FormFields'

const Contact = () => {
  return (
    <Layout>
      <Block>
        <Flex direction="column" width="410px">
          <Title color="dark">Get in Touch</Title>
          <Subtitle weight="500">
            Our data experts are happy to answer your questions. Fill out the
            form, and we'll be in touch within 1-2 business days.
          </Subtitle>
          <Flex gap="4px">
            <H6 color="dark">Join thousands of companies using</H6>
            <H6 color="primary">IP.Service:</H6>
          </Flex>
        </Flex>
        <ContactForm />
      </Block>
      <PartnersCarousel />
    </Layout>
  )
}

export default Contact

const Block = styled(BlockInner)`
  padding: 100px 0 50px;
  justify-content: space-between;
`

const Title = styled(H1)`
  margin: 50px 0 40px;
`
const Subtitle = styled(H6)`
  margin-bottom: 171px;
`

const ContactForm = () => {
  return (
    <ContactCard color="dark">
      <Flex direction="column" gap="20px" width="100%">
        <Text color="white">Please select contact reason</Text>
        <Flex justify="space-between" width="100%">
          <Checkbox label="General inquiry" />
          <Checkbox label="Support request" />
          <Checkbox label="Sales inquiry" />
        </Flex>
      </Flex>
      <TextField label="Name" name="name" variant="dark" />
      <TextField label="Email" name="email" variant="dark" />
      <TextareaField
        label={<Text color="white">Message</Text>}
        name="message"
        variant="dark"
        placeholder="Tell us more about what you need (optional)"
        rows="4"
      />
      <Button>Send message</Button>
    </ContactCard>
  )
}

const ContactCard = styled(Card)`
  position: relative;
  z-index: 10;
  width: 500px;
  gap: 30px;
  margin-bottom: -175px;
  padding: 40px;
`
