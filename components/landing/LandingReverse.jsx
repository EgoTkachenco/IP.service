import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const AdvantagesSmall = dynamic(() => import('./blocks/AdvantagesSmall'), {
  loading: () => '',
})
const ReverseAPIUsecases = dynamic(
  () => import('./blocks/ReverseAPIUsecases'),
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
const ServiceStatistic = dynamic(() => import('./blocks/ServiceStatistic'), {
  loading: () => '',
  ssr: false,
})
import { reverseService } from '@/utils/api'

const LandingReverse = () => {
  return (
    <>
      <Main
        logo="/services-logo/reverse.svg"
        title="Hosted Domains"
        secondTitle="API"
        description="Our Hosted Domains API, alternatively referred to as the Reverse IP API, delivers an extensive and detailed list of domains that share a single IP address. This valuable information enables users to gain insights into the various websites hosted on a particular server or IP address."
        service={reverseService}
        validation={() => {}}
        examples={['google.com', 'youtube.com', 'facebook.com', 'twitter.com']}
        placeholder="Search Domain"
      />
      <Feedback
        name="Olivia Thompson"
        position="Digital Marketing Manager"
        feedback="As a Digital Marketing Manager, I've found Spyskey's Hosted Domains API service to be invaluable in identifying competitors' websites on shared hosting. This insight has empowered us to make informed decisions and optimize our marketing strategies. I highly recommend Spyskey for anyone seeking to enhance their digital marketing efforts."
      />
      <ServiceStatistic
        features={[
          { title: '24H', description: 'Actualization time' },
          { title: '99.9%', description: 'Accuracy' },
          { title: '89.7%', description: 'Coverage' },
          { title: '~100ms', description: 'Latency' },
        ]}
      />
      <AdvantagesSmall
        title={`Enhance your website's performance and user experience.`}
        description={`Our API empowers Spyskey customers to transform anonymous traffic into marketing and sales opportunities by integrating our data with their firmographics, while also optimizing SEO. For instance, if your business caters to residential users in a distinct manner, you can personalize the experience for ISP-owned IP traffic on your website using the IP company information from our API response.`}
        count={55}
        features={[
          { icon: 'done', name: 'Name' },
          { icon: 'done', name: 'Domain' },
          { icon: 'done', name: 'Type' },
        ]}
        contentWidth="568px"
      />
      <ReverseAPIUsecases />
      <Products />
      <FAQ topic="Reverse" />
      <Contact />
      <Partners title="Global leaders trust our APIs" />
      <GetStarted text="Try our Hosted Domains API service with a 7-day free trial, no credit card needed." />
    </>
  )
}

export default LandingReverse
