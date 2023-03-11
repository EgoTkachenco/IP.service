import styled from 'styled-components'
import { H2, H5, Flex, Button, Text, Icon } from '@/core'
import { Block, BlockInner } from './Block'
import { Carousel } from '@mantine/carousel'
import services from '@/constants/services'
import Link from 'next/link'

const Products = () => {
  return (
    <Block>
      <Content>
        <H2 color="dark" align="center">
          Our Products
        </H2>
        <CarouselContainer>
          <Carousel
            slideSize="33.3333%"
            slideGap="20px"
            align="start"
            loop
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%' },
            ]}
            nextControlIcon={
              <Icon icon="carousel-right" color="dark" size="32px" />
            }
            previousControlIcon={
              <Icon icon="carousel-left" color="dark" size="32px" />
            }
          >
            {services.map((slide, i) => (
              <Carousel.Slide key={i}>
                <Slide>
                  <SlideIcon color={slide.color}>
                    <Icon icon={slide.icon} color="white" size="32px" />
                  </SlideIcon>
                  <H5 color="white">{slide.name}</H5>
                  <SlideDescription>{slide.description}</SlideDescription>
                  <Link href={slide.link} style={{ width: '100%' }}>
                    <Button variant="primary-transparent">Learn More</Button>
                  </Link>
                </Slide>
              </Carousel.Slide>
            ))}
          </Carousel>
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
    width: calc(100% - (24px * 2));
  }
`

const Slide = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: #071625;
  border-radius: 10px;
`

const SlideIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  background: ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
  margin-bottom: 24px;
`

const SlideDescription = styled(Text)`
  text-align: center;
  width: 100%;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`
