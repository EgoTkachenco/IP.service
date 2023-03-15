import { H2 } from '@/core'
import { Block } from './Block'
import PartnersCarousel from '@/components/reusable/PartnersCarousel'
import styled from 'styled-components'

const Partners = () => {
  return (
    <Block>
      <Title color="dark" align="center">
        {'Industry-leading companies \n around the world trust our APIs'}
      </Title>
      <PartnersCarousel />
    </Block>
  )
}

export default Partners

const Title = styled(H2)`
  margin-bottom: 60px;

  @media (max-width: 1140px) {
    text-align: left;
    padding: 0 24px;
  }
`
