import styled from 'styled-components'
import { Flex } from '@/core'
import SearchResult from '@/components/reusable/search/SearchResult'
import SearchTop from '@/components/reusable/search/SearchTop'
import { observer } from 'mobx-react-lite'
import SearchStore from '@/store/SearchStore'
import { useEffect } from 'react'

const Search = observer(() => {
  const { ip, result, getIpInfo } = SearchStore
  useEffect(() => {
    if (!result) getIpInfo()
  }, [])
  return (
    <Wrapper>
      <SearchTop ip={ip} result={result} />
      <SearchResult result={result} />
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
