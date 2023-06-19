import Layout from '@/components/landing/layout/Layout'
import LandingRealIp from '@/components/landing/LandingRealIp'
import { useMetadataRenderer } from '@/hooks'

export default function RealIpService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Proxy & VPN detection API: VPN IP Address Check | Spyskey',
        description:
          'Conduct a complimentary VPN detection test to verify whether an IP address is connected through a VPN. Determine if any IP address is associated with a Virtual Private Network. Test any IP address linked to a VPN now.',
        schema: 'faq',
        faqTopic: 'Real IP',
      })}
      <Layout>
        <LandingRealIp />
      </Layout>
    </>
  )
}
