import Layout from '@/components/layout/AppLayout'
import Animation from '@/components/reusable/Animation'
import HomeView from '@/components/views/Home'
import { useMetadataRenderer } from '@/hooks'

export default function Home() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Layout>
        <Animation key="home">
          <HomeView />
        </Animation>
      </Layout>
    </>
  )
}
