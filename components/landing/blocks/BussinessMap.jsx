import styled from 'styled-components'
import { Flex, H2 } from '@/core'
import { Block, BlockInner } from './Block'
import Image from 'next/image'

const BussinessMap = () => {
  return (
    <Block>
      <Content flex="1">
        <H2 color="dark" align="center">
          Bussiness across the globe use Spyskey
        </H2>
        <MapContainer>
          <Image src="/globe-map.svg" fill alt="Globe map" />
        </MapContainer>
      </Content>
    </Block>
  )
}

export default BussinessMap

const Content = styled(BlockInner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 1140px) {
    width: 100%;
  }
`

const MapContainer = styled(Flex)`
  position: relative;
  justify-content: center;
  width: 100%;
  aspect-ratio: calc(1140 / 650);
`
