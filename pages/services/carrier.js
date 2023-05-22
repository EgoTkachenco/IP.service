import Layout from '@/components/landing/layout/Layout'
import LandingCarrier from '@/components/landing/LandingCarrier'
import { useMetadataRenderer } from '@/hooks'

export default function CarrierService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Carrier Lookup Tool: Mobile Carrier Detection | Spyskey',
        description:
          "Using the IP address to identify mobile users provides a higher level of detection reliability compared to other common methods, such as reading their browser's user-agent.",
        schema: 'faq',
        faqTopic: 'Carrier',
      })}
      <Layout>
        <LandingCarrier />
      </Layout>
    </>
  )
}
