import Layout from '@/components/landing/layout/Layout'
import { getRangeList } from '@/components/landing/ips/utils'
import { useMetadataRenderer } from '@/hooks'
import List from '@/components/landing/ips/List'

const IPSPage = ({ ranges }) => {
  const renderMetadata = useMetadataRenderer([])
  return (
    <>
      {renderMetadata({
        title: 'Full list of IP address ranges | Spyskey',
      })}
      <Layout>
        <List data={ranges} />
      </Layout>
    </>
  )
}

export default IPSPage

export const getServerSideProps = () => {
  const ranges = getRangeList('', [104, 172])
  return { props: { ranges } }
}
