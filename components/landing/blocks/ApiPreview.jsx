import { useState } from 'react'
import { Flex, Text, Icon, Card, Input, Chip } from '@/core'
import { BlockInner } from './Block'
import { ObjectJSON } from '@/components/reusable/search/JSONPreview'
import { useIP } from '@/hooks'

const ApiPreview = () => {
  const { ip, setIp, data, isFetch } = useIP('')
  const [country, city, postal, address] = data?.address
    ? data.address.split(', ')
    : []
  return (
    <BlockInner>
      <Card color="dark" p="40px" gap="32px" width="100%">
        <Input
          variant="dark"
          disabled
          width="100%"
          value={data?.ip || ip}
          leftSlot={<Icon icon="search" size="16px" color="text" />}
        />
        <Flex flex="0 1 40%" width="100%">
          <Flex direction="column" gap="8px">
            <ObjectJSON name="ip" value={data?.ip} textColor="white" />
            <ObjectJSON
              name="hostname"
              value={data?.asn?.domain}
              textColor="white"
            />
            <ObjectJSON name="city" value={city} textColor="white" />
            <ObjectJSON name="region" value="" textColor="white" />
            <ObjectJSON
              name="country"
              value={data?.country}
              textColor="white"
            />
          </Flex>
          <Flex direction="column" gap="8px">
            <ObjectJSON
              name="loc"
              // value="37.3860,-122.0838"
              value=""
              textColor="white"
            />
            <ObjectJSON name="org" value={data?.asn?.name} textColor="white" />
            <ObjectJSON name="postal" value={postal} textColor="white" />
            <ObjectJSON
              name="timezone"
              value=""
              // value="America/Los_Angeles"
              textColor="white"
            />
          </Flex>
        </Flex>
        <Flex gap="20px" pt="10px">
          <Chip type="dark" onClick={() => setIp('')}>
            Your IP
          </Chip>
          <Chip type="dark" onClick={() => setIp('176.120.24.58')}>
            215.204.222.212
          </Chip>
          <Chip type="dark" onClick={() => setIp('247.193.70.173')}>
            247.193.70.173
          </Chip>
          <Chip type="dark" onClick={() => setIp('66.131.120.255')}>
            66.131.120.255
          </Chip>
        </Flex>
      </Card>
    </BlockInner>
  )
}

export default ApiPreview
