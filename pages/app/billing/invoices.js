import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'
import dynamic from 'next/dynamic'
const BillingInvoices = dynamic(
  () => import('@/components/views/Billing/Invoices'),
  {
    loading: () => '',
    ssr: false,
  }
)

export default function Invoices() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout animation={false}>
        <BillingLayout>
          <BillingInvoices />
        </BillingLayout>
      </Layout>
    </>
  )
}

export const getServerSideProps = serverSideSecuredRoute
