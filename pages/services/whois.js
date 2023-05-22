import Layout from '@/components/landing/layout/Layout'
import LandingWhois from '@/components/landing/LandingWhois'
import { useMetadataRenderer } from '@/hooks'

export default function WhoisService() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      {renderMetadata({
        title:
          'IP WHOIS Lookup: Check the WHOIS IP Geolocation API | Geo IP Database',
        description:
          'Spyskey: Free IP Geolocation API and Accurate IP Database provides country, city, zip code, ISP data in REST JSON and XML format from any IPv4 and IPv6 Address.',
        schema: 'faq',
        faqTopic: 'Whois',
      })}
      <Layout>
        <LandingWhois />
      </Layout>
    </>
  )
}
