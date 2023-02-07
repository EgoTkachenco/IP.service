import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H2, Text, Icon } from '@/core'
import { Block } from './Block'

const Partners = () => {
  return (
    <Block>
      <H2 color="dark" align="center">
        {'Industry-leading companies \n around the world trust our APIs'}
      </H2>
      <CarouselWrapper></CarouselWrapper>
    </Block>
  )
}

export default Partners

const CarouselWrapper = styled.div``
