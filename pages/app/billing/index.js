import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'
import dynamic from 'next/dynamic'
const BillingSubscription = dynamic(
  () => import('@/components/views/Billing/Subscription'),
  {
    loading: () => '',
    ssr: false,
  }
)

export default function Billing() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout animation={false}>
        <BillingLayout>
          <BillingSubscription />
        </BillingLayout>
      </Layout>
    </>
  )
}

export const getServerSideProps = serverSideSecuredRoute
