import { useMediaQuery } from '@mantine/hooks'
import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'
import { observer } from 'mobx-react-lite'
import AuthStore from '@/store/AuthStore'
import TokenStore from '@/store/TokenStore'
import SearchStore from '@/store/SearchStore'
import { gradient } from '@/styles/animations'
import Animation from '@/components/reusable/Animation'
import { useRouter } from 'next/router'

const Layout = observer(({ children, animation = true }) => {
  const isFetch = AuthStore.isFetch || TokenStore.isFetch || SearchStore.isFetch

  return (
    <Wrapper>
      <Header />
      <Inner>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <ContentContainer isFetch={isFetch} animation={animation}>
          {children}
        </ContentContainer>
      </Inner>
    </Wrapper>
  )
})

export default Layout

const ContentContainer = ({ isFetch, animation, children }) => {
  const router = useRouter()
  return (
    <Content isFetch={isFetch}>
      {animation ? (
        <Animation key={router.asPath}>{children}</Animation>
      ) : (
        children
      )}
    </Content>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
`

const MenuWrapper = styled.div`
  display: block;
  @media (max-width: 1140px) {
    display: none;
  }
`

const Inner = styled.div`
  display: flex;
  flex-grow: 1;
`

const Content = styled.div`
  position: relative;
  flex-grow: 1;
  max-height: calc(100vh - 90px);
  max-height: calc((var(--vh, 1vh) * 100) - 90px);
  overflow: auto;
  background: #f9fafc;
  padding: 50px;

  @media (max-width: 1140px) {
    padding: 48px 24px;
    max-height: calc(100vh - 56px);
    max-height: calc((var(--vh, 1vh) * 100) - 56px);
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
