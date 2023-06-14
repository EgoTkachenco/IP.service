import Layout from '@/components/landing/layout/Layout'
import Summary from '@/components/landing/summary/Summary'
import { useMetadataRenderer } from '@/hooks'
import { getAllService } from '@/utils'
import { getIp } from '@/utils/api'

export default function SummaryPage(props) {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title: 'My IP address | Spyskey',
      })}
      <Layout>
        <Summary {...props} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  let ip = ''
  let data = null
  try {
    ip = await getIp()
    data = await getAllService(ip)
  } catch (error) {
    console.log(error.message)
  }

  return {
    props: {
      ip,
      data,
      isUserIp: true,
    },
  }
}
