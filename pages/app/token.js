import Layout from '@/components/layout/AppLayout'
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
        <TokenView />
      </Layout>
    </>
  )
}
