import Layout from '@/components/landing/layout/Layout'
import { useMetadataRenderer } from '@/hooks'
import { Flex, Button, H3 } from '@/core'
import styled from 'styled-components'
import Payment from '@/components/reusable/Payment'
import { getOrderDetails } from '@/utils/api'
import Link from 'next/link'
import routes from '@/constants/routes'
import Script from 'next/script'
import { getCookieToken } from '@/utils'
import { useEffect } from 'react'
import { onPurchase } from '@/utils/ga'

export default function PaymentSuccessPage({ order, orderDetails }) {
  const renderMetadata = useMetadataRenderer()
  useEffect(() => {
    const term_key = orderDetails.term === 'month' ? 'Monthly' : 'Yearly'
    const price_key =
      orderDetails.term === 'month' ? 'month_price' : 'year_price'
    const name_key = orderDetails.plan
    onPurchase({
      transaction_id: order, // сюди має динамічно підставлятись id транзакції
      affiliation: `${name_key} ${term_key}`, // В це поле має підтягуватись назва тарифу з урахуванням терміну підписки або список послуг, які клієнт обрав у кастомному тарифі
      value: orderDetails.total,
      tax: '0',
      shipping: '0',
      currency: '‎USD',
      // coupon: "SALE", // дані про купони на знижку чи промо-код (якщо використовуються)
      //це блок для переліку декількох послуг в кастомному тарифі
      items:
        orderDetails.plan === 'Custom'
          ? orderDetails.options.map((option) => ({
              item_name: option.name,
              price: option[price_key],
            }))
          : [],
    })
  }, [])

  return (
    <>
      {renderMetadata({
        title: 'Success payment | Spyskey',
      })}
      {orderDetails && <PaymentConversionMeta order={orderDetails} />}
      <Layout animation={false}>
        <Content>
          {orderDetails ? (
            <Payment
              details={orderDetails}
              isSuccess
              bottomSlot={
                <Link href={routes.app}>
                  <Button>Go home</Button>
                </Link>
              }
            />
          ) : (
            <H3 color="dark">Payment not found</H3>
          )}
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
    props: { order, orderDetails },
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
    'Standard-year': 'AW-11176276843/gqJcCI7_gagYEOvmodEp',
    'Standard-month': 'AW-11176276843/eAhkCIX_gagYEOvmodEp',
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
