import Layout from '@/components/landing/layout/Layout'
import FAQ from '@/components/landing/FAQ'
import { useMetadataRenderer } from '@/hooks'

export default function FAQPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'Help Center | Spyskey',
        description:
          'Help Center: our common questions and support pages provide everything you need to know about our products and services. ',
      })}
      <Layout>
        <FAQ />
      </Layout>
    </>
  )
}
