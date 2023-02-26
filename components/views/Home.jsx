import styled from 'styled-components'
import { useEffect } from 'react'
import { Flex } from '@/core'
import OnboardingStep1 from '@/components/reusable/onboarding/OnboardingStep1'
import OnboardingStep2 from '@/components/reusable/onboarding/OnboardingStep2'
import OnboardingStep3 from '@/components/reusable/onboarding/OnboardingStep3'
import OnboardingStep4 from '@/components/reusable/onboarding/OnboardingStep4'

import LastDaysUsage from '@/components/reusable/analytics/LastDaysUsage'
import UpcomingBill from '@/components/reusable/analytics/UpcomingBill'
import MonthUsage from '@/components/reusable/analytics/MonthUsage'
import AccessToken from '@/components/reusable/analytics/AccessToken'
import UsageChart from '@/components/reusable/analytics/UsageChart'
import { observer } from 'mobx-react-lite'
import TokenStore from '@/store/TokenStore'

const Home = observer(() => {
  const { token, loadToken } = TokenStore
  useEffect(() => {
    if (!token) loadToken()
  }, [])
  return (
    <Flex direction="column" gap="50px">
      <OnboardingStep1 />
      <OnboardingStep2 />
      <OnboardingStep3 token={token} />
      <OnboardingStep4 />

      <AnalyticsContent_1 flex="1">
        <LastDaysUsage />
        <UpcomingBill />
      </AnalyticsContent_1>

      <AnalyticsContent_2 flex="1">
        <MonthUsage />
        <AccessToken token={token} />
      </AnalyticsContent_2>

      <UsageChart />
    </Flex>
  )
})

export default Home

const AnalyticsContent_1 = styled(Flex)`
  width: 100%;
  gap: 30px;
  align-items: stretch;
  height: 258px;

  @media (max-width: 1140px) {
    flex-direction: column;
    height: auto;
  }
`

const AnalyticsContent_2 = styled(Flex)`
  width: 100%;
  gap: 30px;
  align-items: stretch;
  height: 336px;

  @media (max-width: 1140px) {
    flex-direction: column;
    height: auto;
  }
`
