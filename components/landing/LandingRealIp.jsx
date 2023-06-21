import Main from './blocks/Main'
import Feedback from './blocks/Feedback'
import AdvantagesSmall from './blocks/AdvantagesSmall'
import RealIPUsecases from './blocks/RealIPUsecases'
import Contact from './blocks/Contact'
import FAQ from './blocks/FAQ'
import Partners from './blocks/Partners'
import GetStarted from './blocks/GetStarted'
import Products from './blocks/Products'
import ServiceStatistic from './blocks/ServiceStatistic'

import { privacyService } from '@/utils/api'

const LandingRealIp = () => {
  return (
    <>
      <Main
        logo="/services-logo/real-ip.svg"
        title="Uncover real IP address"
        description="Discover the hidden truth with Spyskey's unprecedented service in the world. Simply provide an IP address and User-Agent from a device's browser to pierce the veil of digital anonymity. Our service operates in real-time, offering high success rates in revealing a visitor's genuine IP. Don't let misleading IP addresses confound your security or business insights any longer; empower your digital decision-making with us."
        service={privacyService}
        examples={['', '64.225.8.118', '100.2.45.164', '192.169.249.16']}
      />
      <Feedback
        name="Joshua Barnes"
        position="Director of Cybersecurity"
        feedback="My team faced a major hurdle with masked IP addresses. The ambiguity they brought impacted our security infrastructure and decision-making process. That's when we turned to Spyskey's 'Uncover Real IP Address' service. The real-time revelation of true IP addresses was a game-changer for us. This tool didn't just help us enhance our security, but it also provided us with vital insights that allowed us to make better-informed decisions. I would highly recommend Spyskey's service to anyone needing precision IP intelligence - it truly brings clarity in the fog of digital anonymity."
        avatar="/feedbacks/Director of Cybersecurity.jpg"
      />
      <ServiceStatistic
        features={[
          { title: 'Real-time', description: 'Actualization time' },
          { title: '95%', description: 'Accuracy' },
          { title: '47M ', description: 'Request/D' },
          { title: '100ms', description: 'Latency' },
        ]}
      />
      <AdvantagesSmall
        title={`Unique service that solves many problems`}
        description="Our team has been working extremely hard to create an unbelievable technology that can't be found anywhere else and has almost unlimited potential for all concerned with cybersecurity. Right now it is possible to learn real IP addresses of around 50% of all those who try to hide it. Enjoy it."
        count={1.4}
        features={[{ icon: 'done', name: 'Real IP' }]}
      />
      <RealIPUsecases />
      <Products />
      <FAQ topic="Real IP" />
      <Contact />
      <Partners
        title={'Industry-leading companies \naround the world trust our APIs'}
      />
      <GetStarted text="Discover the power of our Privacy Detection API with a risk-free 7-day trial - no credit card required. Experience enhanced security firsthand." />
    </>
  )
}

export default LandingRealIp
