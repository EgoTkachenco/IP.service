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
const GeolocationStatistic = dynamic(
  () => import('./blocks/GeolocationStatistic'),
  {
    loading: () => '',
    ssr: false,
  }
)

import { privacyService } from '@/utils/api'

const LandingPrivacy = () => {
  return (
    <>
      <Main
        logo="/services-logo/privacy.svg"
        title="Privacy Detection API"
        description="Our Privacy Detection API detects various methods used to mask a user's true IP address, including VPN detection, proxy detection, tor, relay usage, or a connection via a hosting provider, which could potentially be used to tunnel traffic, and mask the true IP address."
        service={privacyService}
      />
      <Feedback />
      <GeolocationStatistic />
      <Advantages
        title={`Accurate & up-to-date\nprivacy detection data`}
        description={
          'We perform custom full internet wide scans to detect almost 10 million active VPNs. This is combined with data on public SOCKS and HTTP proxies, tor exit nodes, and our own IP usage type classification to determine which IP ranges belong to hosting providers. The data is updated regularly, so the results are always fresh.'
        }
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
      <FAQ />
      <Contact />
      <Partners />
      <GetStarted />
    </>
  )
}

export default LandingPrivacy
