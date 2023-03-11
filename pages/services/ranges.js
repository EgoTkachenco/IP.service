import Layout from '@/components/landing/layout/Layout'
import LandingRanges from '@/components/landing/LandingRanges'
import { useMetadataRenderer } from '@/hooks'

export default function RangesService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Ranges API',
        description: 'IP Ranges API',
      })}
      <Layout>
        <LandingRanges />
      </Layout>
    </>
  )
}
