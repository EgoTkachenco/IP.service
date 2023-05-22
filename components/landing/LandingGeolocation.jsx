import Main from './blocks/Main'
import Feedback from './blocks/Feedback'
import Advantages from './blocks/Advantages'
import GeolocationAPIUsecases from './blocks/GeolocationAPIUsecases'
import Contact from './blocks/Contact'
import FAQ from './blocks/FAQ'
import Partners from './blocks/Partners'
import GetStarted from './blocks/GetStarted'
import Products from './blocks/Products'
import ServiceStatistic from './blocks/ServiceStatistic'

import { geolocationService } from '@/utils/api'

const LandingGeolocation = () => {
  return (
    <>
      <Main
        logo="/services-logo/geolocation.svg"
        title="IP Geolocation API"
        description="Leading businesses worldwide utilize Spyskey's top-tier IP geolocation data to enrich digital user experiences. Our fast, low-latency API empowers enhanced conversion rates and customer satisfaction. Experience seamless online journeys with Spyskey's unparalleled geolocation service."
        service={geolocationService}
        examples={['', '73.150.2.140', '192.168.1.100', '23.227.38.84']}
      />
      <Feedback
        name="Ethan Thompson"
        position="Senior Marketing Manager"
        feedback="Before implementing Spyskey's geolocation solution, our marketing efforts were hindered by inaccurate targeting and a lack of personalization. However, Spyskey's rapid, low-latency API provided us with precise location insights, enabling us to create tailored and engaging experiences. This has significantly improved our search engine rankings, boosted conversion rates, and elevated customer satisfaction. Spyskey's geolocation service is a must-have for businesses seeking to optimize their online presence and overcome localization challenges"
        avatar="/feedbacks/Senior Marketing Manager.jpg"
      />
      <ServiceStatistic
        features={[
          { title: '99.3%', description: 'Accuracy' },
          { title: '99.9%', description: 'Coverage' },
          { title: '~100ms', description: 'Latency' },
          { title: '9', description: 'Data points' },
        ]}
      />
      <Advantages
        title={`Ultra-Fast, Precise IP Geolocation Lookup`}
        description="Spyskey, your premier IP geolocation provider, excels in delivering pinpoint-accurate IP-to-location insights. Harness the power of our proprietary, constantly-updated geolocation database to elevate your digital strategy. Experience our cutting-edge GeoAPI, featuring comprehensive data sets for every IP, ensuring optimal targeting, personalization, and search engine visibility."
        count={58}
        features={[
          { icon: 'edit', name: 'Hostname' },
          { icon: 'communicate', name: 'Postal/zip code' },
          { icon: 'navigation', name: 'Region' },
          { icon: 'language', name: 'Languages' },
          { icon: 'currency', name: 'Currency' },
          { icon: 'flag', name: 'Country' },
          { icon: 'map', name: 'Location coordinates' },
          { icon: 'city', name: 'City' },
          { icon: 'clock', name: 'Time zone' },
          { icon: 'flag', name: 'Flag' },
        ]}
      />
      <GeolocationAPIUsecases />
      <Products />
      <FAQ topic="Geolocation" />
      <Contact />
      <Partners
        title={
          'World-class enterprises rely on \nour exceptional IP geolocation API'
        }
      />
      <GetStarted
        text={
          'Experience 50,000 complimentary IP geolocation lookups monthly with our risk-free trial. Register now – no credit card or hidden catches involved.'
        }
      />
    </>
  )
}

export default LandingGeolocation
