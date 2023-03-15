import styled from 'styled-components'
import { Block, BlockInner, Title } from './Block'

import ServicesCarousel from '@/components/reusable/ServicesCarousel'
const Products = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">Our Products</Title>
        <CarouselContainer>
          <ServicesCarousel />
        </CarouselContainer>
      </Content>
    </Block>
  )
}

export default Products

const Content = styled(BlockInner)`
  flex-direction: column;
  align-items: center;
`

const CarouselContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin-top: 40px;
  position: relative;

  @media (max-width: 1140px) {
    margin-top: 24px;
  }
`
