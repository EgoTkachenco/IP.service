import { Caption } from '@/core'
import TokenPreview from '@/components/reusable/TokenPreview'
import OnboardingCard, { OnboardingCardContent } from './OnboardingCard'
import { TokenQuery } from '@/components/reusable/styled.jsx'

const OnboardingStep3 = ({ token, host }) => {
  return (
    <OnboardingCard
      step="3"
      title="Get your token"
      subtitle={<TokenQuery host={host} token={token} />}
    >
      <OnboardingCardContent direction="column" gap="8px">
        <TokenPreview token={token} color="silvery" iconSize="30px" small />
        <Caption>Include your access token in all requests.</Caption>
      </OnboardingCardContent>
    </OnboardingCard>
  )
}

export default OnboardingStep3
