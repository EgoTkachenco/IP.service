import Layout from '@/components/landing/layout/Layout'
import { useMetadataRenderer } from '@/hooks'
import { Flex, H2 } from '@/core'
import styled from 'styled-components'

export default function PaymentCancelPage() {
  const renderMetadata = useMetadataRenderer()

  return (
    <>
      {renderMetadata({
        title: 'Cancel payment | Spyskey',
      })}
      <Layout animation={false}>
        <Content>
          <H2 as="p" color="dark">
            Payment cancel
          </H2>
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
