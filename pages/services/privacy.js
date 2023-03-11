import Layout from '@/components/landing/layout/Layout'
import LandingPrivacy from '@/components/landing/LandingPrivacy'
import { useMetadataRenderer } from '@/hooks'

export default function PrivacyService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Privacy Detection API',
        description: 'Privacy Detection API',
      })}
      <Layout>
        <LandingPrivacy />
      </Layout>
    </>
  )
}
