import styled from 'styled-components'

import { Flex, H2, Text, Icon } from '@/core'
import { Block, BlockInner } from './Block'
import { AdvantagesItem, AdvantagesIllustration } from './styled'

const AdvantagesSmall = () => {
  return (
    <Block>
      <Content>
        <TextContainer>
          <H2 color="dark">
            Accurate & low-latency <br /> IP geolocation lookup
          </H2>
          <AdvantagesText>
            Using insights derived from WHOIS, IPinfo IP to Company API
            identifies the company that operates or leases the IP block from the
            ASN.
            {'\n\n'}
            Our company classifiers indicate the types of organizations that
            frequent your website, including ISPs, businesses, educational
            institutions, or hosting services.
          </AdvantagesText>
        </TextContainer>

        <IllustrationContainer>
          <AdvantagesIllustration count="40" small />
          <AdvantagesIllustrationOptions>
            <AdvantagesItem icon="navigation" text="Domain name" />
            <AdvantagesItem icon="edit" text="Company name" />
            <AdvantagesItem icon="city" text="Company type" />
          </AdvantagesIllustrationOptions>
        </IllustrationContainer>
      </Content>
    </Block>
  )
}

export default AdvantagesSmall

const Content = styled(BlockInner)`
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 48px;
  }
`

const AdvantagesText = styled(Text)`
  margin: 40px 0 72px;

  @media (max-width: 1140px) {
    margin: 32px 0 0;
  }
`

const TextContainer = styled(Flex)`
  flex-direction: column;
  width: 446px;

  @media (max-width: 1140px) {
    width: 100%;
  }
`

const IllustrationContainer = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
  gap: 48px;
  align-items: center;

  @media (max-width: 1140px) {
    flex-direction: column-reverse;
  }
`

const AdvantagesIllustrationOptions = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`
