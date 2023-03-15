import styled from 'styled-components'
import { Icon, Flex, H5, Card } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons } from './styled'

const RangesAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">{'A few ways to use our IP Ranges API'}</Title>
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
    gap: 24px;
    align-items: flex-start;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
`

const UseCase = ({ text }) => (
  <UseCaseCard color="white">
    <Icon icon="use-case" size="50px" mobileSize="24px" color="primary" />
    <H5 weight={500}>{text}</H5>
  </UseCaseCard>
)

const UseCaseCard = styled(Card)`
  padding: 50px;
  gap: 25px;
  flex: 1 1 calc((100% - 64px) / 3);

  @media (max-width: 1140px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding: 0;
    background: none;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    ${H5} {
      font-size: 14px;
      letter-spacing: 0.01em;
      font-weight: 600;
      line-height: 160%;
    }
  }
`
