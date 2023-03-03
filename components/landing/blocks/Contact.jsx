import styled from 'styled-components'
import { Flex, Card, H1, Text, Checkbox, Button } from '@/core'
import { Block, BlockInner } from './Block'
import { TextField, TextareaField } from '@/components/reusable/FormFields'

const Contact = () => {
  return (
    <Wrapper>
      <Content flex="1">
        <ContactCard color="dark">
          <img src="/contact-illustration.png" />
          <ContactCardTitle color="white">Contact</ContactCardTitle>

          <Flex direction="column" gap="30px">
            <Flex gap="30px">
              <TextField label="Name" name="name" variant="dark" />
              <TextField label="Surname" name="surname" variant="dark" />
            </Flex>

            <TextField label="Email" name="email" variant="dark" />

            <Flex direction="column" gap="20px" width="100%">
              <Text color="white" weight="700">
                Please select contact reason
              </Text>
              <Flex justify="space-between" width="100%">
                <Checkbox label="General inquiry" variant="white" />
                <Checkbox label="Support request" variant="white" />
                <Checkbox label="Sales inquiry" variant="white" />
              </Flex>
            </Flex>

            <TextareaField
              label={
                <Text color="white" weight="700">
                  Message
                </Text>
              }
              variant="dark"
              gap="16px"
              name="message"
              placeholder="Tell us more about what you need (optional)"
              rows="4"
            />
            <Button>Send message</Button>
          </Flex>
        </ContactCard>
      </Content>
    </Wrapper>
  )
}

export default Contact

const Wrapper = styled(Block)`
  margin: 150px 0;
`

const Content = styled(BlockInner)`
  display: flex;
  align-items: center;
  gap: 20px;
`

const ContactCard = styled(Card)`
  position: relative;
  height: 634px;
  padding: 50px;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;

  & > img {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
  }
`

const ContactCardTitle = styled(H1)`
  margin: 25px 0 0 25px;
`
