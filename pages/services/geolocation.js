import Layout from '@/components/landing/layout/Layout'
import LandingGeolocation from '@/components/landing/LandingGeolocation'
import { useMetadataRenderer } from '@/hooks'

export default function GeolocationService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Geolocation API',
        description: 'Geolocation API',
      })}
      <Layout>
        <LandingGeolocation />
      </Layout>
    </>
  )
}
