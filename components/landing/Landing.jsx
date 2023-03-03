import Layout from './layout/Layout'
import {
  Main,
  Feedback,
  Advantages,
  WaysToUse,
  Contact,
  FAQ,
  Partners,
  GetStarted,
  Products,
  GeolocationStats,
} from './blocks'

const Landing = () => {
  return (
    <Layout>
      <Main />
      <Feedback />
      <GeolocationStats />
      <Products />
      <Advantages />
      <WaysToUse />
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </Layout>
  )
}

export default Landing
