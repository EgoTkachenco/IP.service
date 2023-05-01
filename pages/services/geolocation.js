import Layout from '@/components/landing/layout/Layout'
import LandingGeolocation from '@/components/landing/LandingGeolocation'
import { useMetadataRenderer } from '@/hooks'

export default function GeolocationService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Geolocation API Tool | Spyskey',
        description:
          'Get accurate location data for your website visitors with our IP geolocation API. Our easy-to-use tool provides real-time data to improve your business decisions. Try it today!',
        schema: 'faq',
        faqTopic: 'Geolocation',
      })}
      <Layout>
        <LandingGeolocation />
      </Layout>
    </>
  )
}
