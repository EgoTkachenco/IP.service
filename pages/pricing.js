import Pricing from '@/components/landing/Pricing'
import { useMetadataRenderer } from '@/hooks'
import PlansStore from '@/store/PlansStore'

export default function PricingPage({ plans }) {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Pricing plans={plans} />
    </>
  )
}

export async function getServerSideProps(context) {
  const plans = await PlansStore.loadPlans()
  return {
    props: { plans },
  }
}
