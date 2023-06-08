import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import { useMetadataRenderer } from '@/hooks'
import BillingStore from '@/store/BillingStore'
import PlansStore from '@/store/PlansStore'
import { serverSideSecuredRoute } from '@/utils'
import { observer } from 'mobx-react-lite'
import dynamic from 'next/dynamic'
const BillingSubscription = dynamic(
  () => import('@/components/views/Billing/Subscription'),
  {
    loading: () => '',
    ssr: false,
  }
)

const Billing = observer(() => {
  const renderMetadata = useMetadataRenderer()
  const { plans } = PlansStore
  const { currentPlan, isFreePlan, setUserPlan, switchToYear } = BillingStore

  return (
    <>
      {renderMetadata({
        title: 'Spyskey',
        description: 'Spyskey',
      })}
      <Layout animation={false}>
        <BillingLayout>
          <BillingSubscription
            isFreePlan={isFreePlan}
            currentPlan={currentPlan}
            plans={plans}
            upgradeToBasic={(plan, term) => setUserPlan(plan, term)}
            switchToYear={switchToYear}
          />
        </BillingLayout>
      </Layout>
    </>
  )
})

export default Billing

export const getServerSideProps = serverSideSecuredRoute
