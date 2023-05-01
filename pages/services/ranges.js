import Layout from '@/components/landing/layout/Layout'
import LandingRanges from '@/components/landing/LandingRanges'
import { useMetadataRenderer } from '@/hooks'

export default function RangesService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Ranges API | Spyskey',
        description:
          'Our IP Ranges API provides accurate and up-to-date data on IP address ranges for companies worldwide. Enhance your security and streamline your processes with our easy-to-use tool.',
        schema: 'faq',
        faqTopic: 'Ranges',
      })}
      <Layout>
        <LandingRanges />
      </Layout>
    </>
  )
}
