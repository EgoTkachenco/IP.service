import styled from 'styled-components'
import { Flex, Card, H2, H6 } from '@/core'
import { Block, BlockInner } from './Block'
import { SignInContactButtons } from './styled'

const GetStarted = () => {
  return (
    <Block>
      <Wrapper>
        <GetStartedCard color="dark">
          <Flex direction="column" gap="40px">
            <H2 color="white">Get started for free</H2>
            <H6 color="white" weight="500">
              {
                'We offer 50,000 free IP geolocation lookups per month. Sign up \n for free to test our data. No gimmicks or credit cards required.'
              }
            </H6>
          </Flex>
          <SignInContactButtons direction="column" contactColor="white" />
        </GetStartedCard>
      </Wrapper>
    </Block>
  )
}

export default GetStarted

const Wrapper = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
`

const GetStartedCard = styled(Card)`
  flex-direction: row;
  padding: 75px;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
    padding: 32px;
    gap: 32px;
  }
`
