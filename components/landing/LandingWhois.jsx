import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const AdvantagesSmall = dynamic(() => import('./blocks/AdvantagesSmall'), {
  loading: () => '',
})
const WhoisInfo = dynamic(() => import('./blocks/WhoisInfo'), {
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
      <AdvantagesSmall
        title={
          'Billion API requests last month\nWell-parsed andusable IP Whois data'
        }
        description={`The Internet has an approximate year-over-year increase of 5.4 percent for domain name registrations across all TLDs. We stay current with Whois data changes by updating our these insights daily and gathering record sets from around 400 Whois servers. Access our Whois data by IP, ID, or domain, including the following information:`}
        count={28}
        contentWidth="660px"
      />
      <WhoisInfo />
      <Products />
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </>
  )
}

export default LandingWhois
