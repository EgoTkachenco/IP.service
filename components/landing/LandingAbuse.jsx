import Main from './blocks/Main'
import Feedback from './blocks/Feedback'
import Advantages from './blocks/Advantages'
import AbuseAPIUsecases from './blocks/AbuseAPIUsecases'
import Contact from './blocks/Contact'
import FAQ from './blocks/FAQ'
import Partners from './blocks/Partners'
import GetStarted from './blocks/GetStarted'
import Products from './blocks/Products'
import ServiceStatistic from './blocks/ServiceStatistic'
import { abuseService } from '@/utils/api'

const LandingAbuse = () => {
  return (
    <>
      <Main
        logo="/services-logo/abuse.svg"
        title={`Contact Information for Addressing IP Abuse`}
        description="Introducing our premier Abuse Contact API, the ultimate solution for obtaining comprehensive and accurate abuse contact information for every IP address worldwide. Access essential data fields such as email addresses, postal/ZIP codes, cities, states, countries, names, networks, and phone numbers for abuse contacts. Harness the power of our user-friendly API to streamline reporting and safeguard the internet."
        service={abuseService}
        examples={['', '142.44.241.192', '162.144.233.16', '159.89.49.172']}
      />
      <Feedback
        name="Sophia Hamilton"
        position="Senior Network Security Analyst"
        feedback="Utilizing Spyskey's Abuse Contact Data for IP Addresses has been a game-changer for our organization. As a Senior Network Security Analyst, it's crucial for me to have accurate and up-to-date information on abuse contacts to ensure a swift response to any potential threats. Spyskey has not only streamlined our reporting process but also significantly improved our efficiency in handling IP misuse incidents. I wholeheartedly recommend their service to anyone seeking a reliable and user-friendly solution for addressing internet safety concerns."
        avatar="/feedbacks/Senior Network Security Analyst.jpg"
      />
      <ServiceStatistic
        features={[
          { title: '24H', description: 'Actualization time' },
          { title: '99.7%', description: 'Accuracy' },
          { title: '99.4%', description: 'Coverage' },
          { title: '~100ms', description: 'Latency' },
        ]}
      />
      <Advantages
        title={`Accurate & low-latency\nAbuse contact data`}
        description={`Discover Spyskey's cutting-edge Abuse Contact API, your go-to source for precise and comprehensive abuse contact information. With our innovative technology, we deliver unparalleled access to essential data for every IP address, empowering you to tackle online security challenges effectively. Experience the efficiency and reliability of Spyskey's industry-leading API, and elevate your internet safety initiatives to new heights.`}
        count={24}
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
      <FAQ topic="Abuse" />
      <Contact />
      <Partners
        title={
          'Globally-renowned organizations rely \non our top-tier APIs for their business needs.'
        }
      />
      <GetStarted text="Experience our Abuse Contact API service with a 7-day trial, no credit card required." />
    </>
  )
}

export default LandingAbuse
