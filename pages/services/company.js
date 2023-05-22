import Layout from '@/components/landing/layout/Layout'
import LandingCompany from '@/components/landing/LandingCompany'
import { useMetadataRenderer } from '@/hooks'

export default function CompanyService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Address Company Lookup: IP to Company API | Spyskey',
        description:
          'Our IP WHOIS Lookup tool rapidly retrieves the WHOIS information for a given IP. Simply enter an IP address to determine the organization or individual associated with it. The tool also displays additional details such as country, ISP, address, contact information, and more.',
        schema: 'faq',
        faqTopic: 'Company',
      })}
      <Layout>
        <LandingCompany />
      </Layout>
    </>
  )
}
