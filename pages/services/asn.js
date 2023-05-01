import Layout from '@/components/landing/layout/Layout'
import LandingASN from '@/components/landing/LandingASN'
import { useMetadataRenderer } from '@/hooks'

export default function ASNService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP to ASN. Data | Spyskey',
        description:
          'Our IP to ASN tool allows you to easily identify the autonomous system number (ASN) associated with any IP address. Improve your network management and security today.',
        schema: 'faq',
        faqTopic: 'ASN',
      })}
      <Layout>
        <LandingASN />
      </Layout>
    </>
  )
}
