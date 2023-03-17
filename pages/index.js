import Layout from '@/components/landing/layout/Layout'
import Landing from '@/components/landing/Landing'
import { useMetadataRenderer } from '@/hooks'

export default function LandingPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Information by IP Address | Spyskey',
        description: 'Accurate IP address data. We provide a lot of main tools for checking IP address privacy, security, DNS and WHOIS data',
      })}
      <Layout>
        <Landing />
      </Layout>
    </>
  )
}
