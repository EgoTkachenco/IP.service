import Layout from '@/components/landing/layout/Layout'
import LandingWhois from '@/components/landing/LandingWhois'
import { useMetadataRenderer } from '@/hooks'

export default function WhoisService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Whois API. What Is My IP Address | Spyskey',
        description:
          'Get comprehensive and accurate data on any IP address with our IP Whois API. Improve your security and streamline your processes. My IP address information',
      })}
      <Layout>
        <LandingWhois />
      </Layout>
    </>
  )
}
