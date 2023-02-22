import styled from 'styled-components'
import { Flex, Card, H6, Caption, Textarea, Button } from '@/core'
import { useForm } from '@mantine/form'

const Whitelists = ({ white_domain_list, white_ip_list, onChange }) => {
  console.log(white_domain_list, white_ip_list)
  const form = useForm({
    initialValues: {
      white_domain_list: white_domain_list.join('\n'),
      white_ip_list: white_ip_list.join('\n'),
    },

    validate: {
      white_domain_list: (value) => null,
      white_ip_list: (value) => null,
    },
  })
  const onSubmit = form.onSubmit((values) => {
    onChange({
      white_domain_list: values.white_domain_list
        .split('\n')
        .filter((el) => !!el),
      white_ip_list: values.white_ip_list.split('\n').filter((el) => !!el),
    }).catch((error) => {
      if (error.errors) form.setErrors(error.errors)
      // else form.setErrors('identifier', error.message)
    })
  })
  return (
    <Card color="dark" width="100%">
      <form onSubmit={onSubmit}>
        <Flex gap="45px" align="stretch" flex="1 1">
          <DomainsWhitelist {...form.getInputProps('white_domain_list')} />
          <Divider />
          <IpsWhitelist {...form.getInputProps('white_ip_list')} />
        </Flex>
      </form>
    </Card>
  )
}

export default Whitelists

const DomainsWhitelist = ({ value, onChange, error }) => {
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
        value={value}
        onChange={onChange}
        error={error}
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

const IpsWhitelist = ({ value, onChange, error }) => {
  return (
    <Flex direction="column" gap="30px">
      <H6 color="white">Whitelist Requesting IPs</H6>
      <Info>
        You can also whitelist requesting IPs. We will block the requests if the
        IP isn't in the whitelist. You can specify IPs individually or use CIDR
        notation.
      </Info>
      <Textarea
        variant="dark"
        placeholder={'Eg.\n1.1.1.1\n8.8.8.8'}
        rows="4"
        value={value}
        onChange={onChange}
        error={error}
      />
      <Button type="submit">Save</Button>
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
