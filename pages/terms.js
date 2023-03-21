import Layout from '@/components/landing/layout/Layout'
import TermsOfService from '@/components/landing/TermsOfService'
import { useMetadataRenderer } from '@/hooks'

export default function TermsPage({ terms }) {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'Terms of Service | Spyskey',
        description:
          'Review our Terms of Service to learn more about our policies and guidelines. Stay informed and protect your rights when using our products and services',
      })}
      <Layout animation={false}>
        <TermsOfService terms={terms} />
      </Layout>
    </>
  )
}
