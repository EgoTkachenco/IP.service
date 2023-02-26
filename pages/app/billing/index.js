import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import BillingSubscription from '@/components/views/Billing/Subscription'
import { useMetadataRenderer } from '@/hooks'

export default function Billing() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <BillingSubscription />
    </>
  )
}

Billing.getLayout = (page) => (
  <Layout>
    <BillingLayout>{page}</BillingLayout>
  </Layout>
)
