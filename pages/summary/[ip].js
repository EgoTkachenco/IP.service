import Layout from '@/components/landing/layout/Layout'
import Summary from '@/components/landing/summary/Summary'
import { useMetadataRenderer } from '@/hooks'
import { getAllService, validateASN } from '@/utils'

export default function SummaryPage(props) {
  const renderMetadata = useMetadataRenderer()
  const { ip } = props.data
  const isASN = validateASN(ip)
  const organization =
    (props.data?.asn?.organisation &&
      props.data?.asn?.organisation['org-name']) ||
    (props.data?.whois?.organisation &&
      props.data?.whois?.organisation['org-name'])
  return (
    <>
      {renderMetadata({
        title: !isASN
          ? `${ip} IP Address Detail | Spyskey IP network tools`
          : `${ip} ${organization} details | Spyskey`,
        description: `${ip} ${organization} - IP Address location, domain information and network tools.`,
        schema: 'faq',
        faqTopic: 'Summary',
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
