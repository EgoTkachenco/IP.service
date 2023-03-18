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
const ServiceStatistic = dynamic(() => import('./blocks/ServiceStatistic'), {
  loading: () => '',
  ssr: false,
})

import { rangesService } from '@/utils/api'

const LandingRanges = () => {
  return (
    <>
      <Main
        logo="/services-logo/ranges.svg"
        title="IP Ranges"
        secondTitle="API"
        description="The API for IP ranges provides information on IP ranges owned or managed by a specific company, as identified by its domain name. This data encompasses the total count of ranges and an array containing each individual range."
        service={rangesService}
      />
      <Feedback
        name="Michael Johnson"
        position="Network Administrator"
        feedback="Spyskey's IP ranges API service has been a game-changer for me as a network administrator. It solved the common problem of identifying and blocking malicious IP addresses by providing a comprehensive database. The service is easy to use, reliable, and well-documented. It has helped us quickly identify and block potential threats, making it an invaluable tool for any IT professional."
      />
      <ServiceStatistic
        features={[
          { title: '24H', description: 'Actualization time' },
          { title: '100%', description: 'Accuracy' },
          { title: '100%', description: 'Security' },
          { title: '~100ms', description: 'Latency' },
        ]}
      />

      <AdvantagesSmall
        title={`The Value of Accurate IP Ranges Data`}
        description={
          'Spyskey provides the most reliable domain to IP ranges lookup service online, with daily updates to our proprietary network data sets. Our database is highly accurate and comprehensive, making it a top choice for IT professionals and developers searching for trustworthy IP ranges data.'
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
      <FAQ topic="Ranges" />
      <Contact />
      <Partners
        title={'Industry-leading companies \naround the world trust our APIs'}
      />
      <GetStarted text="We provide a credit card-free 7-day trial period for our IP Ranges API service." />
    </>
  )
}

export default LandingRanges
