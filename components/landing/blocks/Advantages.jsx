import styled from 'styled-components'
import { Flex, H2, Text } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { AdvantagesItem, AdvantagesIllustration } from './styled'

const Advantages = ({ title, description, count, features }) => {
  return (
    <Block>
      <Content>
        <Title as="h2" color="dark">
          {title}
        </Title>
        <AdvantagesText>{description}</AdvantagesText>
        <AdvantagesContainer gap="50px" align="center">
          <Column_1>
            {features
              .slice(0, Math.ceil(features.length / 2))
              .map((feature) => (
                <AdvantagesItem
                  key={feature.name}
                  icon={feature.icon}
                  text={feature.name}
                />
              ))}
          </Column_1>
          <AdvantagesIllustration count={count} />
          <Column_2>
            {features.slice(Math.ceil(features.length / 2)).map((feature) => (
              <AdvantagesItem
                key={feature.name}
                icon={feature.icon}
                text={feature.name}
              />
            ))}
          </Column_2>
        </AdvantagesContainer>
      </Content>
    </Block>
  )
}

export default Advantages

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;

  @media (max-width: 1140px) {
    max-width: 100%;
    overflow: hidden;
  }
`

const AdvantagesText = styled(Text)`
  width: 59%;
  margin: 40px 0 72px;
  text-align: center;

  @media (max-width: 1140px) {
    width: 100%;
    text-align: left;
    margin: 16px 0 32px;
  }
`

const AdvantagesContainer = styled(Flex)`
  align-items: center;
  gap: 50px;
  @media (max-width: 1140px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 24px;
  }
`

const Column = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  gap: 70px;
  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const Column_1 = styled(Column)`
  align-items: flex-end;
  @media (max-width: 1140px) {
    order: 2;
    align-items: flex-start;
  }
`
const Column_2 = styled(Column)`
  align-items: flex-start;
  @media (max-width: 1140px) {
    order: 3;
  }
`
