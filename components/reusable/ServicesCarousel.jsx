import styled from 'styled-components'
import { Carousel } from '@mantine/carousel'
import services from '@/constants/services'
import Link from 'next/link'
import { H5, Flex, Button, Text, Icon } from '@/core'
import { useMediaQuery } from '@mantine/hooks'

const ServicesCarousel = ({ description_key = 'description' }) => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <Carousel
      slideSize="33.3333%"
      slideGap="20px"
      align="start"
      loop={!isMobile}
      breakpoints={[
        {
          maxWidth: 'md',
          slideSize: '50%',
          slideGap: '8px',
        },
        {
          maxWidth: 'sm',
          slideSize: '90%',
        },
      ]}
      nextControlIcon={<Icon icon="carousel-right" color="dark" size="32px" />}
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
            <H5 as="h3" color="white">
              {slide.name}
            </H5>
            <SlideDescription>{slide[description_key]}</SlideDescription>
            <Link href={slide.link} style={{ width: '100%' }}>
              <Button variant="primary-transparent">Learn More</Button>
            </Link>
          </Slide>
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

export default ServicesCarousel

const Slide = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: #071625;
  border-radius: 10px;
  height: 100%;
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
