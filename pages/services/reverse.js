import Layout from '@/components/landing/layout/Layout'
import LandingReverse from '@/components/landing/LandingReverse'
import { useMetadataRenderer } from '@/hooks'

export default function ReverseService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Reverse IP API. Domain Tools | Spyskey',
        description:
          'Our Reverse IP API allows you to discover all the domains hosted on a specific IP address. Improve your security and gain valuable insights with our easy-to-use tool.',
        schema: 'faq',
        faqTopic: 'Reverse',
      })}
      <Layout>
        <LandingReverse />
      </Layout>
    </>
  )
}
