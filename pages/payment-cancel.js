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

export default function PaymentCancelPage() {
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
        title: 'Cancel payment | Spyskey',
      })}
      <Layout animation={false}>
        <Content>
          <Payment
            details={orderDetails}
            bottomSlot={
              <Link href={routes.upgrade}>
                <Button>Try again</Button>
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
`
