import { useState } from 'react'
import styled from 'styled-components'
import { Flex, H2, Text, Icon, H6 } from '@/core'
import { Block } from './Block'

const FAQ_CONTENT = [
  {
    question: 'What is IP geolocation?',
    answer:
      'IP geolocation are high-level location insights derived from an IP address. These generalized insights include the country, region, postal code, city, and latitude or longitude of the nearest city center.',
  },
  {
    question: 'What is IP geolocation?',
    answer:
      'IP geolocation are high-level location insights derived from an IP address. These generalized insights include the country, region, postal code, city, and latitude or longitude of the nearest city center.',
  },
  {
    question: 'How does IPO Geolocations works?',
    answer:
      'IP geolocation are high-level location insights derived from an IP address. These generalized insights include the country, region, postal code, city, and latitude or longitude of the nearest city center.',
  },
  {
    question: 'How to use IP geolocation?',
    answer:
      'IP geolocation are high-level location insights derived from an IP address. These generalized insights include the country, region, postal code, city, and latitude or longitude of the nearest city center.',
  },
  {
    question: 'How accurate is IP geolocation?',
    answer:
      'IP geolocation are high-level location insights derived from an IP address. These generalized insights include the country, region, postal code, city, and latitude or longitude of the nearest city center.',
  },
]

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)
  const handleClick = (i) => {
    setActiveQuestion(activeQuestion === i ? null : i)
  }
  return (
    <Block>
      <H2 color="dark" align="center">
        Frequently Asked Questions
      </H2>
      <FAQList>
        {FAQ_CONTENT.map((item, i) => (
          <FAQItem
            key={i}
            question={item.question}
            answer={item.answer}
            onClick={() => handleClick(i)}
            isOpen={activeQuestion === i}
          />
        ))}
      </FAQList>
    </Block>
  )
}

export default FAQ

const FAQItem = ({ question, answer, onClick, isOpen }) => {
  return (
    <FAQItemWrapper onClick={onClick} isOpen={isOpen}>
      <Flex gap="13px">
        <H6 color={isOpen ? 'primary' : 'text'}>{question}</H6>
        <Icon
          icon="chevron-outline"
          size="24px"
          color={isOpen ? 'primary' : 'text'}
          style={{ transform: `rotate(${isOpen ? '180deg' : '0'})` }}
        />
      </Flex>
      <FAQItemAnswer isOpen={isOpen}>{answer}</FAQItemAnswer>
    </FAQItemWrapper>
  )
}

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - ((100% - 1140px) / 2));
  margin: 60px 0 0 auto;
  background: ${({ theme }) => theme.colors.white};
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
