import Main from './blocks/Main'
import Partners from './blocks/Partners'
import Contact from './blocks/Contact'
import EnterpriseServices from './blocks/EnterpriseServices'
import Solutions from './blocks/Solutions'
import Services from './blocks/Services'
import ServicesStatistic from './blocks/ServicesStatistic'
import Feedbacks from './blocks/Feedbacks'

import { allService } from '@/utils/api'
import { validateIP } from '@/utils'

const Landing = () => {
  return (
    <>
      <Main
        title="We're a key source for accurate IP, phone, and email data."
        description="Reliable data tailored to meet the demands of secure, targeted, and future-oriented applications."
        alignContent="center"
        service={(data) => {
          const params = {}
          if (validateIP(data)) params.ip = data
          else params.domain = data
          return allService(params)
        }}
        validation={() => {}}
        examples={['', '66.131.120.255', 'google.com', 'youtube.com']}
        placeholder="Search IP or Domain"
      />
      <Partners
        title={'Global industry leaders \nrely on our dependable APIs'}
      />
      <ServicesStatistic />
      <Services />
      <EnterpriseServices />
      <Feedbacks />
      <Solutions />
      <Contact />
    </>
  )
}

export default Landing
