import { useState, useEffect } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'
import { observer } from 'mobx-react-lite'
import store from '@/store/AuthStore'
import { gradient } from '@/styles/animations'
import { useRouter } from 'next/router'

const Layout = observer(({ children }) => {
  const [isLogged, setIsLogged] = useState(!!store.user)
  const router = useRouter()
  useEffect(() => {
    if (!store.user)
      store
        .relog()
        .then(() => setIsLogged(true))
        .catch(() => router.push('/'))
    else if (!isLogged) setIsLogged(true)
  }, [])
  const isMobile = useMediaQuery('(max-width: 1140px)')

  return (
    <Wrapper blur={!isLogged}>
      {isLogged && (
        <>
          <Header isMobile={isMobile} />
          <Inner>
            {!isMobile && <Menu />}
            <Content>{children}</Content>
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
    background: ${({ blur }) =>
      blur ? 'rgba(7, 22, 37, 0.05)' : 'transparent'};
    backdrop-filter: blur(10px);
    height: ${({ blur }) => (blur ? '100%' : 0)};
    opacity: ${({ blur }) => (blur ? 1 : 0)};
    transition: all 0.3s ease-in;
    background: linear-gradient(
      -45deg,
      rgba(7, 22, 37, 0.05),
      rgba(7, 22, 37, 0.2),
      rgba(7, 22, 37, 0.05)
    );
    background-size: 400% 400%;
    animation: ${gradient} 10s ease infinite;
  }
`

const Inner = styled.div`
  display: flex;
`

const Content = styled.div`
  flex-grow: 1;
  max-height: calc(100vh - 90px);
  overflow: auto;
  background: #f9fafc;
  padding: 50px;

  @media (max-width: 1140px) {
    padding: 48px 24px;
    max-height: calc(100vh - 56px);
  }
`
