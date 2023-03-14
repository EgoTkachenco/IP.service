import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const Advantages = dynamic(() => import('./blocks/Advantages'), {
  loading: () => '',
})
const AbuseAPIUsecases = dynamic(() => import('./blocks/AbuseAPIUsecases'), {
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
import { abuseService } from '@/utils/api'

const LandingAbuse = () => {
  return (
    <>
      <Main
        logo="/services-logo/abuse.svg"
        title={`Abuse Contact Data\nfor IP Addresse`}
        description="Our abuse contact API returns data containing information belonging to the abuse contact of every IP address on the Internet. Fields included in this response are the abuse contact's email address, postal/ZIP code, city, state, country, name, network, and phone number."
        service={abuseService}
      />
      <Feedback />
      <GeolocationStatistic />
      <Advantages
        title={`Accurate & low-latency\nAbuse contact data`}
        description={`IPinfo specializes in providing accurate abuse contact. Our Abuse contact API provides a response that includes these datasets for every IP.`}
        count={61}
        features={[
          { icon: 'done', name: 'Address' },
          { icon: 'done', name: 'Email address' },
          { icon: 'done', name: 'Network' },
          { icon: 'done', name: 'Country' },
          { icon: 'done', name: 'Name' },
          { icon: 'done', name: 'Phone number' },
        ]}
      />
      <AbuseAPIUsecases />
      <Products />
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </>
  )
}

export default LandingAbuse
