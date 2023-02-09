import Layout from '@/components/layout/AppLayout'
import BillingView from '@/components/views/Billing'
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
      <Layout>
        <BillingView>
          <BillingSubscription />
        </BillingView>
      </Layout>
    </>
  )
}
