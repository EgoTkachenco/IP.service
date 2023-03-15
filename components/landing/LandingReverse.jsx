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
const GeolocationStatistic = dynamic(
  () => import('./blocks/GeolocationStatistic'),
  {
    loading: () => '',
    ssr: false,
  }
)
import { reverseService } from '@/utils/api'

const LandingReverse = () => {
  return (
    <>
      <Main
        logo="/services-logo/reverse.svg"
        title="Reverse IP API"
        description="Our Hosted Domains API, or Reverse IP API returns a full list of domains that are hosted on a single IP address. These domains are ordered based on host.io domain ranking."
        service={reverseService}
        validation={() => {}}
        examples={['google.com', 'youtube.com', 'facebook.com', 'twitter.com']}
        placeholder="Search Domain"
      />
      <Feedback />
      <GeolocationStatistic />
      <AdvantagesSmall
        title={`Improve your website's \nperformance or experience`}
        description={`Our API allows IPinfo customers to leverage their anonymous traffic into marketing and sales opportunities, combining our data with their own firmographics. For example, if your business serves differently to residential users, you can customize the experience for ISP-owned IP traffic on your website using the IP company data from our API response.`}
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
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </>
  )
}

export default LandingReverse
