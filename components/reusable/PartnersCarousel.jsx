import styled from 'styled-components'
import { Flex } from '@/core'
import { infinite_line } from '@/styles/animations'

const PartnersCarousel = () => {
  return (
    <Flex direction="column" gap="40px">
      <Carousel items={carousel_1} />
      <Carousel items={carousel_2} delay={1000} />
    </Flex>
  )
}

export default PartnersCarousel

const carousel_1 = [
  { name: '', image: '/partners/partner_1.png' },
  { name: '', image: '/partners/partner_2.png' },
  { name: '', image: '/partners/partner_3.png' },
  { name: '', image: '/partners/partner_4.png' },
  { name: '', image: '/partners/partner_5.png' },
  { name: '', image: '/partners/partner_6.png' },
  { name: '', image: '/partners/partner_7.png' },
  { name: '', image: '/partners/partner_8.png' },
  { name: '', image: '/partners/partner_9.png' },
  { name: '', image: '/partners/partner_10.png' },
  { name: '', image: '/partners/partner_11.png' },
  { name: '', image: '/partners/partner_12.png' },
]
const carousel_2 = [
  { name: '', image: '/partners/partner_13.png' },
  { name: '', image: '/partners/partner_14.png' },
  { name: '', image: '/partners/partner_15.png' },
  { name: '', image: '/partners/partner_16.png' },
  { name: '', image: '/partners/partner_17.png' },
  { name: '', image: '/partners/partner_18.png' },
  { name: '', image: '/partners/partner_19.png' },
  { name: '', image: '/partners/partner_20.png' },
  { name: '', image: '/partners/partner_21.png' },
  { name: '', image: '/partners/partner_22.png' },
  { name: '', image: '/partners/partner_23.png' },
  { name: '', image: '/partners/partner_24.png' },
]

const Carousel = ({ items, delay = 0 }) => {
  return (
    <>
      <CarouselWrapper>
        {[1, 2].map((carousel) => (
          <CarouselItem key={carousel} delay={delay}>
            <CarouselItemInner>
              {items.map((item, i) => (
                <img src={item.image} key={i} />
              ))}
            </CarouselItemInner>
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </>
  )
}

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  overflow: hidden;
`
const CarouselItem = styled.div`
  padding: 20px;
  animation-name: ${infinite_line};
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-fill-mode: forward;
  animation-iteration-count: infinite;
  animation-delay: ${({ delay }) => delay + 'ms'};
`

const CarouselItemInner = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  gap: 74px;
  height: 100px;
  border: 1px solid rgba(16, 24, 32, 0.1);
  border-radius: 20px;
`
