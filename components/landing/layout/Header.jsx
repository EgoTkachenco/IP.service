import { useContext, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H6, Button, Text, Icon, Caption } from '@/core'
import { BlockInner } from '../blocks/Block'
import ModalContext from '@/utils/modalContext'
import Link from 'next/link'
import { useClickOutside } from '@/hooks'

const Header = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <BlockInner>
      <Wrapper>
        <Flex gap="8px" align="center">
          <Image src="/logo.svg" height={24} width={24} alt="IP.Service" />
          <H6>IP.Service</H6>
        </Flex>

        <Flex gap="25px" align="center">
          <Dropdown name="Products">
            <ProductDropdown />
          </Dropdown>
          <Text weight="600">Solutions</Text>
          <Dropdown name="Why IPservice">
            <ProductDropdown />
          </Dropdown>
          <Dropdown name="Resources">
            <ProductDropdown />
          </Dropdown>
          <Link href="/pricing">
            <Text weight="600">Pricing</Text>
          </Link>
          <Link href="/">
            <Text weight="600">Docs</Text>
          </Link>
        </Flex>

        <Flex gap="10px" align="center">
          <Button
            size="medium"
            width="110px"
            onClick={() => openModal('sign-up')}
          >
            Sign Up
          </Button>
          <Button
            size="medium"
            width="110px"
            text
            color="dark"
            onClick={() => openModal('sign-in')}
          >
            Login
          </Button>
        </Flex>
      </Wrapper>
    </BlockInner>
  )
}

export default Header

const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 76px;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid rgba(52, 64, 84, 0.1);
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
  z-index: ${({ isOpen }) => (isOpen ? 1 : -1)};
`

const ProductDropdown = () => {
  const links = [
    {
      name: 'Data Downloads',
      description: 'Customize user expiriences',
      icon: 'navigation',
    },
    {
      name: 'IP Ranges API',
      description: 'Target specific IP ranges',
      icon: 'move',
    },
    {
      name: 'Privacy Detection',
      description: 'Unmask user’s identities',
      icon: 'shield',
    },
    {
      name: 'IP to Company API',
      description: 'Leverage anonymus leads',
      icon: 'building',
    },
    {
      name: 'ASN API',
      description: 'Improve data enrichment',
      icon: 'share',
    },
    {
      name: 'Hosted domains API',
      description: 'Enchance lead generation',
      icon: 'globe',
    },
    {
      name: 'IP to Mobille Carrier API',
      description: 'Customize user expiriences',
      icon: 'wifi',
    },
    {
      name: 'Abuse Contact API',
      description: 'Automate abusive IP reporting',
      icon: 'flag',
    },
    {
      name: 'IP Whois API',
      description: 'Get more IP insights',
      icon: 'zoom-in',
    },
  ]
  return (
    <Flex gap="10px" width="calc(320px *3 + 20px)" fwrap>
      {links.map((link, i) => (
        <MenuCard key={i}>
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
  padding: 0 35px;
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
