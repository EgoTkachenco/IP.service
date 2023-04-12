import styled from 'styled-components'
import { Flex, H1, H6, Card, Icon, Text } from '@/core'
import { BlockInner } from './blocks/Block'
import PartnersCarousel from '@/components/reusable/PartnersCarousel'
import ContactForm from '@/components/reusable/ContactForm'
import { useMediaQuery } from '@mantine/hooks'
import { contact_email } from '@/constants/constants'
const Contact = () => {
  const isMobile = useMediaQuery('(max-width: 1140px)')

  return (
    <>
      <Block>
        <ContactTop direction="column">
          <Title color="dark">Get in Touch</Title>
          <Subtitle weight="500">
            Our team of data specialists eagerly awaits your inquiries. Complete
            the form, and expect a response from us in as little as 24 hours.
          </Subtitle>
          <Flex direction="column" gap="20px">
            <Flex gap="10px" align="center">
              <Icon icon="phone" size="24px" color="text" />
              <Text>+1 202 440 7180</Text>
            </Flex>
            <Flex gap="10px" align="center">
              <Icon icon="mail" size="24px" color="text" />
              <a href={`mailto:${contact_email}`}>
                <Text>{contact_email}</Text>
              </a>
            </Flex>
          </Flex>
        </ContactTop>
        <ContactCard color="dark">
          <ContactForm isDark={!isMobile} />
        </ContactCard>
      </Block>

      <JoinBlock>
        <H6 color="dark">Join the myriad of enterprises leveraging</H6>
        <H6 color="primary">Spyskey</H6>
      </JoinBlock>

      <CarouselBlock>
        <PartnersCarousel small gap="24px" />
      </CarouselBlock>
    </>
  )
}

export default Contact

const Block = styled(BlockInner)`
  padding-top: 100px;
  justify-content: space-between;

  @media (max-width: 1140px) {
    padding-top: 48px;
    padding-bottom: 48px;
    flex-direction: column;
    align-items: center;
  }
`

const ContactTop = styled(Flex)`
  width: 410px;
  padding-bottom: 64px;

  @media (max-width: 1140px) {
    padding-bottom: 48px;
    width: auto;
  }
`

const Title = styled(H1)`
  margin: 50px 0 40px;

  @media (max-width: 1140px) {
    margin: 0 0 16px 0;
  }
`
const Subtitle = styled(H6)`
  margin-bottom: 32px;
  font-weight: 500;
`

const ContactCard = styled(Card)`
  position: relative;
  z-index: 10;
  width: 500px;
  gap: 30px;
  margin-bottom: -210px;
  padding: 50px;

  @media (max-width: 1140px) {
    margin-bottom: 0;
    padding: 0;
    background: none;
    border-radius: 0;
    width: 100%;
    max-width: 500px;
  }
`

const JoinBlock = styled(BlockInner)`
  padding-bottom: 50px;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`

const CarouselBlock = styled.div`
  padding-bottom: 120px;
`
