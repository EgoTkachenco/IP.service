import styled from 'styled-components'
import Layout from './layout/Layout'
import { Flex, H1, H6, Card } from '@/core'
import { BlockInner } from './blocks/Block'
import PartnersCarousel from '@/components/reusable/PartnersCarousel'
import ContactForm from '@/components/reusable/ContactForm'
import { useMediaQuery } from '@mantine/hooks'

const Contact = () => {
  const isMobile = useMediaQuery('(max-width: 1140px)')

  return (
    <Layout>
      <Block>
        <ContactTop direction="column">
          <Title color="dark">Get in Touch</Title>
          <Subtitle weight="500">
            Our data experts are happy to answer your questions. Fill out the
            form, and we'll be in touch within 1-2 business days.
          </Subtitle>
        </ContactTop>
        <ContactCard color="dark">
          <ContactForm isDark={!isMobile} />
        </ContactCard>
      </Block>

      <JoinBlock>
        <H6 color="dark">Join thousands of companies using</H6>
        <H6 color="primary">IP.Service:</H6>
      </JoinBlock>

      <CarouselBlock>
        <PartnersCarousel small gap="24px" />
      </CarouselBlock>
    </Layout>
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

  @media (max-width: 1140px) {
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
  margin-bottom: 171px;

  @media (max-width: 1140px) {
    margin-bottom: 48px;
  }
`

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

const JoinBlock = styled(BlockInner)`
  padding-bottom: 50px;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`

const CarouselBlock = styled.div`
  padding-bottom: 120px;
`
