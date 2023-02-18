import styled from 'styled-components'
import { Flex } from '@/core'
import SearchResult from '@/components/reusable/search/SearchResult'
import SearchTop from '@/components/reusable/search/SearchTop'

const Search = () => {
  return (
    <Wrapper>
      <SearchTop />
      <SearchResult />
    </Wrapper>
  )
}

export default Search

const Wrapper = styled(Flex)`
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (max-width: 1140px) {
    gap: 48px;
  }
`
