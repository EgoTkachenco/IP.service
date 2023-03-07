import styled from 'styled-components'
import { Flex, H2, Text } from '@/core'
import { Block, BlockInner } from './Block'
import { AdvantagesItem, AdvantagesIllustration } from './styled'

const Advantages = () => {
  return (
    <Block>
      <Content>
        <H2 color="dark" align="center">
          Accurate & low-latency <br /> IP geolocation lookup
        </H2>
        <AdvantagesText>
          IPinfo specializes in providing accurate IP to location data. We take
          it so seriously that we build and maintain our own proprietary IP
          geolocation database. Our GeoAPI provides a response that includes
          these datasets for every IP:
        </AdvantagesText>

        <Flex gap="50px" align="center">
          <Flex
            direction="column"
            align="flex-end"
            justify="space-around"
            gap="100px"
          >
            <AdvantagesItem icon="edit" text="Hostname" />
            <AdvantagesItem icon="communicate" text="Postal/zip code" />
            <AdvantagesItem icon="navigation" text="Region" />
          </Flex>
          <AdvantagesIllustration count="68" />
          <Flex
            direction="column"
            align="flex-start"
            justify="space-around"
            gap="100px"
          >
            <AdvantagesItem icon="flag" text="Country" />
            <AdvantagesItem icon="map" text="Location coordinates" />
            <AdvantagesItem icon="city" text="City" />
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
