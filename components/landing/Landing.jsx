import Layout from './Layout'
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
    <Layout>
      <Main />
      <ApiPreview />
      <Feedback />
      <Advantages />
      <WaysToUse />
      <Slogan />
      <FAQ />
      <Partners />
      <GetStarted />
    </Layout>
  )
}

export default Landing
