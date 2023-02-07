import styled from 'styled-components'
import Header from './Header'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Inner>
        <Menu />
        <Content>{children}</Content>
      </Inner>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  height: 100vh;
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
`
