import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Feedback from './blocks/Feedback'

const Advantages = dynamic(() => import('./blocks/Advantages'), {
  loading: () => '',
})
const PrivacyAPIUsecases = dynamic(
  () => import('./blocks/PrivacyAPIUsecases'),
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

import { privacyService } from '@/utils/api'

const LandingPrivacy = () => {
  return (
    <>
      <Main
        logo="/services-logo/privacy.svg"
        title="Privacy Detection API"
        description="Uncover hidden IP addresses with unparalleled VPN, Proxy, and Tor Detection Solutions. Our state-of-the-art API swiftly exposes methods used to conceal users' actual IP addresses, including VPN, proxy, and Tor relay usage, to enhance your security measures. Experience the power of our innovative Privacy Detection API by integrating it today."
        service={privacyService}
        examples={['', '64.225.8.118', '100.2.45.164', '192.169.249.16']}
      />
      <Feedback
        name="Benjamin Edwards"
        position="Chief Information Security Officer"
        feedback="Our organization faced a persistent issue with cybercriminals attempting to infiltrate our network and gain unauthorized access to sensitive data. Since implementing SpysKey's Privacy Detection API, we have witnessed a significant reduction in these incidents. The API has been highly effective at identifying and mitigating attempts to mask IP addresses using VPNs, proxies, and Tor relays. As a result, our security has been greatly enhanced, and we have increased confidence in protecting our company's valuable information. SpysKey's Privacy Detection API has become an indispensable component of our cybersecurity strategy."
        avatar="/feedbacks/Chief Information Security Officer.jpg"
      />
      <ServiceStatistic
        features={[
          { title: '24H', description: 'Actualization time' },
          { title: '95.2%', description: 'Accuracy' },
          { title: '788M', description: 'Request/D' },
          { title: '~100ms', description: 'Latency' },
        ]}
      />
      <Advantages
        title={`Accurate, timely \nIP concealment detection`}
        description="Experience our powerful custom internet scans, detecting nearly 11 million active VPNs alongside data on public SOCKS, HTTP proxies, and Tor exit nodes. With our proprietary IP usage type classification and regular updates, we ensure consistently fresh, accurate results. Enhance your security and protect against IP concealment threats using our comprehensive, real-time IP detection solutions."
        count={36}
        features={[
          { icon: 'done', name: 'VPN' },
          { icon: 'done', name: 'Proxy' },
          { icon: 'done', name: 'Tor' },
          { icon: 'done', name: 'Relay' },
          { icon: 'done', name: 'Hosting' },
          { icon: 'done', name: 'Hosting service' },
        ]}
      />
      <PrivacyAPIUsecases />
      <Products />
      <FAQ topic="Privacy" />
      <Contact />
      <Partners
        title={'Industry-leading companies \naround the world trust our APIs'}
      />
      <GetStarted text="Discover the power of our Privacy Detection API with a risk-free 7-day trial - no credit card required. Experience enhanced security firsthand." />
    </>
  )
}

export default LandingPrivacy
