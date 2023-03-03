import Landing from '@/components/landing/Landing'
import { useMetadataRenderer } from '@/hooks'
import { isAuthorized } from '@/utils'

export default function LandingPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Landing />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const isLogged = isAuthorized(ctx)
  return {
    props: { isLogged },
  }
}
