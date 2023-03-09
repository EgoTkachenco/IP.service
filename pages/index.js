import Layout from '@/components/landing/layout/Layout'
import LandingGeolocation from '@/components/landing/LandingGeolocation'
import { useMetadataRenderer } from '@/hooks'

export default function LandingPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <LandingGeolocation />
      </Layout>
    </>
  )
}
