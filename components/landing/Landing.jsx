import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import {
  Main,
  ApiPreview,
  Feedback,
  Advantages,
  WaysToUse,
  Slogan,
  FAQ,
  Partners,
  GetStarted,
} from './blocks'

const Landing = () => {
  return (
    <Wrapper>
      {/* <InnerContent> */}
      <Header />
      <Main />
      <ApiPreview />
      <Feedback />
      <Advantages />
      <WaysToUse />
      <Slogan />
      <FAQ />
      <Partners />
      <GetStarted />
      <Footer />
      {/* </InnerContent> */}
    </Wrapper>
  )
}

export default Landing

const Wrapper = styled.div`
  background: #f9fafc;
`

const InnerContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`
