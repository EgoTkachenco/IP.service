import styled from 'styled-components'
import { Flex, H3 } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { UseCase } from './styled'

const CompanyAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title as="h2" color="dark">
          {'Ways to use our \nIP to Company data'}
        </Title>

        <Container flex="1 1 calc((100% - 64px) / 3)">
          <UseCase text="Identify potential customers and generate leads for sales teams using firmographics data." />
          <UseCase text="Tailor marketing campaigns to target specific companies based on firmographics data." />
          <UseCase text="Personalize website content for specific companies or industries using firmographics data." />
          <UseCase text="Compare website traffic and engagement metrics of competitors using website analytics." />
          <UseCase text="Detect and prevent fraudulent activity on your website with fraud detection and security measures." />
          <UseCase text="Create account-based marketing strategies and tactics using firmographics data." />
          <UseCase text="Gain insights into the competitive landscape and market trends with market research and competitive analysis." />
          <UseCase text="Better understand customer needs and preferences for personalized support with firmographics data." />
          <UseCase text="Customize website content based on the geographic location of visitors with geotargeting." />
          <UseCase text="Optimize website performance, identify areas for improvement with website metrics and analysis." />
          <UseCase text="Determine ownership information of IP addresses with IP address ownership data." />
          <UseCase text="Analyze historical website traffic trends and patterns with historical website traffic data." />
        </Container>
      </Content>
    </Block>
  )
}

export default CompanyAPIUsecases

const Content = styled(BlockInner)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 100px;

  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 16px;
  }
`
