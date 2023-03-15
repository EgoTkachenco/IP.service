import styled from 'styled-components'
import { Flex, H3 } from '@/core'
import { Block, BlockInner, Title } from './Block'
import {
  UseCase,
  SignInContactButtons,
  OnlyDesktop,
  OnlyMobile,
} from './styled'

const ReverseAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <LeftContainer>
          <Title color="dark">{`A few ways to use our Reverse IP data`}</Title>
          <OnlyDesktop>
            <SignInContactButtons direction="column" />
          </OnlyDesktop>
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
        <OnlyMobile>
          <SignInContactButtons />
        </OnlyMobile>
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
    gap: 24px;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 16px;
  }
`

const LeftContainer = styled(Flex)`
  flex-direction: column;
  min-width: 250px;
  width: 250px;
  justify-content: space-between;
  ${Title} {
    text-align: left;
  }

  @media (max-width: 1140px) {
    gap: 32px;
    align-items: stretch;
    min-width: unset;
    width: 100%;
  }
`
