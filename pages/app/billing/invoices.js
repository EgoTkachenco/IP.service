import Layout from '@/components/layout/AppLayout'
import BillingView from '@/components/views/Billing'
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
      <Layout>
        <BillingView>
            <BillingInvoices />
        </BillingView>
      </Layout>
    </>
  )
}
