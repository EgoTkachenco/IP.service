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
import { asnService } from '@/utils/api'

const LandingASN = () => {
  return (
    <>
      <Main
        title="ASN API"
        description="IP to ASN mapping and ASN lookup are possible with IPinfo’s ASN API, giving our customers access to a database that includes ASN details for every IP address and every ASN’s related domains, allocation date, registry name, total number of IP addresses, and assigned prefixes."
        service={asnService}
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

export default LandingASN
