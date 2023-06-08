import styled from 'styled-components'
import { Flex } from '@/core'
import SearchResult from '@/components/reusable/search/SearchResult'
import SearchTop from '@/components/reusable/search/SearchTop'
import { observer } from 'mobx-react-lite'
import SearchStore from '@/store/SearchStore'
import BillingStore from '@/store/BillingStore'
import { useEffect } from 'react'
import TokenStore from '@/store/TokenStore'

const Search = observer(() => {
  const { ip, result, getIpInfo } = SearchStore
  const { currentPlan, setUserPlan } = BillingStore
  const { token, loadToken } = TokenStore
  useEffect(() => {
    if (!result) getIpInfo()
    if (!token) loadToken()
  }, [])
  return (
    <Wrapper>
      <SearchTop token={token} ip={ip} result={result} />
      <SearchResult
        currentPlan={currentPlan}
        changePlan={(plan) => setUserPlan(plan, 'month')}
        result={result}
      />
    </Wrapper>
  )
})

export default Search

const Wrapper = styled(Flex)`
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (max-width: 1140px) {
    gap: 48px;
  }
`
