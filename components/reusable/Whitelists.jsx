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
        If you have Spyskey implemented on your website, you can utilize this
        feature to permit requests only from specified domain names. Any
        requests not coming from these whitelisted domains will be denied.
        Please be aware that any subdomains within the approved domains will
        also have the ability to send requests.
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
        Spyskey determines the origin of the request by utilizing the Referer
        header.
      </Caption>
    </DomainCard>
  )
}

const IpsWhitelist = ({ value, onChange, error, disabled }) => {
  return (
    <IPCard color="dark">
      <H6 color="white">Whitelist Requesting IPs</H6>
      <Info>
        You also have the option to approve specific requesting IP addresses.
        Any requests from IPs not included in this whitelist will be denied. IP
        addresses can be specified individually or in CIDR notation.
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
  height: 94px;

  @media (max-width: 1140px) {
    height: auto;
  }
`
