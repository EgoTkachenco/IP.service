import Layout from '@/components/landing/layout/Layout'
import LandingWhois from '@/components/landing/LandingWhois'
import { useMetadataRenderer } from '@/hooks'

export default function WhoisService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Whois API',
        description: 'IP Whois API',
      })}
      <Layout>
        <LandingWhois />
      </Layout>
    </>
  )
}
