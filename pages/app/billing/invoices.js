import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import { useMetadataRenderer } from '@/hooks'
import BillingStore from '@/store/BillingStore'
import { serverSideSecuredRoute } from '@/utils'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import routes from '@/constants/routes'
import { useEffect } from 'react'
import AuthStore from '@/store/AuthStore'
const BillingInvoices = dynamic(
  () => import('@/components/views/Billing/Invoices'),
  {
    loading: () => '',
    ssr: false,
  }
)

const Invoices = observer(() => {
  const renderMetadata = useMetadataRenderer()
  const router = useRouter()
  const {
    orders,
    reactivateUserPlan,
    currentPlan,
    loadOrders,
    changeAutoBilling,
    switchToYear,
    updateCardDetails,
  } = BillingStore
  const { user: profile } = AuthStore
  useEffect(() => {
    if (!orders) loadOrders()
  }, [])
  return (
    <>
      {renderMetadata({
        title: 'Spyskey',
        description: 'Spyskey',
      })}
      <Layout animation={false}>
        <BillingLayout>
          <BillingInvoices
            profile={profile}
            currentPlan={currentPlan}
            orders={orders}
            reactivate={() =>
              reactivateUserPlan().then(() => router.push(routes.billing))
            }
            changeAutoBilling={(value) => changeAutoBilling(value)}
            switchToYear={switchToYear}
            onCardDetailsUpdate={() => updateCardDetails()}
          />
        </BillingLayout>
      </Layout>
    </>
  )
})

export default Invoices

export const getServerSideProps = serverSideSecuredRoute
