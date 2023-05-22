import Layout from '@/components/landing/layout/Layout'
import LandingASN from '@/components/landing/LandingASN'
import { useMetadataRenderer } from '@/hooks'

export default function ASNService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'WHOIS ASN Lookup: Check AS Numbers, IP to ASN | Spyskey',
        description:
          'Utilize our ANS Lookup tool to conduct an ANS WHOIS Lookup. Retrieve information on the assigned owner, location, contact details, and abuse reporting for any ASN.',
        schema: 'faq',
        faqTopic: 'ASN',
      })}
      <Layout>
        <LandingASN />
      </Layout>
    </>
  )
}
