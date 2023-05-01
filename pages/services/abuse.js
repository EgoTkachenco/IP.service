import Layout from '@/components/landing/layout/Layout'
import LandingAbuse from '@/components/landing/LandingAbuse'
import { useMetadataRenderer } from '@/hooks'

export default function AbuseService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Abuse Contact Data for IP Addresses | Spyskey',
        description:
          'Protect your network from abuse with our tool for retrieving abuse contact data for IP addresses. Stay compliant and safeguard your business reputation.',
        schema: 'faq',
        faqTopic: 'Abuse',
      })}
      <Layout>
        <LandingAbuse />
      </Layout>
    </>
  )
}
