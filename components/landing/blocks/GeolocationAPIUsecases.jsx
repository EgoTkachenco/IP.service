import styled from 'styled-components'
import { Flex, H5, Card, Icon } from '@/core'
import { Block, BlockInner, Title } from './Block'

const GeolocationAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">{'Ways to use our \n IP Geolocation API'}</Title>
        <Container flex="1 1 calc((100% - 32px) / 2)">
          <UseCase text="Boost your marketing strategy with Spyskey's IP geolocation service, enabling precise, location-based advertising for improved conversion rates and cost-effective campaigns. Reach your target audience with tailored messaging, maximizing engagement and ROI." />
          <UseCase text="Enhance user experiences through Spyskey's accurate geolocation data for content personalization. Offer region-specific content, driving engagement, and search engine ranking, while catering to users' unique preferences and interests." />
          <UseCase text="Strengthen your platform's security with Spyskey's IP geolocation insights. Detect and prevent fraud by identifying suspicious activities, ensuring a safe environment and fostering customer trust and satisfaction." />
          <UseCase text="Implement geo-blocking seamlessly with Spyskey's precise geolocation data. Enforce regional restrictions to comply with local regulations, protect your digital assets, and deliver a tailored user experience, free from unwanted content or legal issues." />
          <UseCase text="Leverage Spyskey's comprehensive geolocation data for in-depth analytics and insights. Understand user demographics and behavior to make data-driven decisions, refining your business strategies and staying ahead of the competition." />
          <UseCase text="Enhance customer engagement by offering multi-language support based on Spyskey's accurate IP geolocation data. Cater to a global audience with localized language options, ensuring clear communication and a personalized touch." />
        </Container>
      </Content>
    </Block>
  )
}

export default GeolocationAPIUsecases

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  @media (max-width: 1140px) {
    gap: 16px;
  }
`

const UseCase = ({ text }) => (
  <UseCaseCard color="white">
    <Icon icon="use-case" size="50px" mobileSize="24px" color="primary" />
    <H5 weight={500}>{text}</H5>
  </UseCaseCard>
)

// const UseCaseCard = styled(Card)`
//   padding: 47px 72px;
//   gap: 15px;
//   justify-content: center;
//   align-items: center;
//   flex: 1 1 calc((100% - 64px) / 3);

//   @media (max-width: 1140px) {
//     flex: 1 1 100%;
//     flex-direction: row;
//     padding: 0;
//     background: none;
//     justify-content: flex-start;
//     gap: 8px;

//     ${H5} {
//       white-space: nowrap;
//       font-size: 14px;
//       letter-spacing: 0.01em;
//       font-weight: 600;
//       line-height: 160%;
//     }
//   }
// `

const UseCaseCard = styled(Card)`
  padding: 50px;
  gap: 25px;
  flex: 1 1 calc((100% - 64px) / 2);

  @media (max-width: 1140px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding: 0;
    background: none;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    ${H5} {
      white-space: normal;
      font-size: 14px;
      letter-spacing: 0.01em;
      font-weight: 600;
      line-height: 160%;
    }
  }
`
