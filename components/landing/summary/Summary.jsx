import { useEffect, useMemo } from 'react'
import { BlockInner } from '../blocks/Block'
import { validateASN } from '@/utils'
import { Flex, Text, H1, Input, Icon } from '@/core'
import Image from 'next/image'
import styled from 'styled-components'
import { useScrollNavigation } from '@/hooks'
import { useForm } from '@mantine/form'

import CommonSummary from './CommonSummary'
import CommonASNSummary from './CommonASNSummary'
import GeolocationSummary from './GeolocationSummary'
import PrivacySummary from './PrivacySummary'
import ASNSummary from './ASNSummary'
import CompanySummary from './CompanySummary'
import CarrierSummary from './CarrierSummary'
import AbuseSummary from './AbuseSummary'
import WhoisSummary from './WhoisSummary'
import HostedDomainsSummary from './HostedDomainsSummary'
import PeersSummary from './PeersSummary'
import UpstreamsSummary from './UpstreamsSummary'
import DownstreamsSummary from './DownstreamsSummary'
import RangesSummary from './RangesSummary'
import FAQ from './FAQ'

import RelatedNetworks from './RelatedNetworks'
import ASNInfo from './ASNInfo'
import GetStarted from './GetStarted'
import DeviceInfo from './DeviceInfo'

import Link from 'next/link'
import routes from '@/constants/routes'
import { useRouter } from 'next/router'

const Summary = ({ ip, data, isUserIp = false }) => {
  const isInfo = !!data
  const isASN = validateASN(ip)
  const list = useMemo(() => {
    if (!isInfo) return []
    let block_number = 0
    const list = []
    const getBlockId = () => {
      const result = 'block-' + block_number
      block_number++
      return result
    }
    const addBlock = (title, Cmp, data) => {
      const id = getBlockId()
      list.push({
        title,
        children: <Cmp id={id} key={id} data={data} />,
      })
    }
    if (isASN) addBlock('Summary', CommonASNSummary, data)
    else addBlock('Summary', CommonSummary, data)

    if (isASN) {
      addBlock('IP Address Ranges', RangesSummary, data?.asn)
      addBlock('WHOIS Details', WhoisSummary, data?.whois)
      addBlock('Hosted Domains', HostedDomainsSummary, data?.reverse)
      addBlock('Peers', PeersSummary, data?.asn?.peers)
      addBlock('Upstreams', UpstreamsSummary, data?.asn?.upstream)
      addBlock('Downstreams', DownstreamsSummary, data?.asn?.downstream)
    } else {
      addBlock('Geolocation', GeolocationSummary, data?.geolocation)

      if (isUserIp) addBlock('Device info', DeviceInfo, undefined)

      addBlock('Privacy', PrivacySummary, data?.privacy)
      addBlock('ASN', ASNSummary, data?.asn)
      addBlock('Company', CompanySummary, data?.company)

      if (data?.carrier) addBlock('Carrier', CarrierSummary, data?.carrier)

      addBlock('Abuse', AbuseSummary, data?.abuse)
    }
    addBlock('Q&A', FAQ, undefined)
    return list
  }, [data])
  const router = useRouter()

  const form = useForm({
    initialValues: {
      search: '',
    },

    validate: {
      search: (value) => {
        if (!value) return 'Required'
        return null
      },
    },
  })
  useEffect(() => {
    form.setFieldValue('search', ip)
  }, [ip])

  const onSubmit = form.onSubmit((values) => onIPChange(values.search))
  const [activeBlock, setActiveBlock, reset] = useScrollNavigation(
    '#content > div',
    list
  )

  const onIPChange = (ip) => router.push(`${routes.summary}/${ip}`)

  return (
    <Wrapper>
      {isASN ? (
        <SummaryTopASN
          asn={data?.asn?.ashandle || data?.whois?.ashandle || ip}
          subtitle={[
            (data?.asn?.organisation && data?.asn?.organisation['org-name']) ||
              (data?.whois?.organisation &&
                data?.whois?.organisation['org-name']),
            data?.asn?.domain,
          ]
            .filter((el) => el)
            .join(' - ')}
        />
      ) : (
        <SummaryTopIP
          ip={ip}
          flag={data?.geolocation?.flag}
          address={[
            data?.geolocation?.city,
            data?.geolocation?.name,
            data?.geolocation?.name_country,
          ]
            .filter((el) => el)
            .join(', ')}
          isInfo={isInfo}
          isUserIP={isUserIp}
        />
      )}

      <Container>
        <Navigation
          list={list.map((el) => el.title)}
          currentBlock={activeBlock}
          onNavigationChange={setActiveBlock}
          form={form}
          onSubmit={onSubmit}
          ip={ip}
          isUserIp={isUserIp}
        />
        {isInfo ? (
          <Content id="content">{list.map((el) => el.children)}</Content>
        ) : (
          <Flex align="center" justify="center" width="100%">
            <Text align="center" weight={500}>
              No data found
            </Text>
          </Flex>
        )}
      </Container>
      {isASN && <RelatedNetworks onNetworkChange={(asn) => onIPChange(asn)} />}
      {isASN && <ASNInfo />}
      <GetStarted />
    </Wrapper>
  )
}

