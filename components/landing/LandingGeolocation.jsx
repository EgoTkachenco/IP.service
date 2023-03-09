import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const Advantages = dynamic(() => import('./blocks/Advantages'), {
  loading: () => '',
})
const WaysToUse = dynamic(() => import('./blocks/WaysToUse'), {
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

import { geolocationService } from '@/utils/api'

const Landing = () => {
  return (
    <>
      <Main
        title="IP Geolocation"
        secondTitle="API"
        description="Around the globe, industry-leading organizations use IPinfo's
          geolocation data to create efficient, enjoyable, and secure online
          experiences for their users. These IP geolocation insights lead to
          better conversion rates, improved customer satisfaction, and much more
          with our API that's built for low latency responses."
        service={geolocationService}
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
    </>
  )
}

export default Landing
