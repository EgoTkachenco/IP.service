import styled from 'styled-components'
import { Flex, H3 } from '@/core'
import { Block, BlockInner } from './Block'
import { UseCase, SignInContactButtons } from './styled'

const ReverseAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <LeftContainer>
          <H3 color="dark">{`A few ways to\nuse our Reverse\nIP data`}</H3>
          <SignInContactButtons direction="column" />
        </LeftContainer>
        <Container flex="1 1 calc((100% - 32px) / 2)">
          <UseCase
            p="44px 24px"
            text={`Enriching lead generation\ndata and tightening-up\nsales reporting.`}
          />
          <UseCase
            p="44px 24px"
            text={`Having 24/7 access to\nresolving any IP address to\ndomain name with Reverse\nIP reports.`}
          />
          <UseCase
            p="44px 24px"
            text={`Uncovering new prospects by\nidentifying owners of an IP\naddress visiting your website\nand customising their\nexperience.`}
          />
          <UseCase
            p="44px 24px"
            text={`Tracking down malicious\nbehaviour of phishing or\nscamming websites that are\nsharing the same hosting server,\nidentifying the true owners and\noperators of compromised\ninfrastructure.`}
          />
        </Container>
      </Content>
    </Block>
  )
}

export default ReverseAPIUsecases

const Content = styled(BlockInner)`
  display: flex;
  align-items: stretch;
  gap: 69px;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
`

const LeftContainer = styled(Flex)`
  flex-direction: column;
  min-width: 300px;
  justify-content: space-between;

  @media (max-width: 1140px) {
    gap: 32px;
    align-items: stretch;
    min-width: unset;

    ${H3} {
      text-align: center;
    }
  }
`
