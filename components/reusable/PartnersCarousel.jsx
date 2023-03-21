import styled from 'styled-components'
import { Flex } from '@/core'
import { infinite_line } from '@/styles/animations'
import { useMediaQuery } from '@mantine/hooks'

const PartnersCarousel = ({ gap = '40px', small = false }) => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  const carousels = splitToArrays(partners, isMobile ? 6 : 12)
  return (
    <Wrapper direction="column" gap={gap}>
      {carousels.map((carousel, i) => (
        <Carousel
          items={carousel}
          small={small}
          reverse={i % 2 === 1}
          key={i}
        />
      ))}
    </Wrapper>
  )
}

export default PartnersCarousel

const Wrapper = styled(Flex)`
  flex-direction: column;
  gap: ${({ gap }) => gap};

  @media (max-width: 1140px) {
    gap: 8px;
  }
`

const splitToArrays = (array, size) => {
  const result = []
  let part = []
  for (let i = 0; i < array.length; i++) {
    part.push(array[i])
    if (part.length === size) {
      result.push(part)
      part = []
    }
  }
  return result
}

const partners = [
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

const Carousel = ({ items, small, reverse = false }) => {
  return (
    <>
      <CarouselWrapper small={small}>
        {[1, 2].map((carousel) => (
          <CarouselItem key={carousel} reverse={reverse}>
            <CarouselItemInner small={small}>
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
  gap: ${({ small }) => (small ? '20px' : '40px')};

  @media (max-width: 1140px) {
    gap: 8px;
  }
`
const CarouselItem = styled.div`
  animation-name: ${({ small }) =>
    small ? infinite_line('20px') : infinite_line('40px')};
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-fill-mode: forward;
  animation-iteration-count: infinite;
  animation-direction: ${({ reverse }) => (reverse ? 'reverse' : 'normal')};
`

const CarouselItemInner = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ small }) => (small ? '17px' : '30px')};
  gap: ${({ small }) => (small ? '40px' : '74px')};
  height: ${({ small }) => (small ? '55px' : '100px')};
  border: 1px solid rgba(16, 24, 32, 0.1);
  border-radius: ${({ small }) => (small ? '10px' : '20px')};

  img {
    max-height: 100%;
  }

  @media (max-width: 1140px) {
    padding: 16px;
    height: 55px;
    border-radius: 10px;
    gap: 40px;
  }
`
