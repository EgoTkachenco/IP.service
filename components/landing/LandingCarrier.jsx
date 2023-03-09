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

export default LandingCarrier
