import Layout from '@/components/layout/AppLayout'
import PageChangeAnimation from '@/components/reusable/PageChangeAnimation'
import TokenView from '@/components/views/Token'
import { useMetadataRenderer } from '@/hooks'

export default function Token() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <PageChangeAnimation>
          <TokenView />
        </PageChangeAnimation>
      </Layout>
    </>
  )
}
