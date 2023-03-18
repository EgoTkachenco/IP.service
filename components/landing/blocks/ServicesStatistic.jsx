import styled from 'styled-components'
import { Block, BlockInner } from './Block'
import { StatisticCard } from './styled'

const ServicesStatistic = () => {
  return (
    <Block>
      <Content>
        <StatisticCard title="38K+" description="Users" />
        <StatisticCard title="4B+" description="Api reqs a month" />
        <StatisticCard title="9+" description="Data types" />
        <StatisticCard title="5" description="Dedicated data engineers" />

        <StatisticCard title="21.2B+" description="IP netblocks" />
        <StatisticCard title="50M+" description="companies" />
        <StatisticCard title="3325" description="TLDs & ccTLDs" />
        <StatisticCard title="18.5B+" description="WHOIS records" />
      </Content>
    </Block>
  )
}

export default ServicesStatistic

const Content = styled(BlockInner)`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 calc((100% / 4) - 60px);
  }

  @media (max-width: 1140px) {
    align-items: stretch;
    & > * {
      flex: 1 1 calc((100% / 2) - 20px);
    }
  }
`
