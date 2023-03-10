import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const Advantages = dynamic(() => import('./blocks/Advantages'), {
  loading: () => '',
})
const ASNAPIUsecases = dynamic(() => import('./blocks/ASNAPIUsecases'), {
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
      <Advantages
        title={`Reliable & updated ASN data`}
        description={`IPinfo offers the most reliable IP to ASN lookup service on the web. Our proprietary network data sets are updated every day so that our ASN database is as accurate and complete as it gets.`}
        count={44}
        features={[
          { icon: 'done', name: 'Hostname' },
          { icon: 'done', name: 'Allocation date' },
          { icon: 'done', name: 'Registry' },
          { icon: 'done', name: 'Number of IPs' },
          { icon: 'done', name: 'Hosting' },
          { icon: 'done', name: 'Hosting service' },
        ]}
      />
      <ASNAPIUsecases />
      <Products />
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </>
  )
}

export default LandingASN
