import Layout from '@/components/landing/layout/Layout'
import LandingASN from '@/components/landing/LandingASN'
import { useMetadataRenderer } from '@/hooks'

export default function ASNService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'ASN API',
        description: 'ASN API',
      })}
      <Layout>
        <LandingASN />
      </Layout>
    </>
  )
}
