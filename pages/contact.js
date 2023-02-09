import Contact from '@/components/landing/Contact'
import { useMetadataRenderer } from '@/hooks'

export default function ContactPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Contact />
    </>
  )
}
