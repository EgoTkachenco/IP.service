import { Flex, Text, Icon, Card, Input } from '@/core'
import { BlockInner } from './Block'

const ApiPreview = () => {
  return (
    <BlockInner>
      <Card color="dark" p="40px" gap="32px" width="100%">
        <Input
          variant="dark"
          disabled
          width="100%"
          value="8.8.8.8"
          leftSlot={<Icon icon="search" size="16px" color="text" />}
        />
        <Flex direction="column" gap="8px">
          <Text>ip:"8.8.8.8",</Text>
          <Text>hostname:"dns.google",</Text>
          <Text>city:"Mountain View",</Text>
          <Text>region:"California",</Text>
          <Text>country:"US",</Text>
        </Flex>
      </Card>
    </BlockInner>
  )
}

export default ApiPreview
