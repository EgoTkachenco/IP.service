import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const AdvantagesSmall = dynamic(() => import('./blocks/AdvantagesSmall'), {
  loading: () => '',
})
const RangesAPIUsecases = dynamic(() => import('./blocks/RangesAPIUsecases'), {
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

import { rangesService } from '@/utils/api'

const LandingRanges = () => {
  return (
    <>
      <Main
        title="IP Ranges API"
        description="Through smartphones, tablets, and other portable devices, mobile has overtaken desktop as the leading source of internet traffic. IPinfo’s API allows resolution of IP address to carrier, and our database provides information on every mobile IP’s carrier name, country code, and network code."
        service={rangesService}
      />
      <Feedback />
      <GeolocationStatistic />
      <AdvantagesSmall
        title={`Reliable & updated\nIP ranges data`}
        description={
          'IPinfo offers the most reliable domain to IP ranges lookup service on the web. Our proprietary network data sets are updated every day so that our database is as accurate and complete as it gets.'
        }
        count={36}
        features={[
          { icon: 'done', name: 'Number of ranges' },
          { icon: 'done', name: 'List of all ranges' },
        ]}
        contentWidth="525px"
      />
      <RangesAPIUsecases />
      <Products />
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </>
  )
}

export default LandingRanges
