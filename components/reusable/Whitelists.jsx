import styled from 'styled-components'
import { Flex, Card, H6, Caption, Textarea, Button } from '@/core'
import { useForm } from '@mantine/form'
import { validateIP } from '@/utils'

const Whitelists = ({
  white_domain_list,
  white_ip_list,
  onChange,
  disabled,
}) => {
  const form = useForm({
    initialValues: {
      white_domain_list: white_domain_list.join('\n'),
      white_ip_list: white_ip_list.join('\n'),
    },

    validate: {
      white_domain_list: (value) => null,
      white_ip_list: (value) => {
        const isAllIPValid = value
          .split('\n')
          .filter((el) => !!el)
          .reduce((acc, ip) => (!acc ? acc : validateIP(ip)), true)
        if (!isAllIPValid) return 'Invalid ip'
        return null
      },
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
    })
  })
  return (
    <CardContainer onSubmit={onSubmit}>
      <DomainsWhitelist {...form.getInputProps('white_domain_list')} />
      <IpsWhitelist
        {...form.getInputProps('white_ip_list')}
        disabled={disabled}
      />
    </CardContainer>
  )
}

export default Whitelists

const DomainsWhitelist = ({ value, onChange, error }) => {
  return (
    <DomainCard color="dark">
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
    </DomainCard>
  )
}

const IpsWhitelist = ({ value, onChange, error, disabled }) => {
  return (
    <IPCard color="dark">
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
      <Button type="submit" disabled={disabled}>
        Save
      </Button>
    </IPCard>
  )
}

const CardContainer = styled.form`
  display: flex;
  & > div {
    flex: 1;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 16px;
  }
`

const DomainCard = styled(Card)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  gap: 30px;

  @media (max-width: 1140px) {
    border-radius: 8px;
    gap: 16px;
  }
`
const IPCard = styled(Card)`
  position: relative;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  gap: 30px;

  @media (max-width: 1140px) {
    border-radius: 8px;
    gap: 16px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 30px;
    left: 0;
    width: 1px;
    height: calc(100% - 60px);
    max-width: 1px;
    background: rgba(255, 255, 255, 0.05);
  }
`

const Info = styled(Caption)`
  height: 84px;

  @media (max-width: 1140px) {
    height: auto;
  }
`
