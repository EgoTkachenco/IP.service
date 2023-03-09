import Layout from '@/components/landing/layout/Layout'
import LandingAbuse from '@/components/landing/LandingAbuse'
import { useMetadataRenderer } from '@/hooks'

export default function AbuseService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Abuse Contact Data for IP Addresses',
        description: 'Abuse Contact Data for IP Addresses',
      })}
      <Layout>
        <LandingAbuse />
      </Layout>
    </>
  )
}
