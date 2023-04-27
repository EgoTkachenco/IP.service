import Main from './blocks/Main'
import Feedback from './blocks/Feedback'
import AdvantagesSmall from './blocks/AdvantagesSmall'
import CompanyAPIUsecases from './blocks/CompanyAPIUsecases'
import Contact from './blocks/Contact'
import FAQ from './blocks/FAQ'
import Partners from './blocks/Partners'
import GetStarted from './blocks/GetStarted'
import Products from './blocks/Products'
import ServiceStatistic from './blocks/ServiceStatistic'
import BussinessMap from './blocks/BussinessMap'

import { companyService } from '@/utils/api'

const LandingCompany = () => {
  return (
    <>
      <Main
        logo="/services-logo/company.svg"
        title="IP to Company API"
        description="Our API offers customers a fresh perspective on website traffic by providing firmographics data about the companies responsible for the IP traffic."
        service={companyService}
        advanced={true}
      />
      <Feedback
        name="Olivia Washington"
        position="Marketing Director"
        feedback="As a marketer, I'm always looking for ways to better understand my website's traffic and identify potential new customers. Spyskey's IP to Company API has been a game-changer in this regard, providing valuable firmographics data on the companies behind the IP traffic. With Spyskey's help, I'm able to tailor my marketing efforts to better reach those companies and their needs. The API is user-friendly, reliable, and accurate, and has saved me a lot of time and effort. I highly recommend Spyskey's IP to Company API to anyone looking for a powerful tool to enhance their marketing strategy and boost business growth."
        avatar="/feedbacks/Marketing Director.jpg"
      />
      <ServiceStatistic
        features={[
          { title: '50M+', description: 'Companies' },
          { title: '766M+', description: 'Ip ranges' },
          { title: '3+', description: 'Data types' },
          { title: '86%', description: 'Precision' },
        ]}
      />
      <AdvantagesSmall
        title={'Fast and accurate IP to company API.'}
        description={`Unlike our competitors who rely on WHOIS information that includes mostly irrelevant ISP services, we have developed a cutting-edge technology that provides highly accurate data on the companies visiting your website. See for yourself the precision of our unique technology.`}
        count={40}
        features={[
          { icon: 'navigation', name: 'Domain name' },
          { icon: 'edit', name: 'Company name' },
          { icon: 'city', name: 'Company type' },
        ]}
      />
      <CompanyAPIUsecases />
      <BussinessMap />
      <Products />
      <FAQ topic="Company" />
      <Contact />
      <Partners
        title={
          'Our APIs are trusted by industry-leading \ncompanies worldwide.'
        }
      />
      <GetStarted text="We provide a credit card-free 7-day trial period for our IP to company API service." />
    </>
  )
}

export default LandingCompany
