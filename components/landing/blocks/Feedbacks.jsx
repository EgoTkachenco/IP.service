import styled from 'styled-components'
import { Block, BlockInner } from './Block'
import { Carousel } from '@mantine/carousel'
import { Flex, Text, Icon, Caption } from '@/core'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'

const Feedbacks = () => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <Block>
      <Content>
        <CarouselContainer>
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
            nextControlIcon={
              <Icon icon="carousel-right" color="dark" size="32px" />
            }
            previousControlIcon={
              <Icon icon="carousel-left" color="dark" size="32px" />
            }
          >
            {feedbacks.map((slide, i) => (
              <Carousel.Slide key={i}>
                <Slide>
                  <SlideLogo color={slide.color}>
                    <Image
                      src={slide.logo}
                      alt={slide.position}
                      layout="fill"
                      objectFit="contain"
                    />
                  </SlideLogo>
                  <Text color="white">{slide.text}</Text>
                  <SlideBottom>
                    <SlideAvatar>
                      <Image
                        src={slide.avatar}
                        alt={slide.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </SlideAvatar>
                    <Flex direction="column">
                      <Caption color="white">{slide.name}</Caption>
                      <Caption>{slide.position}</Caption>
                    </Flex>
                  </SlideBottom>
                </Slide>
              </Carousel.Slide>
            ))}
          </Carousel>
        </CarouselContainer>
      </Content>
    </Block>
  )
}

export default Feedbacks

const feedbacks = [
  {
    name: 'Peter Cavicchia',
    position: 'CTO',
    avatar: '/opinions/Cavicchia.jpg',
    logo: '/opinions/Cavicchia-logo.png',
    text: 'Spyskey IP intelligence revolutionized our approach to network security, ensuring robust protection.',
  },
  {
    name: 'Rafee Tarafdar',
    position: 'CTO',
    avatar: '/opinions/Tarafdar.jfif',
    logo: '/opinions/Tarafdar-logo.webp',
    text: "Our team greatly benefited from Spyskey's accurate and timely IP intelligence insights.",
  },
  {
    name: 'Alexander Johnson',
    position: 'President',
    avatar: '/opinions/Sentonas.jfif',
    logo: '/opinions/Sentonas-logo.png',
    text: "Spyskey's powerful IP intelligence service enabled effective risk management and data privacy.",
  },
  {
    name: 'Kit Colbert',
    position: 'CTO',
    avatar: '/opinions/Colbert.jpg',
    logo: '/opinions/Colbert-logo.png',
    text: 'With Spyskey IP intelligence, we significantly reduced cyber attack vulnerability and response times.',
  },
  {
    name: 'Dharmesh Shah',
    position: 'CTO',
    avatar: '/opinions/Shah.jfif',
    logo: '/opinions/Shah-logo.png',
    text: "Spyskey's IP intelligence provided an unparalleled perspective for anticipating potential security threats.",
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

  @media (max-width: 1140px) {
    margin-top: 24px;
  }
`

const Slide = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  background: #071625;
  border-radius: 10px;
  height: 100%;
  position: relative;

  &:before {
    content: '';
    background-image: url(/quotes.svg);
    width: 131px;
    height: 102px;
    position: absolute;
    top: 65px;
    right: -13px;
  }

  ${Caption} {
    font-size: 12px;
  }
`

const SlideLogo = styled.div`
  width: 75px;
  height: 75px;
  padding: 16px;
  margin-bottom: 30px;
  position: relative;

  @media (max-width: 1140px) {
    margin-bottom: 24px;
  }
`

const SlideAvatar = styled.div`
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
`

const SlideBottom = styled(Flex)`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 30px;
  margin-top: 30px;
  gap: 12px;

  @media (max-width: 1140px) {
    padding-top: 24px;
    margin-top: 24px;
  }
`
