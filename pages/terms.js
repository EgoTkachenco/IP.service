import Layout from '@/components/landing/layout/Layout'
import TermsOfService from '@/components/landing/TermsOfService'
import { useMetadataRenderer } from '@/hooks'

export default function TermsPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout animation={false}>
        <TermsOfService />
      </Layout>
    </>
  )
}
