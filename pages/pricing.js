import Pricing from '@/components/landing/Pricing'
import { useMetadataRenderer } from '@/hooks'
import PlansStore from '@/store/PlansStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const PricingPage = observer(({ plans }) => {
  const renderMetadata = useMetadataRenderer()
  // Plans hydration to store
  useEffect(() => PlansStore.savePlans(plans), [plans])
  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Pricing plans={plans} />
    </>
  )
})

export default PricingPage

// load plans on server side
export async function getServerSideProps(context) {
  const plans = await PlansStore.loadPlans()
  return {
    props: { plans },
  }
}
