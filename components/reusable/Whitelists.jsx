import styled from 'styled-components'
import { Flex, Card, H6, Caption, Textarea, Button } from '@/core'

const Whitelists = () => {
  return (
    <Card color="dark" width="100%">
      <Flex gap="45px" align="stretch" flex="1 1">
        <DomainsWhitelist />
        <Divider />
        <IpsWhitelist />
      </Flex>
    </Card>
  )
}

export default Whitelists

const DomainsWhitelist = () => {
  return (
    <Flex direction="column" gap="30px">
      <H6 color="white">Whitelist Referring Domains</H6>
      <Info>
        If you're using IPInfo on your website, you can use this feature to only
        allow requests made from certain domain names. Requests not originating
        from these domain names will be blocked. Note that any subdomain in the
        whitelisted domain will also be able to make requests.
      </Info>
      <Textarea
        variant="dark"
        placeholder={'Eg.\nip.service\nhost.info'}
        rows="4"
      />
      <Caption inline>
        <Caption color="white" inline>
          Note:{' '}
        </Caption>
        IPInfo uses Referer header to determine where the request is coming
        from.
      </Caption>
    </Flex>
  )
}

const IpsWhitelist = () => {
  return (
    <Flex direction="column" gap="30px">
      <H6 color="white">Whitelist Requesting IPs</H6>
      <Info>
        You can also whitelist requesting IPs. We will block the requests if the
        IP isn't in the whitelist. You can specify IPs individually or use CIDR
        notation.
      </Info>
      <Textarea variant="dark" placeholder={'Eg.\n1.1.1.1\n8.8.8.8'} rows="4" />
      <Button>Save</Button>
    </Flex>
  )
}

const Divider = styled.div`
  width: 1px;
  max-width: 1px;
  background: rgba(255, 255, 255, 0.05);
`

const Info = styled(Caption)`
  height: 84px;
`
