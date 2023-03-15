import styled from 'styled-components'
import { Block, BlockInner } from './Block'
import { StatisticCard } from './styled'

const ServicesStatistic = () => {
  return (
    <Block>
      <Content>
        <StatisticCard title="110k+" description="Users" />
        <StatisticCard title="20B+" description="Api reqs a month" />
        <StatisticCard title="12+" description="Data types" />
        <StatisticCard title="6" description="Dedicated data engineers" />

        <StatisticCard title="19.4B+" description="IP netblocks" />
        <StatisticCard title="30B+" description="DNS records" />
        <StatisticCard title="6325" description="TLDs & ccTLDs" />
        <StatisticCard title="17.2B+" description="WHOIS records" />
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
