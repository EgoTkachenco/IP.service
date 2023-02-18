import styled from 'styled-components'
import { Flex } from '@/core'
import OnboardingStep1 from '@/components/reusable/onboarding/OnboardingStep1'
import OnboardingStep2 from '@/components/reusable/onboarding/OnboardingStep2'
import OnboardingStep3 from '@/components/reusable/onboarding/OnboardingStep3'
import OnboardingStep4 from '@/components/reusable/onboarding/OnboardingStep4'

import LastDaysUsage from '@/components/reusable/analytics/LastDaysUsage'
import UpcomingBill from '@/components/reusable/analytics/UpcomingBill'
import UsageChart from '@/components/reusable/analytics/UsageChart'

const Home = () => {
  return (
    <Flex direction="column" gap="50px">
      <OnboardingStep1 />
      <OnboardingStep2 />
      <OnboardingStep3 />
      <OnboardingStep4 />

      <AnalyticsCards>
        <LastDaysUsage />
        <UpcomingBill />
      </AnalyticsCards>

      <UsageChart />
    </Flex>
  )
}

export default Home

const AnalyticsCards = styled(Flex)`
  width: 100%;
  gap: 30px;

  & > * {
    flex: 0 1 calc((100% - 30px) / 2);
  }
`
