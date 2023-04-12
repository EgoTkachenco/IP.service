import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import { useMetadataRenderer } from '@/hooks'
import BillingStore from '@/store/BillingStore'
import PlansStore from '@/store/PlansStore'
import { serverSideSecuredRoute } from '@/utils'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import routes from '@/constants/routes'
const BillingUpgrade = dynamic(
  () => import('@/components/views/Billing/Upgrade'),
  {
    loading: () => '',
    ssr: false,
  }
)

const Upgrade = observer(() => {
  const renderMetadata = useMetadataRenderer()
  const router = useRouter()
  const { customPlanOptions, plans } = PlansStore
  const { currentPlan, setUserPlan, setUserCustomPlan } = BillingStore
  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout animation={false}>
        <BillingLayout>
          <BillingUpgrade
            currentPlan={currentPlan}
            customPlan={customPlanOptions}
            plans={plans}
            setUserPlan={(plan, term) =>
              setUserPlan(plan, term).then(() => router.push(routes.billing))
            }
            setCustomPlan={(options, term) => setUserCustomPlan(options, term)}
          />
        </BillingLayout>
      </Layout>
    </>
  )
})

export default Upgrade

export const getServerSideProps = serverSideSecuredRoute
