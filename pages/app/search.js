import Layout from '@/components/layout/AppLayout'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'
import dynamic from 'next/dynamic'
const SearchView = dynamic(() => import('@/components/views/Search'), {
  loading: () => '',
  ssr: false,
})

export default function Search() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <SearchView />
      </Layout>
    </>
  )
}

export const getServerSideProps = serverSideSecuredRoute
