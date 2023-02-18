import { useState } from 'react'
import { Icon, Flex, Caption, Text } from '@/core'
import styled from 'styled-components'
import AuthorizationButtons from './AuthorizationButtons'
import links from './links'
import Link from 'next/link'
import { useNoBodyScroll } from '@/hooks'

const MobileMenu = () => {
  const [show, setShow] = useState(false)
  useNoBodyScroll(show)
  return (
    <>
      <Icon
        icon={show ? 'closemark' : 'menu'}
        size="24px"
        color="dark"
        onClick={() => setShow(!show)}
      />

      <MenuWrapper show={show} onClick={() => setShow(false)}>
        <AuthorizationButtons />
        <Flex
          direction="column"
          gap="20px"
          width="100%"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((link) => {
            if (link.links) {
              return (
                <Dropdown name={link.name} links={link.links} key={link.name} />
              )
            }
            return (
              <Link href={link.link} key={link.name}>
                <Text weight="600">{link.name}</Text>
              </Link>
            )
          })}
        </Flex>
      </MenuWrapper>
    </>
  )
}

export default MobileMenu

const Dropdown = ({ name, links }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Flex style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
        <Text weight="600" color={isOpen ? 'dark' : 'text'}>
          {name}
        </Text>
        <Icon
          icon="chevron"
          size="24px"
          color={isOpen ? 'dark' : 'text'}
          style={{ transform: `rotate(${isOpen ? '180deg' : '0'})` }}
        />
      </Flex>
      <DropdownContent show={isOpen}>
        {links.map((link, i) => (
          <Flex key={i} gap="8px" align="center">
            <Icon icon={link.icon} size="20px" color="primary" />
            <Caption weight="700">{link.name}</Caption>
          </Flex>
        ))}
      </DropdownContent>
    </div>
  )
}

const DropdownContent = styled(Flex)`
  transition: all 0.3s;
  margin-top: ${({ show }) => (show ? '20px' : 0)};
  max-height: ${({ show }) => (show ? '500px' : 0)};
  overflow: hidden;
  flex-direction: column;
  gap: 16px;
  padding-left: 24px;
`

const MenuWrapper = styled(Flex)`
  position: absolute;
  width: 100%;
  height: calc(100vh - 57px);
  left: 0;
  background: #f9fafc;
  top: calc(100% + 1px);
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: ${({ show }) => (show ? 100 : -1)};
  transition: all 0.3s;
  flex-direction: column;
  padding: 0 24px;
`
