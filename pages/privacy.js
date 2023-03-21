import Layout from '@/components/landing/layout/Layout'
import TermsOfService from '@/components/landing/TermsOfService'
import { useMetadataRenderer } from '@/hooks'
import privacy from '@/constants/privacy'

export default function PrivacyPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'Privacy | Spyskey',
        description:
          'Review our Terms of Service to learn more about our policies and guidelines. Stay informed and protect your rights when using our products and services',
      })}
      <Layout animation={false}>
        <TermsOfService
          title="Privacy Policy"
          data={privacy}
          published="March 20, 2023"
        />
      </Layout>
    </>
  )
}
