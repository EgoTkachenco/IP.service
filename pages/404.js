import styled from 'styled-components'
import { useMetadataRenderer } from '@/hooks'
import { Flex, H2, Button } from '@/core'
import { useRouter } from 'next/router'

export default function ContactPage() {
  const renderMetadata = useMetadataRenderer()
  const router = useRouter()
  return (
    <>
      {renderMetadata({
        title: 'IP Service',
        description: 'IP Service',
      })}
      <Wrapper>
        <H2>Page Not Found</H2>
        <Button width="300px" onClick={() => router.push('/')}>
          Back to Home
        </Button>
      </Wrapper>
    </>
  )
}

const Wrapper = styled(Flex)`
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`
