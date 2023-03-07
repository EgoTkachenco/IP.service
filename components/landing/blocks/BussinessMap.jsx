import styled from 'styled-components'
import { Flex, H2 } from '@/core'
import { Block, BlockInner } from './Block'
import GlobeMapSvg from '@/components/reusable/GlobeMapSvg'

const BussinessMap = () => {
  return (
    <Block>
      <Content flex="1">
        <H2 color="dark" align="center">
          Bussiness across the globe use IP.Service
        </H2>
        <MapContainer>
          <GlobeMapSvg />
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
  justify-content: center;
  svg {
    max-width: 100%;
    height: auto;
  }
`
