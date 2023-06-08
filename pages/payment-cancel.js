import Layout from '@/components/landing/layout/Layout'
import { useMetadataRenderer } from '@/hooks'
import { Flex, Button, H3 } from '@/core'
import styled from 'styled-components'
import Payment from '@/components/reusable/Payment'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getCanceledOrderDetails, getOrderDetails } from '@/utils/api'
import Link from 'next/link'
import routes from '@/constants/routes'

export default function PaymentCancelPage() {
  const renderMetadata = useMetadataRenderer()
  const [orderDetails, setOrderDetails] = useState(null)
  const router = useRouter()
  const { order } = router.query
  useEffect(() => {
    if (order) getOrderDetails(order).then((res) => setOrderDetails(res.data))
    // getCanceledOrderDetails(order)
  }, [order])

  return (
    <>
      {renderMetadata({
        title: 'Cancel payment | Spyskey',
      })}
      <Layout animation={false}>
        <Content>
          {orderDetails ? (
            <Payment
              details={orderDetails}
              bottomSlot={
                <Link href={routes.upgrade}>
                  <Button>Try again</Button>
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

const Content = styled(Flex)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 64px;
`
