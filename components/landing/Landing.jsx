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
        title="The trusted source for IP address data"
        description="Accurate IP address data that keeps pace with secure, specific, and forward-looking use cases."
        alignContent="center"
      />
      <Partners />
      <ServicesStatistic />
      <Services />
      <EnterpriseServices />
      <Solutions />
      <Contact />
    </>
  )
}

export default Landing
