import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'
import dynamic from 'next/dynamic'
const BillingUpgrade = dynamic(
  () => import('@/components/views/Billing/Upgrade'),
  {
    loading: () => '',
    ssr: false,
  }
)

export default function Upgrade() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout animation={false}>
        <BillingLayout>
          <BillingUpgrade />
        </BillingLayout>
      </Layout>
    </>
  )
}

export const getServerSideProps = serverSideSecuredRoute
