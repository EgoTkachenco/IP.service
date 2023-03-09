import Layout from '@/components/landing/layout/Layout'
import FAQ from '@/components/landing/FAQ'
import { useMetadataRenderer } from '@/hooks'

export default function FAQPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <FAQ />
      </Layout>
    </>
  )
}
