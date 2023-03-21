import styled from 'styled-components'
import { H5, Flex, Text, Icon } from '@/core'
import { Block, BlockInner, Title } from './Block'
import Image from 'next/image'

const EnterpriseServices = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">
          Premium, scalable service tailored for businesses of all sizes.
        </Title>
        <Container>
          <Column>
            <Feature
              icon="accuracy"
              title="Accuracy"
              text="Delivers highly precise IP data, ensuring reliable and trustworthy insights for informed decision-making."
              right
            />
            <Feature
              icon="reliability"
              title="Reliability"
              text="Maintains consistent stability and performance, providing dependable results across diverse use cases."
            />
            <Feature
              icon="energy"
              title="Speed"
              text="Offers rapid response times and low latency, enabling efficient data retrieval and analysis."
              right
            />
          </Column>
          <Image
            src="/enterprise-illustration.png"
            width={282}
            height={282}
            alt="Enterprise services"
            className="illustration"
          />
          <Column>
            <Feature
              icon="shield"
              title="Security"
              text="Implements robust protection measures to guarantee data privacy, adhering to industry compliance standards."
            />
            <Feature
              icon="scalability"
              title="Scalability"
              text="Provides flexible, adaptable solutions designed to accommodate businesses of all sizes and requirements."
              right
            />
            <Feature
              icon="user-friendly"
              title="User-friendly"
              text="Features an intuitive interface with easy-to-understand data presentation, simplifying the user experience."
            />
          </Column>
        </Container>
      </Content>
    </Block>
  )
}

export default EnterpriseServices

const Content = styled(BlockInner)`
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media (max-width: 1140px) {
    gap: 24px;
    .illustration {
      display: none;
    }
  }
`

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1140px) {
    width: calc(100% - (24px * 2));
    flex-direction: column;
    & > :nth-child(3) {
      margin-top: 8px;
    }
  }
`
const Column = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  flex-grow: 1;
  @media (max-width: 1140px) {
    gap: 8px;
  }
`

const Feature = ({ icon, title, text, right = false }) => (
  <FeatureContainer right={right}>
    <Flex align="center" gap="10px">
      <Icon icon={icon} size="24px" color="primary" />
      <H5 color="dark">{title}</H5>
    </Flex>
    <Text>{text}</Text>
  </FeatureContainer>
)

const FeatureContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 319px;
  height: 194px;
  margin-left: ${({ right }) => (right ? 'auto' : '0')};
  background-image: url(/file-card.svg);
  background-repeat: no-repeat;
  padding: 0 24px;
`
