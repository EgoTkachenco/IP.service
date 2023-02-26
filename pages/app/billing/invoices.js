import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import BillingInvoices from '@/components/views/Billing/Invoices'
import { useMetadataRenderer } from '@/hooks'

export default function Invoices() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <BillingInvoices />
    </>
  )
}

Invoices.getLayout = (page) => (
  <Layout>
    <BillingLayout>{page}</BillingLayout>
  </Layout>
)
