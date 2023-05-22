import Layout from '@/components/landing/layout/Layout'
import LandingReverse from '@/components/landing/LandingReverse'
import { useMetadataRenderer } from '@/hooks'

export default function ReverseService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title:
          'Reverse IP Lookup: Find Other Web Sites Hosted on a Web Server | Spyskey',
        description:
          'Reverse IP checker discovers the actual hostname associated with an IP address. Enter an IP to initiate a reverse lookup and find the corresponding hostname.',
        schema: 'faq',
        faqTopic: 'Reverse',
      })}
      <Layout>
        <LandingReverse />
      </Layout>
    </>
  )
}
