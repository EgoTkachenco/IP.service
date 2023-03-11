import styled from 'styled-components'
import { H2, H5, Flex, Text, Icon } from '@/core'
import { Block, BlockInner } from './Block'
import Image from 'next/image'

const EnterpriseServices = () => {
  return (
    <Block>
      <Content>
        <H2 color="dark" align="center">
          Enterprise-grade service for every size
        </H2>
        <Container>
          <Column>
            <Feature
              icon="shield-dot"
              title="Bank grade security"
              text="Software that's built on Google Cloud infrastructure and backed 24/7 by our data experts."
              right
            />
            <Feature
              icon="persons"
              title="Here for the long run"
              text="We've been here since 2013, and we're here for the long run."
            />
            <Feature
              icon="energy"
              title="Fast & easy to use"
              text="Start using IP data in minutes with simple setup and supported integrations."
              right
            />
          </Column>
          <Image
            src="/enterprise-illustration.png"
            width={282}
            height={282}
            alt="Enterprise services"
          />
          <Column>
            <Feature
              icon="shield"
              title="Reliable & scalable"
              text="Our auto-scaling servers handle more than a billion API queries a day"
            />
            <Feature
              icon="clock"
              title="Here for the long run"
              text="Our data is aggregated from multiple sources and updated daily"
              right
            />
            <Feature
              icon="cloud"
              title="Backed by the best"
              text="Software that's built on Google Cloud infrastructure and backed 24/7 by our data experts."
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
`

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1140px) {
    width: calc(100% - (24px * 2));
  }
`
const Column = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  flex-grow: 1;
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
  gap: 16px;
  width: 256px;
  margin-left: ${({ right }) => (right ? 'auto' : '0')};
`
