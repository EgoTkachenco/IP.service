import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const AdvantagesSmall = dynamic(() => import('./blocks/AdvantagesSmall'), {
  loading: () => '',
})
const CarrierInfo = dynamic(() => import('./blocks/CarrierInfo'), {
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
import { carrierService } from '@/utils/api'

const LandingCarrier = () => {
  return (
    <>
      <Main
        title="Carrier Detection"
        secondTitle="Mobile"
        reverseTitle
        description="Through smartphones, tablets, and other portable devices, mobile has overtaken desktop as the leading source of internet traffic. IPinfo’s API allows resolution of IP address to carrier, and our database provides information on every mobile IP’s carrier name, country code, and network code."
        service={carrierService}
      />
      <Feedback />
      <GeolocationStatistic />
      <AdvantagesSmall
        title={'Lookup mobile users'}
        description={`Identifying mobile users by their IP address allows for a level of detection that can be more reliable than other common methods, such as by reading their browser’s user-agent.\n\nOur mobile network IP data is updated at least once per month and can be accessed via an API endpoint or as a direct download.`}
        count={52}
        features={[
          { icon: 'done', name: 'MCC' },
          { icon: 'edit', name: 'Name' },
          { icon: 'done', name: 'MNC' },
        ]}
        contentWidth="525px"
      />
      <CarrierInfo />
      <Products />
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </>
  )
}

export default LandingCarrier
