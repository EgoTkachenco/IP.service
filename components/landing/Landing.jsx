import Main from './blocks/Main'
import Partners from './blocks/Partners'
import Contact from './blocks/Contact'
import EnterpriseServices from './blocks/EnterpriseServices'
import Solutions from './blocks/Solutions'
import Services from './blocks/Services'
import ServicesStatistic from './blocks/ServicesStatistic'
import Feedbacks from './blocks/Feedbacks'

import { allService } from '@/utils/api'
import { validateIP, validateASN } from '@/utils'

const Landing = () => {
  return (
    <>
      <Main
        title="We're a key source for accurate IP, phone, and email data."
        description="Reliable data tailored to meet the demands of secure, targeted, and future-oriented applications."
        alignContent="center"
        service={(data) => allService({ ip: data })}
        validation={(data) => {
          const isIp = validateIP(data)
          const isASN = validateASN(data)
          console.log(data, isIp, isASN, !isIp && !isASN)
          if (!isIp && !isASN) return 'Invalid ip or asn'
          return null
        }}
        examples={['', '66.131.120.255', 'AS17741', '9999']}
        placeholder="Search IP or ASN"
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
