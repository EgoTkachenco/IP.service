import Layout from '@/components/landing/layout/Layout'
import Docs from '@/components/landing/docs/Docs'
import { useMetadataRenderer } from '@/hooks'

export default function DocsPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'Docs | Spyskey',
      })}
      <Layout animation={false}>
        <Docs />
      </Layout>
    </>
  )
}
