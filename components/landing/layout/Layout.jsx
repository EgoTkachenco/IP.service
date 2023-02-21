import styled from 'styled-components'
import Header from './header/Header'
import Footer from './Footer'
import PageChangeAnimation from '@/components/reusable/PageChangeAnimation'

const Layout = ({ children, animation = true }) => {
  return (
    <Wrapper>
      <Header />
      {animation ? (
        <PageChangeAnimation>{children}</PageChangeAnimation>
      ) : (
        children
      )}
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  background: #f9fafc;
`
