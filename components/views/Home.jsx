import { Flex } from '@/core'
import OnboardingStep1 from '@/components/reusable/onboarding/OnboardingStep1'
import OnboardingStep2 from '@/components/reusable/onboarding/OnboardingStep2'
import OnboardingStep3 from '@/components/reusable/onboarding/OnboardingStep3'
import OnboardingStep4 from '@/components/reusable/onboarding/OnboardingStep4'

const Home = () => {
  return (
    <Flex direction="column" gap="50px">
      <OnboardingStep1 />
      <OnboardingStep2 />
      <OnboardingStep3 />
      <OnboardingStep4 />
    </Flex>
  )
}

export default Home
