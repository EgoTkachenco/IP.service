import styled from 'styled-components'
import { Icon, Flex, H3, H5, Card } from '@/core'
import { Block, BlockInner } from './Block'
import { SignInContactButtons } from './styled'

const RangesAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <H3 color="dark" align="center">
          {'A few ways to use our IP Ranges API'}
        </H3>
        <Container flex="1 1 calc((100% - 32px) / 2)">
          <UseCase text="Our customers benefit greatly by doing specific targeting based on IP ranges belonging to a company or by fingerprinting web traffic and using IP ranges information for data enrichment." />
          <UseCase text="Identifying users by matching IP ranges to domain data is useful for content customisation, domain-specific targeting and data enrichment." />
        </Container>
        <SignInContactButtons />
      </Content>
    </Block>
  )
}

export default RangesAPIUsecases

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 1140px) {
    /* flex-direction: column; */
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
`

const UseCase = ({ text }) => (
  <UseCaseCard color="white">
    <Icon icon="use-case" size="50px" color="primary" />
    <H5 weight={500}>{text}</H5>
  </UseCaseCard>
)

const UseCaseCard = styled(Card)`
  padding: 50px;
  gap: 25px;
  flex: 1 1 calc((100% - 64px) / 3);

  @media (max-width: 1140px) {
    flex: 1 1 calc((100% - 32px) / 2);
  }

  @media (max-width: 700px) {
    flex: 1 1 100%;
  }
`
