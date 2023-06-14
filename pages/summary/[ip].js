import Layout from '@/components/landing/layout/Layout'
import Summary from '@/components/landing/summary/Summary'
import { useMetadataRenderer } from '@/hooks'
import { getAllService } from '@/utils'

export default function SummaryPage(props) {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'IP address summary | Spyskey',
      })}
      <Layout>
        <Summary {...props} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { ip } = ctx.params
  let data = null
  try {
    data = await getAllService(ip)
    if (data.whois?.length === 0) data = null
  } catch (error) {
    console.log(error.message)
  }
  return {
    props: {
      ip,
      data,
      isUserIp: false,
    },
  }
}
