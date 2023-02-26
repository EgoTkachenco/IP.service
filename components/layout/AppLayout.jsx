import { useState, useEffect } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'
import { observer } from 'mobx-react-lite'
import AuthStore from '@/store/AuthStore'
import TokenStore from '@/store/TokenStore'
import SearchStore from '@/store/SearchStore'
import { app_load, gradient } from '@/styles/animations'
import { useRouter } from 'next/router'

const Layout = observer(({ children }) => {
  const { user, relog } = AuthStore
  const [isLogged, setIsLogged] = useState(!!user)
  const router = useRouter()

  useEffect(() => {
    if (!user)
      relog()
        .then(() => setIsLogged(true))
        .catch(() => router.push('/'))
    else if (!isLogged) setIsLogged(true)
  }, [])

  const isMobile = useMediaQuery('(max-width: 1140px)')
  const isFetch = AuthStore.isFetch || TokenStore.isFetch || SearchStore.isFetch

  return (
    <Wrapper blur={!isLogged}>
      {isLogged && (
        <>
          <Header isMobile={isMobile} />
          <Inner>
            {!isMobile && <Menu />}
            <Content isFetch={isFetch}>{children}</Content>
          </Inner>
        </>
      )}
    </Wrapper>
  )
})

export default Layout

const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in;
    animation: ${({ blur }) => app_load(blur)} 1s forwards;
  }
`

const Inner = styled.div`
  display: flex;
`

const Content = styled.div`
  position: relative;
  flex-grow: 1;
  max-height: calc(100vh - 90px);
  overflow: auto;
  background: #f9fafc;
  padding: 50px;

  @media (max-width: 1140px) {
    padding: 48px 24px;
    max-height: calc(100vh - 56px);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({ isFetch }) => (isFetch ? '6px' : 0)};
    transition: all 0.3s ease-in;
    background: ${({ theme }) =>
      `linear-gradient(-45deg, ${theme.colors.primary}, ${theme.colors.success})`};
    background-size: 200% 200%;
    animation: ${gradient} ${({ isFetch }) => (isFetch ? '5s' : '0')} ease
      infinite;
  }
`
