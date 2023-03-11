import { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text, Icon, Caption } from '@/core'
import Link from 'next/link'
import { useClickOutside } from '@/hooks'
import AuthorizationButtons from './AuthorizationButtons'
import links from './links'

const DesktopMenu = () => {
  return (
    <Wrapper>
      <Flex gap="25px" align="center">
        {links.map((link) => {
          if (link.links) {
            return (
              <Dropdown name={link.name} key={link.name}>
                <ProductDropdown links={link.links} />
              </Dropdown>
            )
          }
          return (
            <Link href={link.link} key={link.name}>
              <Text weight="600">{link.name}</Text>
            </Link>
          )
        })}
      </Flex>
      <AuthorizationButtons />
    </Wrapper>
  )
}

export default DesktopMenu

const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  flex-basis: 60%;
  @media (max-width: 1140px) {
    display: none;
  }
`

const Dropdown = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickOutside(() => setIsOpen(false))
  return (
    <div ref={ref}>
      <Flex
        ref={ref}
        style={{ cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
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
      <DropdownContent isOpen={isOpen}>{children}</DropdownContent>
    </div>
  )
}

const DropdownContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 22.8809px 20.07px rgba(7, 22, 37, 0.05);
  border-radius: 10px;
  padding: 30px;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '100%' : '90%')};
  right: 0;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s;
  z-index: ${({ isOpen }) => (isOpen ? 100 : -1)};
`

const ProductDropdown = ({ links }) => {
  return (
    <Flex gap="10px" width="calc(320px *3 + 20px)" fwrap>
      {links.map((link, i) => (
        <Link href={link.link} key={i}>
          <MenuCard>
            <MenuCardIcon>
              <Icon icon={link.icon} size="20px" color="white" />
            </MenuCardIcon>
            <Flex direction="column" gap="2px">
              <Text color="dark" weight="700">
                {link.name}
              </Text>
              <Caption>{link.description}</Caption>
            </Flex>
          </MenuCard>
        </Link>
      ))}
    </Flex>
  )
}

const MenuCard = styled.div`
  width: 320px;
  height: 114px;
  background: rgba(80, 92, 117, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0 24px 0 32px;
  cursor: pointer;
`

const MenuCardIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
