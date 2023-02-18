import { useState } from 'react'
import styled from 'styled-components'
import { H2 } from '@/core'
import { Block } from './Block'
import FAQList from '@/components/reusable/FAQList'
import FAQ_QUESTIONS from '@/constants/faq.json'

const FAQ = () => {
  return (
    <Block>
      <H2 color="dark" align="center">
        Frequently Asked Questions
      </H2>
      <Content>
        <FAQList questions={FAQ_QUESTIONS[0].questions} />
      </Content>
    </Block>
  )
}

export default FAQ

const Content = styled.div`
  width: calc(100% - ((100% - 1140px) / 2));
  margin: 60px 0 0 auto;
`
