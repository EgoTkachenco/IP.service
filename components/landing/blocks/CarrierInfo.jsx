import styled from 'styled-components'
import { Flex, H2, H6, Card, Icon } from '@/core'
import { Block, BlockInner } from './Block'
import { SignInContactButtons } from './styled'

const CarrierInfo = () => {
  return (
    <Block>
      <Content>
        <H2 color="dark" align="center">
          {'Are you a mobile service provider?'}
        </H2>
        <H6
          weight={500}
          align="center"
        >{`Websites that provide mobile services or advertising benefit greatly by properly serving\ntheir mobile IP traffic—IPinfo’s IP-to-carrier API helps our customers do just that.`}</H6>
        <SignInContactButtons />
      </Content>
    </Block>
  )
}

export default CarrierInfo

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
`
