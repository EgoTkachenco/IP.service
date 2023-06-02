import { useState, useEffect } from 'react'
import { BlockInner } from '../blocks/Block'
import { allService } from '@/utils/api'
import { validateIP, validateASN } from '@/utils'
import { Flex, Text, H1, H3, Input, Icon, Card, Tooltip, H6 } from '@/core'
import Image from 'next/image'
import styled from 'styled-components'
import { useObserverNavigation, useService } from '@/hooks'
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

const getAllService = (data) => {
  const params = {}
  if (validateIP(data)) params.ip = data
  else params.domain = data
  return allService(params)
}

const Summary = () => {
  const { ip, setIp, data, isFetch, userIP } = useService('', getAllService)
  const [list, setList] = useState([])

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

  const onSubmit = form.onSubmit((values) => !isFetch && setIp(values.search))
  const isInfo = isFetch ? null : !!data
  const isASN = validateASN(ip)
  const [activeBlock, setActiveBlock] = useObserverNavigation(
    'content',
    isFetch ? null : list
  )

  useEffect(() => {
    let block_number = 0
    const list = []
    const getBlockId = () => {
      const result = 'block-' + block_number
      block_number++
      return result
    }
    if (isASN)
      list.push({
        title: 'Summary',
        children: (
          <CommonASNSummary id={getBlockId()} key={getBlockId()} data={data} />
        ),
      })
    else
      list.push({
        title: 'Summary',
        children: (
          <CommonSummary id={getBlockId()} key={getBlockId()} data={data} />
        ),
      })

    if (isASN) {
      list.push({
        title: 'IP Address Ranges',
        children: (
          <RangesSummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.asn}
          />
        ),
      })
      list.push({
        title: 'WHOIS Details',
        children: (
          <WhoisSummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.whois}
          />
        ),
      })
      list.push({
        title: 'Hosted Domains',
        children: (
          <HostedDomainsSummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.reverse}
          />
        ),
      })
      list.push({
        title: 'Peers',
        children: (
          <PeersSummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.asn?.peers}
          />
        ),
      })
      list.push({
        title: 'Upstreams',
        children: (
          <UpstreamsSummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.asn?.upstream}
          />
        ),
      })
      list.push({
        title: 'Downstreams',
        children: (
          <DownstreamsSummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.asn?.downstream}
          />
        ),
      })
    } else {
      list.push({
        title: 'Geolocation',
        children: (
          <GeolocationSummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.geolocation}
          />
        ),
      })
      if (ip === userIP)
        list.push({
          title: 'Device info',
          children: <DeviceInfo id={getBlockId()} key={getBlockId()} />,
        })
      list.push({
        title: 'Privacy',
        children: (
          <PrivacySummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.privacy}
          />
        ),
      })
      list.push({
        title: 'ASN',
        children: (
          <ASNSummary id={getBlockId()} key={getBlockId()} data={data?.asn} />
        ),
      })
      list.push({
        title: 'Company',
        children: (
          <CompanySummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.company}
          />
        ),
      })
      if (data?.carrier)
        list.push({
          title: 'Carrier',
          children: (
            <CarrierSummary
              id={getBlockId()}
              key={getBlockId()}
              data={data?.carrier}
            />
          ),
        })
      list.push({
        title: 'Abuse',
        children: (
          <AbuseSummary
            id={getBlockId()}
            key={getBlockId()}
            data={data?.abuse}
          />
        ),
      })
      list.push({
        title: 'Q&A',
        children: <FAQ id={getBlockId()} key={getBlockId()} />,
      })
    }

    setList(list)
    return () => {
      setList([])
    }
  }, [data])

  return (
    <Wrapper>
      {isASN ? (
        <SummaryTopASN
          asn={data?.asn?.ashandle}
          subtitle={[data?.asn?.organisation['org-name'], data?.asn?.domain]
            .filter((el) => el)
            .join(' - ')}
        />
      ) : (
        <SummaryTopIP
          ip={data?.ip}
          flag={data?.geolocation?.flag}
          address={[
            data?.geolocation?.city,
            data?.geolocation?.name,
            data?.geolocation?.name_country,
          ].join(', ')}
          isFetch={!isInfo}
          isUserIP={ip === userIP}
        />
      )}

      <Container>
        <Navigation
          list={list.map((el) => el.title)}
          currentBlock={activeBlock}
          onNavigationChange={setActiveBlock}
          form={form}
          onSubmit={onSubmit}
        />
        {isInfo && (
          <Content id="content">{list.map((el) => el.children)}</Content>
        )}
      </Container>
      {isASN && <RelatedNetworks onNetworkChange={(asn) => setIp(asn)} />}
      {isASN && <ASNInfo />}
      <GetStarted />
    </Wrapper>
  )
}

export default Summary

const SummaryTopIP = ({ ip, flag, address, isFetch, isUserIP }) => (
  <Flex direction="column" align="center" gap="12px">
    <Image
      src="/map-point.svg"
      width={120}
      height={120}
      style={{ marginBottom: '28px' }}
      alt="map point"
    />
    <Text weight={600}>{isUserIP ? 'My ' : ''}IP address</Text>

    {isFetch && <Text>Fetching</Text>}
    {!isFetch && (
      <>
        <H1 color="dark" as="p">
          {ip}
        </H1>
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
            <Link key={i} href={routes.summary + '#block-' + i}>
              <ListItem
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
