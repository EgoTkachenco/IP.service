import styled from 'styled-components'
import { Flex, H2, H6, Card, Icon } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons } from './styled'

const CarrierInfo = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">{'Are you a mobile service provider?'}</Title>
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
  @media (max-width: 1140px) {
    gap: 16px;
    align-items: stretch;
    ${H6} {
      text-align: left;
      font-weight: 500;
      margin-bottom: 24px;
    }
  }
`
