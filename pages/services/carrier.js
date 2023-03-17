import Layout from '@/components/landing/layout/Layout'
import LandingCarrier from '@/components/landing/LandingCarrier'
import { useMetadataRenderer } from '@/hooks'

export default function CarrierService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'Mobile Carrier Detection | Spyskey',
        description:
          "Improve your mobile marketing strategy with our mobile carrier detection tool. Identify your users' carriers and optimize your messaging for maximum impact",
      })}
      <Layout>
        <LandingCarrier />
      </Layout>
    </>
  )
}
