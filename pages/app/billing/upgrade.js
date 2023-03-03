import Layout from '@/components/layout/AppLayout'
import BillingLayout from '@/components/views/Billing/Layout'
import BillingUpgrade from '@/components/views/Billing/Upgrade'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'

export default function Upgrade() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <BillingLayout>
          <BillingUpgrade />
        </BillingLayout>
      </Layout>
    </>
  )
}

export const getServerSideProps = serverSideSecuredRoute
