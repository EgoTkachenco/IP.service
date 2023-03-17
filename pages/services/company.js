import Layout from '@/components/landing/layout/Layout'
import LandingCompany from '@/components/landing/LandingCompany'
import { useMetadataRenderer } from '@/hooks'

export default function CompanyService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'IP to Company API | Spyskey',
        description:
          'Identify all information about company by IP. Connect with your website visitors on a whole new level with our IP to Company API. ',
      })}
      <Layout>
        <LandingCompany />
      </Layout>
    </>
  )
}
