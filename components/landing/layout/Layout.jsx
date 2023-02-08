import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  background: #f9fafc;
`
