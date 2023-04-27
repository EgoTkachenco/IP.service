import Main from './blocks/Main'
import Feedback from './blocks/Feedback'
import AdvantagesSmall from './blocks/AdvantagesSmall'
import ReverseAPIUsecases from './blocks/ReverseAPIUsecases'
import Contact from './blocks/Contact'
import FAQ from './blocks/FAQ'
import Partners from './blocks/Partners'
import GetStarted from './blocks/GetStarted'
import Products from './blocks/Products'
import ServiceStatistic from './blocks/ServiceStatistic'

import { reverseService } from '@/utils/api'

const LandingReverse = () => {
  return (
    <>
      <Main
        logo="/services-logo/reverse.svg"
        title="Hosted Domains API"
        description="Our Hosted Domains API, alternatively referred to as the Reverse IP API, delivers an extensive and detailed list of domains that share a single IP address. This valuable information enables users to gain insights into the various websites hosted on a particular server or IP address."
        service={reverseService}
        examples={['', '8.8.8.8', '142.251.32.46', '104.16.133.229']}
      />
      <Feedback
        name="Emily Rodriguez"
        position="Digital Marketing Manager"
        feedback="As a Digital Marketing Manager, I've found Spyskey's Hosted Domains API service to be invaluable in identifying competitors' websites on shared hosting. This insight has empowered us to make informed decisions and optimize our marketing strategies. I highly recommend Spyskey for anyone seeking to enhance their digital marketing efforts."
        avatar="/feedbacks/Digital Marketing Manager.jpg"
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
