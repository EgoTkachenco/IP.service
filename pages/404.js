import styled from 'styled-components'
import { useMetadataRenderer } from '@/hooks'
import { Flex, H2, Button } from '@/core'
import { useRouter } from 'next/router'
import APIPreview from '@/components/reusable/APIPreview'
import Layout from '@/components/landing/layout/Layout'
import { allService } from '@/utils/api'
import { validateIP, validateASN } from '@/utils'

import NotFoundError from '@/components/landing/NotFoundError'

export default function ContactPage() {
  const renderMetadata = useMetadataRenderer()
  const router = useRouter()
  return (
    <>
      {renderMetadata({
        title: '404 | Spyskey',
        description: 'Page not exist',
      })}
      <Layout>
        <NotFoundError />
        {/* <Wrapper>
          <H2>404: Page not found</H2>

          <Flex direction="column">
            <APIPreview
              service={(data) => allService({ ip: data })}
              validation={(data) => {
                const isIp = validateIP(data)
                const isASN = validateASN(data)
                console.log(data, isIp, isASN, !isIp && !isASN)
                if (!isIp && !isASN) return 'Invalid ip or asn'
                return null
              }}
              examples={['', '66.131.120.255', 'AS17741', '9999']}
              placeholder="Search IP or ASN"
            />
          </Flex>
          {/* <Button width="300px" onClick={() => router.push('/')}>
          Back to Home
        </Button> */}
        {/* </Wrapper> */}
      </Layout>
    </>
  )
}

const Wrapper = styled(Flex)`
  margin-top: 100px;
  align-items: center;
  gap: 80px;
`
