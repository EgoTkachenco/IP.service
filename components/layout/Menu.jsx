import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Caption, Icon, Flex } from '@/core'
import APP_LINKS from '@/constants/app-routes.json'
import { observer } from 'mobx-react-lite'
import AuthStore from '@/store/AuthStore'

const Menu = observer(() => {
  const router = useRouter()
  const { logout } = AuthStore
  const handleLogout = () => logout().then(() => router.push('/'))
  return (
    <Wrapper>
      {APP_LINKS.map((link) => (
        <MenuLink
          key={link.name}
          name={link.name}
          icon={link.icon}
          onClick={() => router.push(link.pathname)}
          isActive={router.pathname === link.pathname}
        />
      ))}
      <Divider />
      <MenuLink name="Log out" icon="enter" onClick={handleLogout} />
    </Wrapper>
  )
})

export default Menu

const Wrapper = styled.div`
  width: 260px;
  min-width: 260px;
  height: calc(100vh - 90px);
  background: ${({ theme }) => theme.colors.white};
  border-right: 1px solid #f1f4f9;
  border-radius: 0px;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1140px) {
    height: auto;
    background: none;
    min-width: unset;
    border-right: 0;
    padding: 0;
    width: 100%;
  }
`

const Divider = styled.div`
  height: 1px;
  background: #f1f4f9;
`

const MenuLink = ({ name, icon, onClick = () => {}, isActive = false }) => {
  const [active, setActive] = useState(isActive)
  useEffect(() => {
    setActive(isActive)
  }, [isActive])
  return (
    <LinkWrapper
      onClick={onClick}
      isActive={active}
      gap="10px"
      align="center"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(isActive)}
    >
      <Icon icon={icon} color={active ? 'primary' : 'text'} size="18px" />
      <Caption color={active ? 'primary' : 'text'}>{name}</Caption>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Flex)`
  background: ${({ isActive }) =>
    isActive ? 'rgba(14, 93, 246, 0.1)' : 'none'};
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background 0.3s;
`