export default Summary

const SummaryTopIP = ({ ip, flag, address, isInfo, isUserIP }) => (
  <Flex direction="column" align="center" gap="12px">
    <Image
      src="/map-point.svg"
      width={120}
      height={120}
      style={{ marginBottom: '28px' }}
      alt="map point"
    />
    <Text weight={600}>{isUserIP ? 'My ' : ''}IP address</Text>
    <H1 color="dark" as="p">
      {ip}
    </H1>
    {isInfo && (
      <>
        <Flex gap="12px" align="center">
          {!!flag && <Image src={flag} width={21} height={15} alt={flag} />}
          <Text weight={600}>{address}</Text>
        </Flex>
      </>
    )}
  </Flex>
)

const SummaryTopASN = ({ asn, subtitle }) => (
  <Flex direction="column" align="center" gap="12px">
    <Text weight={600}>AS number details</Text>
    <H1 color="dark" as="p">
      {asn}
    </H1>
    <Flex gap="12px" align="center">
      <Text weight={600}>{subtitle}</Text>
    </Flex>
  </Flex>
)

const Navigation = ({
  list,
  currentBlock,
  onNavigationChange,
  form,
  onSubmit,
  ip,
  isUserIp,
}) => {
  return (
    <NavigationWrapper>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <Input
          placeholder="Search..."
          noErrorMessage={true}
          {...form.getInputProps('search')}
          rightSlot={
            <SearchIconContainer>
              <Icon
                icon="search"
                size="18px"
                color="white"
                onClick={onSubmit}
              />
            </SearchIconContainer>
          }
        />
      </form>

      {list.length > 0 && (
        <List>
          {list.map((item, i) => (
            <Link
              shallow={true}
              key={i}
              href={routes.summary + (isUserIp ? '' : '/' + ip) + '?block=' + i}
            >
              <ListItem
                key={i}
                active={i == currentBlock}
                onClick={() => onNavigationChange(i)}
              >
                {item}
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </NavigationWrapper>
  )
}

const Wrapper = styled(BlockInner)`
  margin: 80px auto;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`
const Container = styled(Flex)`
  gap: 30px;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`
const Content = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
  gap: 60px;
`
const NavigationWrapper = styled(Flex)`
  max-width: 360px;
  min-width: 360px;
  width: 360px;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 32px;

  @media (max-width: 1140px) {
    position: static;
    min-width: unset;
    max-width: unset;
    width: 100%;
  }
`
const List = styled(Flex)`
  width: 100%;
  flex-direction: column;
  padding: 14px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  align-items: stretch;

  @media (max-width: 1140px) {
    display: none;
  }
`
const ListItem = styled(Flex)`
  width: 100%;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.text};
  border-radius: 8px;
  padding: 14px 22px;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  cursor: pointer;
`

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
`
