import Layout from '@/components/landing/layout/Layout'
import LandingAbuse from '@/components/landing/LandingAbuse'
import { useMetadataRenderer } from '@/hooks'

export default function AbuseService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Abuse Check: IP Reputation Lookup History | Spyskey',
        description:
          'Spyskey: Check IP address reputation to lookup threats or SPAM issues along with risk scoring. Lookup detailed IP reputation history with leading IP address intelligence.',
        schema: 'faq',
        faqTopic: 'Abuse',
      })}
      <Layout>
        <LandingAbuse />
      </Layout>
    </>
  )
}
