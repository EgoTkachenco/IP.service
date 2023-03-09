import Layout from '@/components/landing/layout/Layout'
import LandingReverse from '@/components/landing/LandingReverse'
import { useMetadataRenderer } from '@/hooks'

export default function ReverseService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Reverse IP API',
        description: 'Reverse IP API',
      })}
      <Layout>
        <LandingReverse />
      </Layout>
    </>
  )
}
