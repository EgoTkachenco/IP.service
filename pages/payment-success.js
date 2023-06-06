import Layout from '@/components/landing/layout/Layout'
import { useMetadataRenderer } from '@/hooks'
import { Flex, Button } from '@/core'
import styled from 'styled-components'
import Payment from '@/components/reusable/Payment'
import { getOrderDetails } from '@/utils/api'
import Link from 'next/link'
import routes from '@/constants/routes'
import Script from 'next/script'
import { getCookieToken } from '@/utils'

export default function PaymentSuccessPage({ orderDetails }) {
  const renderMetadata = useMetadataRenderer()
  console.log(orderDetails)

  return (
    <>
      {renderMetadata({
        title: 'Success payment | Spyskey',
      })}
      <PaymentConversionMeta order={orderDetails} />
      {/* <!-- Event snippet for Paid conversion page --> */}
      {/* <Script strategy="beforeInteractive">
        {`gtag('event', 'conversion', {
						'send_to': 'AW-11176276843/9bIICIbazKMYEOvmodEp',
						'transaction_id': ''
					});`}
      </Script> */}
      {/* <!-- Event snippet for plans conversion --> */}
      {/* <Script strategy="beforeInteractive">
        {`gtag('event', 'conversion', {
						'send_to': 'AW-11176276843/9bIICIbazKMYEOvmodEp',
						'transaction_id': ''
					});`}
      </Script> */}
      <Layout animation={false}>
        <Content>
          <Payment
            details={orderDetails}
            isSuccess
            bottomSlot={
              <Link href={routes.app}>
                <Button>Go home</Button>
              </Link>
            }
          />
        </Content>
      </Layout>
    </>
  )
}

// load plans on server side
export async function getServerSideProps(context) {
  const { order } = context.query
  const token = getCookieToken(context)
  let orderDetails = null
  try {
    orderDetails = await getOrderDetails(order, token)
    orderDetails = orderDetails.data
  } catch (error) {
    console.log(error.message)
  }
  return {
    props: { orderDetails },
  }
}

const Content = styled(Flex)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 64px;
`

const PaymentConversionMeta = ({ order }) => {
  const period = order.term
  const plan = order.plan
  const total = order.total
  const eventIds = {
    'Basic-month': 'AW-11176276843/Rq5_CIL_gagYEOvmodEp',
    'Basic-year': 'AW-11176276843/v7EQCIv_gagYEOvmodEp',
    'Standart-year': 'AW-11176276843/gqJcCI7_gagYEOvmodEp',
    'Standart-month': 'AW-11176276843/eAhkCIX_gagYEOvmodEp',
    'Business-year': 'AW-11176276843/YFW_CImAgqgYEOvmodEp',
    'Business-month': 'AW-11176276843/aNxdCIj_gagYEOvmodEp',

    'Custom-month': 'AW-11176276843/RAFKCIyAgqgYEOvmodEp',
    'Custom-year': 'AW-11176276843/RAFKCIyAgqgYEOvmodEp',
  }
  const eventId = eventIds[plan + '-' + period]
  return (
    <>
      {/* <!-- Event snippet for Paid conversion page --> */}
      <Script strategy="beforeInteractive">
        {`gtag('event', 'conversion', {
						'send_to': 'AW-11176276843/9bIICIbazKMYEOvmodEp',
						'transaction_id': ''
					});`}
      </Script>
      {/* <!-- Event snippet for plans conversion --> */}
      {eventId && (
        <Script strategy="beforeInteractive">
          {`gtag('event', 'conversion', {
						'send_to': '${eventId}',
						'transaction_id': '',
						'value': ${total},
						'currency': 'USD',
					});`}
        </Script>
      )}
    </>
  )
}
