import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const AdvantagesSmall = dynamic(() => import('./blocks/AdvantagesSmall'), {
  loading: () => '',
})
const WaysToUseSmall = dynamic(() => import('./blocks/WaysToUseSmall'), {
  loading: () => '',
})
const Contact = dynamic(() => import('./blocks/Contact'), {
  loading: () => '',
  ssr: false,
})
const FAQ = dynamic(() => import('./blocks/FAQ'), {
  loading: () => '',
  ssr: false,
})
const Partners = dynamic(() => import('./blocks/Partners'), {
  loading: () => '',
  ssr: false,
})
const GetStarted = dynamic(() => import('./blocks/GetStarted'), {
  loading: () => '',
  ssr: false,
})
const Products = dynamic(() => import('./blocks/Products'), {
  loading: () => '',
  ssr: false,
})
const GeolocationStatistic = dynamic(
  () => import('./blocks/GeolocationStatistic'),
  {
    loading: () => '',
    ssr: false,
  }
)
const BussinessMap = dynamic(() => import('./blocks/BussinessMap'), {
  loading: () => 'loading',
})
import { whoisService } from '@/utils/api'

const LandingWhois = () => {
  return (
    <>
      <Main
        title="IP Whois API"
        description="Our Whois API provides records with accurate and easy-to-use data fields - Point of Contact (POC), Organization Identifiers (ORG), Networks (NET), and more. We do the busy work by developing well-parsed insights for our users."
        service={whoisService}
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
    </>
  )
}

export default LandingWhois
