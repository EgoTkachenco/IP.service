import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H2, Text, Icon } from '@/core'
import { Block, BlockInner } from './Block'

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
          <AdvantagesImage>
            <Image
              src="/advantages_bg.png"
              alt="advantages back"
              className="advantages-image__back"
              fill
            />
            <Image
              src="/requests-count.svg"
              alt="requests-count"
              width={255}
              height={172}
            />
            <AdvantagesImageText color="white">
              Billion API requests last month
            </AdvantagesImageText>
          </AdvantagesImage>
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

const AdvantagesItem = ({ icon, text }) => (
  <Flex gap="10px">
    <Icon icon={icon} color="primary" size="24px" />
    <Text weight={700}>{text}</Text>
  </Flex>
)

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

const AdvantagesImage = styled.div`
  position: relative;
  width: 450px;
  height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  border-radius: 50%;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(15.0667px);
  }

  & > * {
    position: relative;
    z-index: 10;
  }

  .advantages-image__back {
    z-index: 0;
  }
`

const AdvantagesImageText = styled(Text)`
  margin-bottom: -6px;
`
