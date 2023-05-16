import Layout from '@/components/landing/layout/Layout'
import Summary from '@/components/landing/Summary'
import { useMetadataRenderer } from '@/hooks'

export default function ContactPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'My IP address | Spyskey',
      })}
      <Layout>
        <Summary />
      </Layout>
    </>
  )
}
