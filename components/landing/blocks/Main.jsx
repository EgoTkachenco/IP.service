import { useContext } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H2, Text, Button, Icon } from '@/core'
import { BlockInner } from './Block'
import ModalContext from '@/utils/modalContext'
import Link from 'next/link'
import APIPreview from '@/components/reusable/APIPreview'

const Main = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <Wrapper>
      <Content>
        <Image
          src="/large-logo.svg"
          alt="IP Geolocation API"
          width={100}
          height={100}
        />
        <Flex gap="4px">
          <H2 color="dark">IP Geolocation</H2> <H2 color="primary">API</H2>
        </Flex>
        <Subtitle>
          Around the globe, industry-leading organizations use IPinfo's
          geolocation data to create efficient, enjoyable, and secure online
          experiences for their users. These IP geolocation insights lead to
          better conversion rates, improved customer satisfaction, and much more
          with our API that's built for low latency responses.
        </Subtitle>
        <ButtonsContainer>
          <Button onClick={() => openModal('sign-up')}>
            Sign up for free <Icon icon="user-add" color="white" size="20" />
          </Button>
          <Link href="/contact">
            <Button color="dark" outline>
              Contact Us
              <Icon icon="phone" size="20" />
            </Button>
          </Link>
        </ButtonsContainer>
      </Content>

      <APIPreview />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled(BlockInner)`
  display: flex;
  margin-top: 64px;
  gap: 105px;
  align-items: stretch;
  & > :nth-child(2) {
    flex-grow: 1;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;

    & > :nth-child(2) {
      max-width: 500px;
      width: 100%;
    }
  }
`

const Content = styled(Flex)`
  flex-direction: column;
  max-width: 485px;
  @media (max-width: 1140px) {
    align-items: center;
  }
`

const Subtitle = styled(Text)`
  width: 85%;
  margin: 40px 0 60px;

  @media (max-width: 1140px) {
    text-align: center;
  }
`

const ButtonsContainer = styled(Flex)`
  gap: 20px;
  button {
    width: 211px;
    height: 55px;
  }

  @media (max-width: 1140px) {
    button {
      height: 50px;
      width: auto;
    }
  }
`
