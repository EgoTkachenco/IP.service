import Layout from '@/components/layout/AppLayout'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'
import dynamic from 'next/dynamic'
const TokenView = dynamic(() => import('@/components/views/Token'), {
  loading: () => '',
  ssr: false,
})
import Animation from '@/components/reusable/Animation'

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

export const getServerSideProps = serverSideSecuredRoute
