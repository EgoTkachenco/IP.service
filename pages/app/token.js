import Layout from '@/components/layout/AppLayout'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'
import dynamic from 'next/dynamic'
const TokenView = dynamic(() => import('@/components/views/Token'), {
  loading: () => '',
  ssr: false,
})

export default function Token() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'Spyskey',
        description: 'Spyskey',
      })}
      <Layout>
        <TokenView />
      </Layout>
    </>
  )
}

export const getServerSideProps = serverSideSecuredRoute
