import Layout from '@/components/landing/layout/Layout'
import Landing from '@/components/landing/Landing'
import { useMetadataRenderer } from '@/hooks'

export default function LandingPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title:
          'Spyskey: Information by IP Address | Check Location of Your Public IP',
        description:
          'IP Address Lookup. Spyskey.com provides a free lookup tool to check the location of your IP Address. We offer a variety of essential tools for checking IP address privacy, security, DNS, and WHOIS data. Sign up for a free account today.',
      })}
      <Layout>
        <Landing />
      </Layout>
    </>
  )
}
