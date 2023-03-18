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

const Landing = () => {
  return (
    <>
      <Main
        title="We're a key source for accurate IP, phone, and email data."
        description="Reliable data tailored to meet the demands of secure, targeted, and future-oriented applications."
        alignContent="center"
      />
      <Partners
        title={'Global industry leaders \nrely on our dependable APIs'}
      />
      <ServicesStatistic />
      <Services />
      <EnterpriseServices />
      <Solutions />
      <Contact />
    </>
  )
}

export default Landing
