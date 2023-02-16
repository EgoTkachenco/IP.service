import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import PageChangeAnimation from '@/components/reusable/PageChangeAnimation'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <PageChangeAnimation>{children}</PageChangeAnimation>
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  background: #f9fafc;
`
