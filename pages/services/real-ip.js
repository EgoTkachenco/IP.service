import Layout from '@/components/landing/layout/Layout'
import LandingRealIp from '@/components/landing/LandingRealIp'
import { useMetadataRenderer } from '@/hooks'

export default function RealIpService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title:
          'Uncover Real IP Address with Spyskey: Real-Time, Accurate IP Detection Service',
        description:
          'ost your cybersecurity and business intelligence with Spyskey’s unprecedented service that uncovers real IP addresses. Experience real-time, accurate IP detection to enhance security, improve marketing analytics, aid in fraud prevention, and ensure legal compliance.',
        schema: 'faq',
        faqTopic: 'Real IP',
      })}
      <Layout>
        <LandingRealIp />
      </Layout>
    </>
  )
}
