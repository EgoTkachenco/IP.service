import styled from 'styled-components'
import { H2, H5, Flex, Button, Text, Icon } from '@/core'
import { Block, BlockInner, Title } from './Block'
import services from '@/constants/services'
import Link from 'next/link'
import ServicesCarousel from '@/components/reusable/ServicesCarousel'

const Services = () => {
  return (
    <Block>
      <Content>
        <Title as="h2" color="dark">
          Our Products
        </Title>
        <Container>
          {services.map((slide, i) => (
            <Slide key={i}>
              <SlideIcon color={slide.color}>
                <Icon icon={slide.icon} color="white" size="32px" />
              </SlideIcon>
              <H5 as="h3" color="white">
                {slide.name}
              </H5>
              <SlideDescription>{slide.description_full}</SlideDescription>
              <Link href={slide.link} style={{ width: '100%' }}>
                <Button variant="primary-transparent">Learn More</Button>
              </Link>
            </Slide>
          ))}
        </Container>
        <MobileContainer>
          <ServicesCarousel description_key="description_full" />
        </MobileContainer>
      </Content>
    </Block>
  )
}

export default Services

const Content = styled(BlockInner)`
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 24px 20px;

  @media (max-width: 1140px) {
    display: none;
  }
`

const MobileContainer = styled.div`
  display: none;
  margin-top: 16px;
  width: 100%;
  /* width: calc(100% - (24px * 2)); */
  @media (max-width: 1140px) {
    display: block;
  }
`

const Slide = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: #071625;
  border-radius: 10px;

  width: calc((100% - 40px) / 3);
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
  flex-grow: 1;
`
