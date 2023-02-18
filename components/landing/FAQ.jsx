import styled from 'styled-components'
import Layout from './layout/Layout'
import { Flex, Button, Text, Icon, Card, Input, Chip, H1, H3 } from '@/core'
import { BlockInner } from './blocks/Block'
import FAQList from '@/components/reusable/FAQList'
import FAQ_QUESTIONS from '@/constants/faq.json'
import { useState } from 'react'

const FAQ = () => {
  const [activeBlock, setActiveBlock] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState(null)
  return (
    <Layout>
      <SearchBlock>
        <H3 color="dark">Common questions and support documentation</H3>
        <Input placeholder="Search the knowledge base" width="685px" />
      </SearchBlock>
      <Content flex="1">
        <Flex direction="column" gap="20px"></Flex>
        <Flex direction="column" gap="40px">
          <H3 color="dark">About IP.Service </H3>
          <FAQList questions={FAQ_QUESTIONS[activeBlock].questions} />
        </Flex>
      </Content>
    </Layout>
  )
}

export default FAQ

const Content = styled(Flex)`
  width: calc(100% - ((100% - 1140px) / 2));
  margin: 60px 0 150px auto;
  gap: 100px;
`

const SearchBlock = styled(BlockInner)`
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 100px 0 60px;
  border-bottom: 1px solid rgba(52, 64, 84, 0.1);
`
const TopicList = () => {
  return ''
}
