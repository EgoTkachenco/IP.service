import styled from 'styled-components'

import { Flex, H2, Text, Icon } from '@/core'
import { Block, BlockInner } from './Block'
import { AdvantagesItem, AdvantagesIllustration } from './styled'

const AdvantagesSmall = ({
  title,
  description,
  count,
  features = [],
  contentWidth,
}) => {
  return (
    <Block>
      <Content>
        <TextContainer contentWidth={contentWidth}>
          <H2 color="dark">{title}</H2>
          <AdvantagesText>{description}</AdvantagesText>
        </TextContainer>

        <IllustrationContainer>
          <AdvantagesIllustration count={count} small />
          <AdvantagesIllustrationOptions>
            {features.map((feature, index) => (
              <AdvantagesItem
                key={index}
                icon={feature.icon}
                text={feature.name}
              />
            ))}
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
  width: ${({ contentWidth }) => contentWidth || '446px'};

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
  justify-content: space-around;
`
