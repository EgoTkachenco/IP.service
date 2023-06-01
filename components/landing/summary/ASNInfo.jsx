import { Flex, H3, Text } from '@/core'

const ASNInfo = () => {
  return (
    <Flex direction="column" gap="32px">
      <H3>What is an ASN?</H3>
      <Flex gap="40px">
        <Text>
          Autonomous System Numbers (ASNs) are assigned to entities such as
          Internet Service Providers and other large organizations that control
          blocks of IP addresses. This network page, and the organization field
          that's shown on the main IP address information page and also returned
          in the geolocation API are based on the ASN.
        </Text>
        <Text>
          The ASN details will often correspond to the IP address owner, but for
          smaller organizations it may be that organization's parent, or their
          ISP. Find out more about AS15169 at robtex.
        </Text>
      </Flex>
    </Flex>
  )
}

export default ASNInfo
