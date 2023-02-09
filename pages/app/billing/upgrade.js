import Layout from '@/components/layout/AppLayout'
import BillingView from '@/components/views/Billing'
import BillingUpgrade from '@/components/views/Billing/Upgrade'
import { useMetadataRenderer } from '@/hooks'

export default function Upgrade() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <BillingView>
            <BillingUpgrade />
        </BillingView>
      </Layout>
    </>
  )
}
