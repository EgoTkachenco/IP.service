import Layout from '@/components/landing/layout/Layout'
import Contact from '@/components/landing/Contact'
import { useMetadataRenderer } from '@/hooks'

export default function ContactPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'Contact us. Get in touch | Spyskey',
        description:
          "We'd love to hear from you! Contact us today to learn more about our products and services, get support, or provide feedback.",
      })}
      <Layout>
        <Contact />
      </Layout>
    </>
  )
}
