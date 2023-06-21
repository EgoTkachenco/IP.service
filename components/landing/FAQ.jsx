import styled from 'styled-components'
import { Flex, Text, Icon, Input, H3 } from '@/core'
import { BlockInner } from './blocks/Block'
import FAQList from '@/components/reusable/FAQList'
import FAQ_QUESTIONS from '@/constants/faq.json'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import _ from 'lodash'
let onSearchChange

const getQuestionsList = () => FAQ_QUESTIONS.filter((topic) => !topic.hidden)

const FAQ = () => {
  const [search, setSearch] = useState('')
  const [questions, setQuestions] = useState(getQuestionsList())
  const [activeBlock, setActiveBlock] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState(null)

  useEffect(() => {
    onSearchChange = _.debounce((search) => {
      if (search) {
        let newQuestions = getQuestionsList().reduce((acc, topic) => {
          acc.push({
            ...topic,
            questions: topic.questions.filter(
              (question) => question.question.search(search) !== -1
            ),
          })
          return acc
        }, [])
        newQuestions = newQuestions.filter(
          (topic) => topic.questions.length > 0
        )
        setActiveQuestion(null)
        setActiveBlock(newQuestions.length > 0 ? 0 : null)
        setQuestions(newQuestions)
      } else {
        setQuestions([...getQuestionsList()])
        setActiveQuestion(null)
        setActiveBlock(0)
      }
    }, 300)
  }, [])
  useEffect(() => {
    onSearchChange(search)
  }, [search])

  const isMobile = useMediaQuery('(max-width: 1140px)')

  const openTopic = (topic) => {
    setActiveBlock(topic)
    setActiveQuestion(null)
  }

  return (
    <>
      <SearchBlock>
        <H3 align="center" color="dark">
          Common questions and support documentation
        </H3>
        <Input
          value={search}
          onChange={setSearch}
          placeholder="Search the knowledge base"
          width={isMobile ? '100%' : '685px'}
        />
      </SearchBlock>
      <Content>
        <DesktopContainer>
          <TopicList topics={questions} active={activeBlock} open={openTopic} />
          <Flex direction="column" gap="40px" width="100%">
            <H3 color="dark">About Spyskey</H3>
            <FAQList
              questions={
                activeBlock !== null ? questions[activeBlock].questions : []
              }
              active={activeQuestion}
              onChange={(question) => setActiveQuestion(question)}
            />
          </Flex>
        </DesktopContainer>
        <MobileContainer>
          {questions.map((topic, i) => (
            <Flex direction="column" gap="24px" width="100%" key={i}>
              <TopicItemMobile key={i} active={activeBlock === i}>
                <Text weight={700} color={activeBlock === i ? 'white' : 'dark'}>
                  {topic.name}
                </Text>
                <Icon
                  icon={activeBlock === i ? 'plus' : 'minus'}
                  size="24px"
                  color={activeBlock === i ? 'white' : 'dark'}
                  onClick={() => openTopic(i)}
                />
              </TopicItemMobile>
              {activeBlock === i && (
                <FAQList
                  questions={questions[i].questions}
                  active={activeQuestion}
                  onChange={(question) => setActiveQuestion(question)}
                />
              )}
            </Flex>
          ))}
        </MobileContainer>
      </Content>
    </>
  )
}

export default FAQ

const Content = styled(Flex)`
  width: calc(100% - ((100% - 1140px) / 2));
  margin: 60px 0 150px auto;

  @media (max-width: 1140px) {
    width: 100%;
    padding: 0 24px;
  }
`
const DesktopContainer = styled(Flex)`
  gap: 100px;
  width: 100%;
  @media (max-width: 1140px) {
    display: none;
  }
`

const MobileContainer = styled(Flex)`
  flex-direction: column;
  gap: 24px;
  width: 100%;
  display: none;
  @media (max-width: 1140px) {
    display: flex;
  }
`

const SearchBlock = styled(BlockInner)`
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 100px 0 60px;
  border-bottom: 1px solid rgba(52, 64, 84, 0.1);

  @media (max-width: 1140px) {
    gap: 16px;
    padding: 38px 24px;
  }
`
const TopicList = ({ topics, active, open }) => {
  return (
    <TopicListContainer>
      {topics.map((topic, i) => (
        <TopicItem key={i} active={active === i}>
          <Text weight={700}>{topic.name}</Text>
          <Icon
            icon="chevron-outline"
            size="24px"
            color={'text'}
            style={{
              transform: `rotate(${active === i ? '-90deg' : '90deg'})`,
            }}
            onClick={() => open(i)}
          />
        </TopicItem>
      ))}
    </TopicListContainer>
  )
}

const TopicListContainer = styled(Flex)`
  width: 281px;
  flex-direction: column;
  gap: 20px;
`

const TopicItem = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  gap: 20px;
  transition: all 0.3s;
  opacity: ${({ active }) => (active ? 0.5 : 1)};
`

const TopicItemMobile = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  gap: 20px;
  height: 80px;
  transition: all 0.3s;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.white};
  border-radius: 6px;
`
