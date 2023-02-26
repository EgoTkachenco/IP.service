import Layout from '@/components/layout/AppLayout'
import Animation from '@/components/reusable/Animation'
import ProfileView from '@/components/views/Profile'
import { useMetadataRenderer } from '@/hooks'

export default function Profile() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <ProfileView />
    </>
  )
}

Profile.getLayout = (page) => (
  <Layout>
    <Animation key="profile">{page}</Animation>
  </Layout>
)
