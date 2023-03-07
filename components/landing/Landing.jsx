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
  GeolocationStatistic,
} from './blocks'

const Landing = () => {
  return (
    <Layout>
      <Main
        title="IP Geolocation"
        description="Around the globe, industry-leading organizations use IPinfo's
          geolocation data to create efficient, enjoyable, and secure online
          experiences for their users. These IP geolocation insights lead to
          better conversion rates, improved customer satisfaction, and much more
          with our API that's built for low latency responses."
      />
      <Feedback />
      <GeolocationStatistic />
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
