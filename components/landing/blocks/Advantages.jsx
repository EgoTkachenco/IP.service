import styled from 'styled-components'
import { Flex, H2, Text } from '@/core'
import { Block, BlockInner } from './Block'
import { AdvantagesItem, AdvantagesIllustration } from './styled'

const Advantages = ({ title, description, count, features }) => {
  return (
    <Block>
      <Content>
        <H2 color="dark" align="center">
          {title}
        </H2>
        <AdvantagesText>{description}</AdvantagesText>

        <Flex gap="50px" align="center">
          <Flex
            direction="column"
            align="flex-end"
            justify="space-around"
            gap="100px"
          >
            {features.slice(0, 3).map((feature) => (
              <AdvantagesItem
                key={feature.name}
                icon={feature.icon}
                text={feature.name}
              />
            ))}
          </Flex>
          <AdvantagesIllustration count={count} />
          <Flex
            direction="column"
            align="flex-start"
            justify="space-around"
            gap="100px"
          >
            {features.slice(3, 6).map((feature) => (
              <AdvantagesItem
                key={feature.name}
                icon={feature.icon}
                text={feature.name}
              />
            ))}
          </Flex>
        </Flex>
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
`
