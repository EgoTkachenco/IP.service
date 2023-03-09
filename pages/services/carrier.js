import Layout from '@/components/landing/layout/Layout'
import LandingCarrier from '@/components/landing/LandingCarrier'
import { useMetadataRenderer } from '@/hooks'

export default function CarrierService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Mobile Carrier Detection',
        description: 'Mobile Carrier Detection',
      })}
      <Layout>
        <LandingCarrier />
      </Layout>
    </>
  )
}
