import { useContext } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H2, Text, Button, Icon } from '@/core'
import { BlockInner } from './Block'
import ModalContext from '@/utils/modalContext'
import Link from 'next/link'

const Main = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <Wrapper>
      <Image
        src="/large-logo.svg"
        alt="IP Geolocation API"
        width={216}
        height={216}
      />
      <Flex gap="4px">
        <H2 color="dark">IP Geolocation</H2> <H2 color="primary">API</H2>
      </Flex>
      <Subtitle align="center">
        Around the globe, industry-leading organizations use IPinfo's
        geolocation data to create efficient, enjoyable, and secure online
        experiences for their users. These IP geolocation insights lead to
        better conversion rates, improved customer satisfaction, and much more
        with our API that's built for low latency responses.
      </Subtitle>
      <Flex gap="20px">
        <Button
          width="211px"
          height="55px"
          onClick={() => openModal('sign-up')}
        >
          Sign up for free <Icon icon="user-add" color="white" size="20" />
        </Button>
        <Link href="/contact">
          <Button color="dark" outline width="211px" height="55px">
            Contact Us
            <Icon icon="phone" size="20" />
          </Button>
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled(BlockInner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 27px 0 60px;
`

const Subtitle = styled(Text)`
  width: 85%;
  margin: 40px 0 60px;
`
