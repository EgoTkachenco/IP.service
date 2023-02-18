import { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text, Icon, H6 } from '@/core'

const FAQList = ({ questions, question = null }) => {
  const [activeQuestion, setActiveQuestion] = useState(question)
  const handleClick = (i) => {
    setActiveQuestion(activeQuestion === i ? null : i)
  }
  return (
    <List>
      {questions.map((item, i) => (
        <FAQItem
          key={i}
          question={item.question}
          answer={item.answer}
          onClick={() => handleClick(i)}
          isOpen={activeQuestion === i}
        />
      ))}
    </List>
  )
}

export default FAQList

const FAQItem = ({ question, answer, onClick, isOpen }) => {
  return (
    <FAQItemWrapper isOpen={isOpen}>
      <Flex gap="13px">
        <H6 color={isOpen ? 'primary' : 'text'}>{question}</H6>
        <Icon
          icon="chevron-outline"
          size="24px"
          color={isOpen ? 'primary' : 'text'}
          style={{ transform: `rotate(${isOpen ? '180deg' : '0'})` }}
          onClick={onClick}
        />
      </Flex>
      <FAQItemAnswer isOpen={isOpen}>{answer}</FAQItemAnswer>
    </FAQItemWrapper>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 1140px) {
    width: 100%;
  }
`

const FAQItemWrapper = styled.div`
  padding: 30px 0 30px 42px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1140px;
  border-left: 8px solid
    ${({ theme, isOpen }) => (isOpen ? theme.colors.primary : '#02202D')};
`

const FAQItemAnswer = styled(Text)`
  overflow: hidden;
  transition: all 0.3s;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
`
