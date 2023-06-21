import Layout from '@/components/landing/layout/Layout'
import Summary from '@/components/landing/summary/Summary'
import { useMetadataRenderer } from '@/hooks'
import { getAllService } from '@/utils'
import { getIp } from '@/utils/api'
import { useEffect, useState } from 'react'

export default function SummaryPage() {
  const renderMetadata = useMetadataRenderer()
  const [state, setState] = useState({ ip: '', data: null })

  useEffect(() => {
    getIp()
      .then((ip) => {
        setState({ ip, data: null })
        return getAllService(ip)
      })
      .then((data) => setState({ ip: data.ip, data }))
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  return (
    <>
      {renderMetadata({
        title: 'My IP address | Spyskey',
        schema: 'faq',
        faqTopic: 'Summary',
      })}
      <Layout>
        <Summary ip={state.ip} data={state.data} isUserIp={true} />
      </Layout>
    </>
  )
}
