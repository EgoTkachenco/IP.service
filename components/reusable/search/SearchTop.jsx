import styled from 'styled-components'
import { Flex, Text } from '@/core'
import CopyButton from '@/components/reusable/CopyButton'

const SearchTop = ({ ip, result }) => {
  if (!ip) return ''

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}?ip=${ip}`

  return (
    <Wrapper>
      <Text weight="600">Showing results for {ip}</Text>
      <SearchTopButtons gap="16px">
        <CopyButton outline color="dark" size="small-text" data={apiUrl}>
          Copy API link
        </CopyButton>
        <CopyButton outline color="dark" size="small-text" data={result}>
          Copy complete JSON
        </CopyButton>
      </SearchTopButtons>
    </Wrapper>
  )
}

export default SearchTop

const Wrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`

const SearchTopButtons = styled(Flex)`
  gap: 16px;

  @media (max-width: 1140px) {
    width: 100%;
    & > button {
      height: 47px;
      padding: 0;
    }
  }
`
