import { Card, H2, Caption, Flex, Icon } from '@/core'
import styled from 'styled-components'
import OnboardingCard from './OnboardingCard'

const OnboardingStep2 = () => {
  return (
    <OnboardingCard
      step="3"
      title="Get your token"
      subtitle={
        <Flex align="center" gap="4px">
          <Icon icon="question" size="18px" color="primary" />
          <Caption weight="700" inline>
            Query Parameter
            <Caption inline>
              {' '}
              | ipinfo.io/[IP address]?token=dbaf59e6154d0d
            </Caption>
          </Caption>
        </Flex>
      }
    >
      <Flex direction="column" gap="10px" pl="40px">
        <TokenCard gap="21px" direction="row" align="center">
          <H2>dbaf59e6154d0d</H2>
          <Icon icon="copy" size="40px" color="primary" onClick={() => {}} />
        </TokenCard>
        <Caption>Include your access token in all requests.</Caption>
      </Flex>
    </OnboardingCard>
  )
}

export default OnboardingStep2

const TokenCard = styled(Card)`
  background: #f9fafc;
  border-radius: 10px;
  padding: 16px 24px;

  ${H2} {
    line-height: 45px;
  }
`
