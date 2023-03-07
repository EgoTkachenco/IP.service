import styled from 'styled-components'
import { Block, BlockInner } from './Block'
import { StatisticCard } from './styled'

const GeolocationStatistic = () => {
  return (
    <Block>
      <Content flex="1">
        <StatisticCard title="110k+" description="Users" />
        <StatisticCard title="20B+" description="Api reqs a month" />
        <StatisticCard title="12+" description="Data types" />
        <StatisticCard title="6" description="Dedicated data engineers" />
      </Content>
    </Block>
  )
}

export default GeolocationStatistic

const Content = styled(BlockInner)`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1140px) {
    flex-direction: column;
    width: 100%;
  }
`
