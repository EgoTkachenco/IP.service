import TermsOfService from '@/components/landing/TermsOfService'
import { useMetadataRenderer } from '@/hooks'

export default function TermsPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <TermsOfService />
    </>
  )
}
