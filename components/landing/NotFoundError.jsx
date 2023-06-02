import styled from 'styled-components'
import { Flex, H2, H6 } from '@/core'
import { BlockInner } from './blocks/Block'
import APIPreview from '@/components/reusable/APIPreview'
import { allService } from '@/utils/api'
import { validateIP, validateASN } from '@/utils'

const NotFoundError = () => {
  return (
    <>
      <Block>
        <Title color="dark">404: Page not found</Title>

        <Content>
          <H6 color="dark">Search for an IP address or ASN</H6>
          <APIPreview
            service={(data) => allService({ ip: data })}
            validation={(data) => {
              const isIp = validateIP(data)
              const isASN = validateASN(data)
              if (!isIp && !isASN) return 'Invalid ip or asn'
              return null
            }}
            examples={['', '66.131.120.255', 'AS17741', '9999']}
            placeholder="Search IP or ASN"
            // autoload={true}
            examplesfirst
          />
        </Content>
      </Block>
    </>
  )
}

export default NotFoundError

const Block = styled(BlockInner)`
  padding: 100px 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1140px) {
    padding: 48px 24px;
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled(H2)`
  @media (max-width: 1140px) {
    margin: 0 0 64px;
  }
`

const Content = styled(Flex)`
  flex-direction: column;
  gap: 16px;
  max-width: 100%;

  & > :last-child {
    max-width: 550px;
    width: 100%;
  }
`
