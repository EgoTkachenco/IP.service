import Layout from '@/components/layout/AppLayout'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'
// import dynamic from 'next/dynamic'
// const HomeView = dynamic(() => import('@/components/views/Home'), {
//   loading: () => '',
//   ssr: false,
// })
import HomeView from '@/components/views/Home'

export default function Home() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <HomeView />
      </Layout>
    </>
  )
}

export const getServerSideProps = serverSideSecuredRoute
