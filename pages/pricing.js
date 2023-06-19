import Layout from '@/components/landing/layout/Layout'
import Pricing from '@/components/landing/Pricing'
import { useMetadataRenderer } from '@/hooks'
import BillingStore from '@/store/BillingStore'
import PlansStore from '@/store/PlansStore'
import { onProductShow } from '@/utils/ga'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const PricingPage = observer(({ plans }) => {
  const renderMetadata = useMetadataRenderer([])
  const { customPlanOptions, savePlans, loadCustomPlanOptions } = PlansStore
  const { currentPlan, setUserPlan, setUserCustomPlan } = BillingStore
  // Plans hydration to store
  useEffect(() => savePlans(plans), [plans])

  useEffect(() => {
    loadCustomPlanOptions()
  }, [])
  useEffect(() => {
    onProductShow()
  }, [])

  return (
    <>
      {renderMetadata({
        title: 'Real Pricing to Get Accurate IP Data | Spyskey',
        description:
          'Find the perfect plan for your needs with our IP Address Data API pricing options. Get accurate and up-to-date data on IP addresses to streamline your business. Choose your plan now!',
        plans,
        schema: 'plans-list',
      })}
      <Layout>
        <Pricing
          currentPlan={currentPlan}
          plans={plans}
          customPlan={customPlanOptions}
          onPlanChange={setUserPlan}
          setCustomPlan={setUserCustomPlan}
        />
      </Layout>
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
