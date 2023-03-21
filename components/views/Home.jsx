import styled from 'styled-components'
import { useEffect } from 'react'
import { Flex } from '@/core'
import OnboardingStep1 from '@/components/reusable/onboarding/OnboardingStep1'
import OnboardingStep2 from '@/components/reusable/onboarding/OnboardingStep2'
import OnboardingStep3 from '@/components/reusable/onboarding/OnboardingStep3'

import LastDaysUsage from '@/components/reusable/analytics/LastDaysUsage'
import UpcomingBill from '@/components/reusable/analytics/UpcomingBill'
import MonthUsage from '@/components/reusable/analytics/MonthUsage'
import AccessToken from '@/components/reusable/analytics/AccessToken'
import UsageChart from '@/components/reusable/analytics/UsageChart'
import { observer } from 'mobx-react-lite'
import AnalyticsStore from '@/store/AnalyticsStore'
import SearchStore from '@/store/SearchStore'
import BillingStore from '@/store/BillingStore'

const Home = observer(() => {
  const { analytics, usage, duration, loadAnalytics, changeDuration } =
    AnalyticsStore
  const { userIp: ip, getIpInfo } = SearchStore
  const { isFreePlan, setUserTrial } = BillingStore
  useEffect(() => {
    loadAnalytics()
    if (!ip) getIpInfo()
  }, [])

  const host = 'https://spyskey.com'
  const url = `${host}/${ip}?token=${analytics?.token}`
  return (
    <Flex direction="column" gap="50px">
      <OnboardingStep1 url={url} ip={ip} token={analytics?.token} />
      <OnboardingStep2 host={host} token={analytics?.token} />
      {isFreePlan && <OnboardingStep3 setTrial={() => setUserTrial()} />}

      <AnalyticsContent_1 flex="1">
        <LastDaysUsage value={analytics?.weekUsage} today={analytics?.today} />
        <UpcomingBill planName={analytics?.billing.plan.name} price={0} />
      </AnalyticsContent_1>

      <AnalyticsContent_2 flex="1">
        <MonthUsage
          limit={analytics?.billing.data.limit || 0}
          value={analytics?.billing.data.requests || 0}
        />
        <AccessToken token={analytics?.token} host={host} />
      </AnalyticsContent_2>

      <UsageChart
        data={usage}
        duration={duration}
        onDurationChange={changeDuration}
      />
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
