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
const ServiceStatistic = dynamic(() => import('./blocks/ServiceStatistic'), {
  loading: () => '',
  ssr: false,
})

import { whoisService } from '@/utils/api'

const LandingWhois = () => {
  return (
    <>
      <Main
        logo="/services-logo/whois.svg"
        title="IP Whois API"
        description="Discover the ultimate Whois API solution, providing precise and user-friendly data fields like Point of Contact (POC), Organization Identifiers (ORG), and Networks (NET). Save time with our well-structured insights tailored for your convenience, and enhance your data-driven projects with our comprehensive Whois API tool."
        service={whoisService}
        advanced={true}
      />
      <Feedback
        name="Aaron Patel"
        position="Cybersecurity Analyst"
        feedback="As a cybersecurity analyst, I constantly face the challenge of identifying and tracking malicious activities online. The Whois API service by Spyskey has been a game-changer for me, providing accurate and easy-to-access domain information that helps streamline our investigations. Thanks to Spyskey, we've been able to swiftly respond to threats and protect our clients more effectively."
        avatar="/feedbacks/Cybersecurity Analyst.jpg"
      />
      <ServiceStatistic
        features={[
          { title: '24H', description: 'Actualization time' },
          { title: '99.3%', description: 'Accuracy' },
          { title: '97.7%', description: 'Coverage' },
          { title: '~100ms', description: 'Latency' },
        ]}
      />
      <AdvantagesSmall
        title={
          'Efficiently-structured and \nuser-friendly IP Whois information'
        }
        description="Stay Ahead with Our Continuously Updated Whois Data Amid Rapid Domain Growth. With the Internet experiencing an impressive annual growth of 7.2% in domain registrations across all Top-Level Domains (TLDs), it's crucial to have access to the most current Whois data. We ensure you remain informed by updating our insights daily and aggregating record sets from over 450 Whois servers globally. Effortlessly access comprehensive Whois information by IP, ID, or domain, and unlock invaluable insights to empower your online ventures."
        count={28}
        contentWidth="660px"
      />
      <WhoisInfo />
      <Products />
      <FAQ topic="Whois" />
      <Contact />
      <Partners
        title={'Global Top-Tier Enterprises Rely \non Our Trustworthy APIs'}
      />
      <GetStarted text="Experience Our Whois API Service Risk-Free with a 7-Day Free Trial, No Credit Card Required." />
    </>
  )
}

export default LandingWhois
