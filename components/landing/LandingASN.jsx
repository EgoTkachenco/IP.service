import Main from './blocks/Main'
import Feedback from './blocks/Feedback'
import Advantages from './blocks/Advantages'
import ASNAPIUsecases from './blocks/ASNAPIUsecases'
import Contact from './blocks/Contact'
import FAQ from './blocks/FAQ'
import Partners from './blocks/Partners'
import GetStarted from './blocks/GetStarted'
import Products from './blocks/Products'
import ServiceStatistic from './blocks/ServiceStatistic'

import { asnService } from '@/utils/api'

const LandingASN = () => {
  return (
    <>
      <Main
        logo="/services-logo/asn.svg"
        title="ASN API"
        description="Unlock IP-to-ASN mapping and ASN lookup with Spyskey's advanced ASN API. Our database offers vital information on IP addresses and ASNs for improved security and network management. Features include fast ASN lookups, related domains, allocation dates, registry names, and assigned prefixes. Enhance your network operations with Spyskey's top solutions."
        service={asnService}
        validation={() => null}
        placeholder="Search IP or ASN"
      />
      <Feedback
        name="Miles Turner"
        position="Network Security Analyst"
        feedback="The Spyskey ASN API service is a game-changer for anyone in cybersecurity looking to identify the Autonomous System Number of a particular IP address. As a satisfied customer, I can attest to the ease of use and accuracy of the data provided by the Spyskey API. The comprehensive and up-to-date information about ASNs has helped me assess potential threats and vulnerabilities with greater precision. Additionally, the customer support team at Spyskey is top-notch and always available to help with any questions or issues. Overall, I highly recommend Spyskey to anyone in need of a reliable and comprehensive ASN API service."
        avatar="/feedbacks/Network Security Analyst.jpg"
      />
      <ServiceStatistic
        features={[
          { title: '24H', description: 'Actualization time' },
          { title: '99.1%', description: 'Accuracy' },
          { title: '98.4%', description: 'Coverage' },
          { title: '~100ms', description: 'Latency' },
        ]}
      />
      <Advantages
        title={`Accurate and Up-to-Date ASN Data`}
        description={`Experience unparalleled IP-to-ASN lookup with Spyskey's trusted online service. Harnessing daily-updated, proprietary network data sets, our comprehensive ASN database delivers unmatched accuracy and completeness in the industry.`}
        count={44}
        features={[
          { icon: 'done', name: 'Hostname' },
          { icon: 'done', name: 'Allocation date' },
          { icon: 'done', name: 'Registry' },
          { icon: 'done', name: 'Number of IPs' },
          { icon: 'done', name: 'Hosting' },
          { icon: 'done', name: 'Hosting service' },
        ]}
      />
      <ASNAPIUsecases />
      <Products />
      <FAQ topic="ASN" />
      <Contact />
      <Partners
        title={'Industry-leading companies \naround the world trust our APIs'}
      />
      <GetStarted text="We provide a credit card-free 7-day trial period for our ASN API service." />
    </>
  )
}

export default LandingASN
