import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Text, Icon, H6 } from '@/core'

const FAQList = ({ questions, active = null, onChange = () => {} }) => {
  const [activeQuestion, setActiveQuestion] = useState(active)
  const handleClick = (i) => {
    const newActiveQuestion = activeQuestion === i ? null : i
    setActiveQuestion(newActiveQuestion)
    onChange(newActiveQuestion)
  }
  useEffect(() => {
    if (active !== activeQuestion) setActiveQuestion(active)
  }, [active])
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
      <FAQItemQuestion onClick={onClick}>
        <H6 color={isOpen ? 'primary' : 'text'}>{question}</H6>
        <Icon
          icon="chevron-outline"
          size="24px"
          color={isOpen ? 'primary' : 'text'}
          style={{ transform: `rotate(${isOpen ? '180deg' : '0'})` }}
          onClick={() => {}}
        />
      </FAQItemQuestion>
      <FAQItemAnswer isOpen={isOpen}>{answer}</FAQItemAnswer>
    </FAQItemWrapper>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;

  @media (max-width: 1140px) {
    width: 100%;
    gap: 20px;
    background: none;
  }
`

const FAQItemWrapper = styled.div`
  padding: 30px 0 30px 42px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 1140px;
  border-left: 8px solid
    ${({ theme, isOpen }) => (isOpen ? theme.colors.primary : '#02202D')};

  @media (max-width: 1140px) {
    padding: 0 0 0 16px;
    justify-content: center;
    min-height: 38px;
    gap: 0;
    border-left-width: 4px;
    h6 {
      flex-grow: 1;
    }
  }
`

const FAQItemQuestion = styled(Flex)`
  align-items: center;
  cursor: pointer;
  gap: 12px;
`
const FAQItemAnswer = styled(Text)`
  overflow: hidden;
  transition: all 0.3s;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  margin-top: ${({ isOpen }) => (isOpen ? '20px' : '0')};
`
