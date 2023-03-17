import Layout from '@/components/landing/layout/Layout'
import LandingPrivacy from '@/components/landing/LandingPrivacy'
import { useMetadataRenderer } from '@/hooks'

export default function PrivacyService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Privacy Detection API. VPN | Spyskey',
        description:
          'Our Privacy Detection API helps you identify potential privacy violations on your website, including VPN detection. Sign up for free',
      })}
      <Layout>
        <LandingPrivacy />
      </Layout>
    </>
  )
}
