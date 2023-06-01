import { Flex, H3, H5, Text } from '@/core'
import FAQ_QUESTIONS from '@/constants/faq.json'

const FAQ = ({ id }) => {
  // const questions = FAQ_QUESTIONS.find((topic) => topic.code === 'common')
  const questions = [
    {
      question: 'What is an IP address?',
      answer: (
        <Text>
          IP geolocation are high-level location insights derived from an IP
          address. These generalized insights include the country, region,
          postal code, city, and latitude or longitude of the nearest city
          center.
        </Text>
      ),
    },
    {
      question: 'How IP addresses work?',
      answer: (
        <Text>
          You can compare Internet Protocol to postal services in the
          real-world. A postal code is an identifier for mail routing. And, in
          very simple words, IP address is a digital postal code for internet
          traffic routing. Every device, website and network server have an IP
          address.
        </Text>
      ),
    },
    {
      question: 'How an IP address looks like?',
      answer: (
        <>
          <Text>
            There are 2 common standards for IP address: IPv4 (IP Version 4) and
            IPv6 (IP Version 6) that is aimed at replacing IPv4 in the future.
          </Text>
          <Text>
            <Text weight={600} inline>
              IPv4 address
            </Text>{' '}
            uses 32 binary bits and contains from 4 to 12 digits, 4 numbers
            separated by dots.Examples: 8.8.4.4, 188.100.210.213
          </Text>
          <Text>
            <Text weight={600} inline>
              {' '}
              IPv6 address
            </Text>{' '}
            uses 128 binary bits and can contain up to 45 characters (8 groups
            of 4 hexadecimal digits separated by 6 colons). Groups with all
            zeros can be shortened for the simplicity of the
            representation.Example: 2001:4860:4860::8888 (expanded –
            2001:4860:4860:0000:0000:0000:0000:8888)
          </Text>
        </>
      ),
    },
    {
      question: 'What information someone can get from my IP address?',
      answer: (
        <Text>
          <Text color="primary" as="a" href="/" inline>
            Here
          </Text>{' '}
          you can find out how much information you can get from an IP address.
        </Text>
      ),
    },
  ]
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">Questions & Answers</H3>
      <Flex direction="column" gap="32px">
        {questions.map((question, i) => (
          <Flex key={i} direction="column" gap="24px">
            <H5>{question.question}</H5>
            {question.answer}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default FAQ
