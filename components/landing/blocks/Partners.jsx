import { H2 } from '@/core'
import { Block } from './Block'
import PartnersCarousel from '@/components/reusable/PartnersCarousel'
import styled from 'styled-components'

const Partners = ({ title }) => {
  return (
    <Block>
      <Title color="dark" align="center">
        {title}
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
    margin-bottom: 24px;
  }
`
