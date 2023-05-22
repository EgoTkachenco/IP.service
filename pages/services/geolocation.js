import Layout from '@/components/landing/layout/Layout'
import LandingGeolocation from '@/components/landing/LandingGeolocation'
import { useMetadataRenderer } from '@/hooks'

export default function GeolocationService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title:
          'IP Address Lookup: Geolocate the Location of an IP Address | Spyskey',
        description:
          'Discover your public IPv4 or IPv6 address and its corresponding location. Retrieve the geolocation details of your IP address, including latitude, longitude, city, region, and country.',
        schema: 'faq',
        faqTopic: 'Geolocation',
      })}
      <Layout>
        <LandingGeolocation />
      </Layout>
    </>
  )
}
