import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const AdvantagesSmall = dynamic(() => import('./blocks/AdvantagesSmall'), {
  loading: () => '',
})
const CompanyAPIUsecases = dynamic(
  () => import('./blocks/CompanyAPIUsecases'),
  {
    loading: () => '',
  }
)
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
        logo="/services-logo/company.svg"
        title="IP to Company"
        secondTitle="API"
        description="View website traffic from a different point of view. Our API provides customers with firmographics data on the companies behind IP traffic."
        service={companyService}
      />
      <Feedback />
      <GeolocationStatistic />
      <AdvantagesSmall
        title={'Accurate & low-latency \n IP geolocation lookup'}
        description={`Using insights derived from WHOIS, IPinfo IP to Company API identifies the company that operates or leases the IP block from the ASN.\n\nOur company classifiers indicate the types of organizations that frequent your website, including ISPs, businesses, educational institutions, or hosting services.`}
        count={40}
        features={[
          { icon: 'navigation', name: 'Domain name' },
          { icon: 'edit', name: 'Company name' },
          { icon: 'city', name: 'Company type' },
        ]}
      />
      <CompanyAPIUsecases />
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
