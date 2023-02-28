import { Card, H2, Caption, Flex, Icon } from '@/core'
import styled from 'styled-components'
import TokenPreview from '@/components/reusable/TokenPreview'
import OnboardingCard, { OnboardingCardContent } from './OnboardingCard'
import { TokenQuery } from '@/components/reusable/styled.jsx'

const OnboardingStep3 = ({ token }) => {
  return (
    <OnboardingCard
      step="3"
      title="Get your token"
      subtitle={<TokenQuery token={token} />}
    >
      <OnboardingCardContent direction="column" gap="8px">
        <TokenPreview token={token} color="silvery" iconSize="30px" small />
        <Caption>Include your access token in all requests.</Caption>
      </OnboardingCardContent>
    </OnboardingCard>
  )
}

export default OnboardingStep3
