import Main from './blocks/Main'
import Feedback from './blocks/Feedback'
import AdvantagesSmall from './blocks/AdvantagesSmall'
import CarrierInfo from './blocks/CarrierAPIUsecases'
import Contact from './blocks/Contact'
import FAQ from './blocks/FAQ'
import Partners from './blocks/Partners'
import GetStarted from './blocks/GetStarted'
import Products from './blocks/Products'
import ServiceStatistic from './blocks/ServiceStatistic'

import { carrierService } from '@/utils/api'

const LandingCarrier = () => {
  return (
    <>
      <Main
        logo="/services-logo/carrier.svg"
        title="Carrier Detection Mobile"
        reverseTitle
        description="In the mobile era, smartphones and tablets reign as top internet traffic sources. Spyskey's API identifies carrier information from mobile IP addresses. Our database contains essential details such as carrier name, country code, and network code. Our platform is a go-to resource for businesses, developers, and researchers in the mobile and telecommunications industries."
        service={carrierService}
        examples={['', '31.61.246.249', '172.58.218.0']}
      />
      <Feedback
        name="Brandon Martinez"
        position="Mobile App Developer"
        feedback="Spyskey's Mobile Carrier Detection API is a game-changer in the telecommunications industry. As a mobile app developer, I understand the importance of accurate carrier information, and Spyskey's platform provides just that. The API's ability to identify carrier information from IP addresses makes it incredibly convenient and reliable for businesses and developers in the mobile industry. With smartphones and tablets dominating internet traffic, this tool is essential for anyone in need of mobile-related information. I highly recommend Spyskey's Mobile Carrier Detection API for anyone looking to develop new products or services in the mobile industry."
        avatar="/feedbacks/Mobile App Developer.jpg"
      />
      <ServiceStatistic
        features={[
          { title: '24H', description: 'Actualization time' },
          { title: '97.3%', description: 'Coverage' },
          { title: '99.8%', description: 'Accuracy' },
          { title: '~100ms', description: 'Latency' },
        ]}
      />
      <AdvantagesSmall
        title={'Find mobile device user information.'}
        description={`Identifying mobile users through their IP addresses is a highly reliable method compared to other commonly used techniques like reading the browser's user-agent. With regular updates at least once per month, our mobile network IP data is readily available through an API endpoint or direct download. Gain access to this reliable information today.`}
        count={44}
        features={[
          { icon: 'done', name: 'MCC' },
          { icon: 'edit', name: 'Name' },
          { icon: 'done', name: 'MNC' },
        ]}
        contentWidth="525px"
      />
      <CarrierInfo />
      <Products />
      <FAQ topic="Carrier" />
      <Contact />
      <Partners
        title={'Industry-leading companies \n around the world trust our APIs'}
      />
      <GetStarted text="We provide a credit card-free 7-day trial period for our Mobile Carrier Detection API service." />
    </>
  )
}

export default LandingCarrier
