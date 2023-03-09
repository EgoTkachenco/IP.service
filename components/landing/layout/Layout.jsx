import styled from 'styled-components'
import Header from './header/Header'
import Footer from './NewFooter'
// import Footer from './Footer'
import Animation from '@/components/reusable/Animation'

const Layout = ({ children, animation = true }) => {
  return (
    <Wrapper>
      <Header />
      {animation ? <Animation>{children}</Animation> : children}
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  background: #f9fafc;
`
