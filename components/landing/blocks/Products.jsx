import styled from 'styled-components'
import { H2, H5, Flex, Button, Text, Icon } from '@/core'
import { Block, BlockInner } from './Block'
import { Carousel } from '@mantine/carousel'

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
            nextControlIcon={
              <Icon icon="carousel-right" color="dark" size="32px" />
            }
            previousControlIcon={
              <Icon icon="carousel-left" color="dark" size="32px" />
            }
          >
            {SLIDES.map((slide, i) => (
              <Carousel.Slide key={i}>
                <Slide>
                  <SlideIcon color={slide.color}>
                    <Icon icon={slide.icon} color="white" size="32px" />
                  </SlideIcon>
                  <H5 color="white">{slide.title}</H5>
                  <SlideDescription>{slide.description}</SlideDescription>
                  <Button>Learn More </Button>
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

const SLIDES = [
  {
    icon: 'navigation',
    color: 'primary',
    title: 'Data Downloads',
    description: 'Customize user expiriences',
    href: '',
  },
  {
    icon: 'move',
    color: 'success',
    title: 'IP Ranges API',
    description: 'Target specific IP ranges',
    href: '',
  },
  {
    icon: 'shield',
    color: 'secondary',
    title: 'Privacy Detection',
    description: 'Unmask user’s identities',
    href: '',
  },
  {
    icon: 'building',
    color: 'primary',
    title: 'IP to Company API',
    description: 'Leverage anonymus leads',
    href: '',
  },
  {
    icon: 'share',
    color: 'success',
    title: 'ASN API',
    description: 'Improve data enrichment',
    href: '',
  },
  {
    icon: 'globe',
    color: 'secondary',
    title: 'Hosted domains API',
    description: 'Enchance lead generation',
    href: '',
  },
  {
    icon: 'wifi',
    color: 'primary',
    title: 'IP to Mobille Carrier API',
    description: 'Customize user expiriences',
    href: '',
  },
  {
    icon: 'flag',
    color: 'success',
    title: 'Abuse Contact API',
    description: 'Automate abusive IP reporting',
    href: '',
  },
  {
    icon: 'zoom-in',
    color: 'secondary',
    title: 'IP Whois API',
    description: 'Get more IP insights',
    href: '',
  },
]

const Content = styled(BlockInner)`
  flex-direction: column;
  align-items: center;
`

const CarouselContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin-top: 40px;
  position: relative;
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
