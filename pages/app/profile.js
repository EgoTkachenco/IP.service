import Layout from '@/components/layout/AppLayout'
import { useMetadataRenderer } from '@/hooks'
import { serverSideSecuredRoute } from '@/utils'
import dynamic from 'next/dynamic'
const ProfileView = dynamic(() => import('@/components/views/Profile'), {
  loading: () => '',
  ssr: false,
})

export default function Profile() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <ProfileView />
      </Layout>
    </>
  )
}

export const getServerSideProps = serverSideSecuredRoute
