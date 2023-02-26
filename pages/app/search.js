import Layout from '@/components/layout/AppLayout'
import Animation from '@/components/reusable/Animation'
import SearchView from '@/components/views/Search'
import { useMetadataRenderer } from '@/hooks'

export default function Search() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <SearchView />
    </>
  )
}

Search.getLayout = (page) => (
  <Layout>
    <Animation key="search">{page}</Animation>
  </Layout>
)
