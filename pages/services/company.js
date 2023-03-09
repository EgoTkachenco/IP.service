import Layout from '@/components/landing/layout/Layout'
import LandingCompany from '@/components/landing/LandingCompany'
import { useMetadataRenderer } from '@/hooks'

export default function CompanyService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP to Company API',
        description: 'IP to Company API',
      })}
      <Layout>
        <LandingCompany />
      </Layout>
    </>
  )
}
