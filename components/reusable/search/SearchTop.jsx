import styled from 'styled-components'
import { Flex, Text, Button } from '@/core'

const SearchTop = () => {
  return (
    <Wrapper>
      <Text weight="600">Showing results for 8.8.8.8</Text>
      <SearchTopButtons gap="16px">
        <Button outline color="dark" size="small-text">
          Copy API link
        </Button>
        <Button outline color="dark" size="small-text">
          Copy complete JSON
        </Button>
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
