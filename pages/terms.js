import Layout from '@/components/landing/layout/Layout'
import TermsOfService from '@/components/landing/TermsOfService'
import { useMetadataRenderer } from '@/hooks'
import terms from '@/constants/terms'

export default function TermsPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'Terms of Service | Spyskey',
        description:
          'Review our Terms of Service to learn more about our policies and guidelines. Stay informed and protect your rights when using our products and services',
      })}
      <Layout animation={false}>
        <TermsOfService
          title="Terms of Service"
          data={terms}
          published="March 20, 2023"
        />
      </Layout>
    </>
  )
}
