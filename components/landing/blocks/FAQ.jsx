import styled from 'styled-components'
import { Block } from './Block'
import { H2 } from '@/core'
import FAQList from '@/components/reusable/FAQList'
import FAQ_QUESTIONS from '@/constants/faq.json'

const FAQ = () => {
  return (
    <Block>
      <Title color="dark">Frequently Asked Questions</Title>
      <Content>
        <FAQList questions={FAQ_QUESTIONS[0].questions} />
      </Content>
    </Block>
  )
}

export default FAQ

const Title = styled(H2)`
  text-align: center;
  @media (max-width: 1140px) {
    padding: 0 24px;
    text-align: left;
  }
`

const Content = styled.div`
  width: calc(100% - ((100% - 1140px) / 2));
  margin: 60px 0 0 auto;

  @media (max-width: 1140px) {
    margin: 48px 0 0;
    width: 100%;
    padding: 0 24px;
  }
`
