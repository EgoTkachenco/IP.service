import dynamic from 'next/dynamic'

import Main from './blocks/Main'
import Partners from './blocks/Partners'

const Contact = dynamic(() => import('./blocks/Contact'), {
  loading: () => '',
  ssr: false,
})
const EnterpriseServices = dynamic(
  () => import('./blocks/EnterpriseServices'),
  {
    loading: () => '',
    ssr: false,
  }
)
const Solutions = dynamic(() => import('./blocks/Solutions'), {
  loading: () => '',
  ssr: false,
})
const Services = dynamic(() => import('./blocks/Services'), {
  loading: () => '',
  ssr: false,
})
const ServicesStatistic = dynamic(() => import('./blocks/ServicesStatistic'), {
  loading: () => '',
  ssr: false,
})
const Feedbacks = dynamic(() => import('./blocks/Feedbacks'), {
  loading: () => '',
  ssr: false,
})

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
