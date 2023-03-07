import Layout from './layout/Layout'
import {
  Main,
  Feedback,
  AdvantagesSmall,
  WaysToUseSmall,
  Contact,
  FAQ,
  Partners,
  GetStarted,
  Products,
  GeolocationStatistic,
  BussinessMap,
} from './blocks'
import { companyService } from '@/utils/api'

const LandingCompany = () => {
  return (
    <Layout>
      <Main
        title="IP to Company"
        description="View website traffic from a different point of view. Our API provides customers with firmographics data on the companies behind IP traffic."
        service={companyService}
      />
      <Feedback />
      <GeolocationStatistic />
      <AdvantagesSmall />
      <WaysToUseSmall />
      <BussinessMap />
      <Products />
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </Layout>
  )
}

export default LandingCompany
