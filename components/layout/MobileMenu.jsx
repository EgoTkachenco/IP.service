import { useState, useEffect } from 'react'
import { Icon, Flex } from '@/core'
import styled from 'styled-components'
import { useNoBodyScroll } from '@/hooks'
import { useRouter } from 'next/router'

const MobileMenu = ({ children }) => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  useNoBodyScroll(show)
  useEffect(() => setShow(false), [router.pathname])
  return (
    <Wrapper>
      <Icon
        icon={show ? 'closemark' : 'menu'}
        size="24px"
        color="dark"
        onClick={() => setShow(!show)}
      />

      <MenuWrapper show={show} onClick={() => setShow(false)}>
        <Flex
          direction="column"
          gap="16px"
          width="100%"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Flex>
      </MenuWrapper>
    </Wrapper>
  )
}

export default MobileMenu

const Wrapper = styled.div`
  display: none;
  @media (max-width: 1140px) {
    display: block;
  }
`

const MenuWrapper = styled(Flex)`
  position: absolute;
  width: 100%;
  height: calc(100vh - 57px);
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  top: calc(100% + 1px);
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: ${({ show }) => (show ? 100 : -1)};
  transition: all 0.3s;
  flex-direction: column;
  padding: 0 24px;
`
