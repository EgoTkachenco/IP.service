import styled from 'styled-components'
import { Card, H1 } from '@/core'
import { Block, BlockInner } from './Block'
import ContactForm from '@/components/reusable/ContactForm'

const Contact = () => {
  return (
    <Block>
      <Content flex="1">
        <ContactCard color="dark">
          <img src="/contact-illustration.png" />
          <ContactCardTitle color="white">Contact</ContactCardTitle>

          <ContactForm isDark={true} />
        </ContactCard>
      </Content>
    </Block>
  )
}

export default Contact

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
    @media (max-width: 1140px) {
      display: none;
    }
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    padding: 24px;
    height: auto;
    gap: 24px;
  }
`

const ContactCardTitle = styled(H1)`
  margin: 25px 0 0 25px;

  @media (max-width: 1140px) {
    margin: 0;
    font-size: 20px;
    line-height: 140%;
  }
`
