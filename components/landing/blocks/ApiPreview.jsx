import { useState } from 'react'
import { Flex, Text, Icon, Card, Input, Chip } from '@/core'
import { BlockInner } from './Block'
import { ObjectJSON } from '@/components/reusable/searchResult/JSONPreview'

const ApiPreview = () => {
  const [ip, setIp] = useState("8.8.8.8")
  return (
    <BlockInner>
      <Card color="dark" p="40px" gap="32px" width="100%">
        <Input
          variant="dark"
          disabled
          width="100%"
          value={ip}
          leftSlot={<Icon icon="search" size="16px" color="text" />}
        />
        <Flex flex="0 1 40%" width="100%">
          <Flex direction="column" gap="8px">
            <ObjectJSON name="ip" value="8.8.8.8" textColor="white" />
            <ObjectJSON name="hostname" value="dns.google" textColor="white" />
            <ObjectJSON name="city" value="Mountain View" textColor="white" />
            <ObjectJSON name="region" value="California" textColor="white" />
            <ObjectJSON name="country" value="US" textColor="white" />
          </Flex>
          <Flex direction="column" gap="8px">
            <ObjectJSON
              name="loc"
              value="37.3860,-122.0838"
              textColor="white"
            />
            <ObjectJSON
              name="org"
              value="AS15169 Google LLC"
              textColor="white"
            />
            <ObjectJSON name="postal" value="94035" textColor="white" />
            <ObjectJSON
              name="timezone"
              value="America/Los_Angeles"
              textColor="white"
            />
          </Flex>
        </Flex>
        <Flex gap="20px" pt="10px">
          <Chip type="dark" onClick={() => setIp("8.8.8.8")}>Your IP</Chip>
          <Chip type="dark" onClick={() => setIp("215.204.222.212")}>215.204.222.212</Chip>
          <Chip type="dark" onClick={() => setIp("247.193.70.173")}>247.193.70.173</Chip>
          <Chip type="dark" onClick={() => setIp("66.131.120.255")}>66.131.120.255</Chip>
        </Flex>
      </Card>
    </BlockInner>
  )
}

export default ApiPreview
