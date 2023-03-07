import { useMediaQuery } from '@mantine/hooks'
import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'
import { observer } from 'mobx-react-lite'
import AuthStore from '@/store/AuthStore'
import TokenStore from '@/store/TokenStore'
import SearchStore from '@/store/SearchStore'
import { gradient } from '@/styles/animations'

const Layout = observer(({ children }) => {
  const isMobile = useMediaQuery('(max-width: 1140px)', true)
  const isFetch = AuthStore.isFetch || TokenStore.isFetch || SearchStore.isFetch

  return (
    <Wrapper>
      <Header isMobile={isMobile} />
      <Inner>
        {!isMobile && <Menu />}
        <Content isFetch={isFetch}>{children}</Content>
      </Inner>
    </Wrapper>
  )
})

export default Layout

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
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
