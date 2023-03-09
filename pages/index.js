import Layout from '@/components/landing/layout/Layout'
import Landing from '@/components/landing/Landing'
import { useMetadataRenderer } from '@/hooks'

export default function LandingPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <Landing />
      </Layout>
    </>
  )
}
