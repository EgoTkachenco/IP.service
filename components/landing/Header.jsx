import { useContext } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H6, Link, Button } from '@/core'
import { BlockInner } from './blocks/Block'
import ModalContext from '@/utils/modalContext'

const Header = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <BlockInner>
      <Wrapper>
        <Flex gap="8px" align="center">
          <Image src="/logo.svg" height={24} width={24} alt="IP.Service" />
          <H6>IP.Service</H6>
        </Flex>

        <Flex gap="34px" align="center">
          <Link>Products</Link>
          <Link>Solutions</Link>
          <Link>Why IPservice</Link>
          <Link>Resources</Link>
          <Link>Pricing</Link>
          <Link>Docs</Link>
        </Flex>

        <Flex gap="10px" align="center">
          <Button
            size="medium"
            width="110px"
            onClick={() => openModal('sign-in')}
          >
            Sign Up
          </Button>
          <Button size="medium" width="110px" text color="dark">
            Login
          </Button>
        </Flex>
      </Wrapper>
    </BlockInner>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 76px;
  height: 100px;
  border-bottom: 1px solid rgba(52, 64, 84, 0.1);
`
