import AdminPanel from '@/components/admin/AdminPanel'
import { useMetadataRenderer } from '@/hooks'

export default function LandingPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'ADMIN',
      })}
      <AdminPanel />
    </>
  )
}
