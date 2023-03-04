import styled from 'styled-components'
import { Flex, Card, H2, H6, Button, Icon } from '@/core'
import { Block, BlockInner } from './Block'
import { useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import Link from 'next/link'

const GetStarted = () => {
  const { openModal } = useContext(ModalContext)

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
          <Flex direction="column" gap="20px">
            <Button
              width="211px"
              height="55px"
              onClick={() => openModal('sign-up')}
            >
              Sign up for free <Icon icon="user-add" color="white" size="20" />
            </Button>
            <Link href="/contact">
              <Button color="white" outline width="211px" height="55px">
                Contact Us
                <Icon icon="phone" size="20" />
              </Button>
            </Link>
          </Flex>
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
