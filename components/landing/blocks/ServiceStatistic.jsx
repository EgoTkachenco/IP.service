import styled from 'styled-components'
import { Block, BlockInner } from './Block'
import { StatisticCard } from './styled'

const ServiceStatistic = ({ features = [] }) => {
  return (
    <Block>
      <Content flex="1">
        {features.map((feature, i) => (
          <StatisticCard
            key={i}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Content>
    </Block>
  )
}

export default ServiceStatistic

const Content = styled(BlockInner)`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1140px) {
    flex-wrap: wrap;
    width: 100%;
    align-items: stretch;
    & > * {
      flex: 1 1 calc((100% / 2) - 20px);
    }
  }
`
