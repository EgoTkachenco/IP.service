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
import { companyService } from '@/utils/api'

const LandingCompany = () => {
  return (
    <>
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
    </>
  )
}

export default LandingCompany
