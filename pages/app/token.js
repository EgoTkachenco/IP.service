import Layout from '@/components/layout/AppLayout'
import Animation from '@/components/reusable/Animation'
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
      <TokenView />
    </>
  )
}

Token.getLayout = (page) => (
  <Layout>
    <Animation key="token">{page}</Animation>
  </Layout>
)
