import { Flex, Text, Button } from '@/core'
import SearchResult from '@/components/reusable/searchResult'
const Search = () => {
  return (
    <Flex direction="column" gap="30px" width="100%">
      <Flex justify="space-between" align="center" width="100%">
        <Text weight="600">Showing results for 8.8.8.8</Text>
        <Flex gap="16px">
          <Button outline color="dark" size="small-text">
            Copy API link
          </Button>
          <Button outline color="dark" size="small-text">
            Copy complete JSON
          </Button>
        </Flex>
      </Flex>

      <SearchResult />
    </Flex>
  )
}

export default Search
