import Layout from '@/components/landing/layout/Layout'
import { useMetadataRenderer } from '@/hooks'
import { Flex, Button } from '@/core'
import styled from 'styled-components'
import Payment from '@/components/reusable/Payment'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getOrderDetails } from '@/utils/api'
import Link from 'next/link'
import routes from '@/constants/routes'

export default function PaymentSuccessPage() {
  const renderMetadata = useMetadataRenderer()
  const [orderDetails, setOrderDetails] = useState(null)
  const router = useRouter()
  const { order } = router.query
  useEffect(() => {
    if (order) getOrderDetails(order).then((res) => setOrderDetails(res.data))
  }, [order])
  return (
    <>
      {renderMetadata({
        title: 'Success payment | Spyskey',
      })}
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

const Content = styled(Flex)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 64px;
`
