import Pricing from '@/components/landing/Pricing'
import { useMetadataRenderer } from '@/hooks'

export default function PricingPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Pricing />
    </>
  )
}
