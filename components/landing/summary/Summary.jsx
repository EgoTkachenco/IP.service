import { useState, useEffect } from 'react'
import { BlockInner } from '../blocks/Block'
import { allService } from '@/utils/api'
import { validateIP } from '@/utils'
import { Flex, Text, H1, H3, Input, Icon, Card, Tooltip, H6 } from '@/core'
import Image from 'next/image'
import styled from 'styled-components'
import { useObserverNavigation, useService } from '@/hooks'
import { useForm } from '@mantine/form'

import CommonSummary from './CommonSummary'
import GeolocationSummary from './GeolocationSummary'
import PrivacySummary from './PrivacySummary'
import ASNSummary from './ASNSummary'
import CompanySummary from './CompanySummary'
import CarrierSummary from './CarrierSummary'
import AbuseSummary from './AbuseSummary'

const list = [
  'Summary',
  'Geolocation',
  'Device info',
  'Privacy',
  'ASN',
  'Company',
  'Carrier',
  'Abuse',
  'Q&A',
]

const getAllService = (data) => {
  const params = {}
  if (validateIP(data)) params.ip = data
  else params.domain = data
  return allService(params)
}

const Summary = () => {
  const { ip, setIp, data, isFetch, userIP } = useService('', getAllService)
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

  console.log('all service', data)

  const onSubmit = form.onSubmit((values) => !isFetch && setIp(values.search))

  useEffect(() => {
    form.setFieldValue('search', ip)
  }, [ip])

  const [activeBlock, setActiveBlock] = useObserverNavigation('content')
  return (
    <Wrapper>
      <SummaryTop
        ip={data?.ip}
        flag={data?.geolocation?.flag}
        address={[
          data?.geolocation?.city,
          data?.geolocation?.name,
          data?.geolocation?.name_country,
        ].join(', ')}
      />

      <Container>
        <Navigation
          list={list}
          currentBlock={activeBlock}
          onNavigationChange={setActiveBlock}
          form={form}
          onSubmit={onSubmit}
        />
        <Content id="content">
          <CommonSummary id="block-0" data={data} />
          {data?.geolocation && (
            <GeolocationSummary id="block-1" data={data?.geolocation} />
          )}
          {data?.privacy && (
            <PrivacySummary id="block-2" data={data?.privacy} />
          )}
          {data?.asn && <ASNSummary id="block-3" data={data?.asn} />}
          {data?.company && (
            <CompanySummary id="block-4" data={data?.company} />
          )}
          {/* {data?.carrier && ( */}
          <CarrierSummary id="block-5" data={data?.carrier} />
          {/* )} */}
          {data?.abuse && <AbuseSummary id="block-6" data={data?.abuse} />}
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Summary

const SummaryTop = ({ ip, flag, address }) => (
  <Flex direction="column" align="center" gap="12px">
    <Image
      src="/map-point.svg"
      width={120}
      height={120}
      style={{ marginBottom: '28px' }}
      alt="map point"
    />
    <Text weight={600}>My IP address</Text>
    <H1 color="dark" as="p">
      {ip}
    </H1>
    <Flex gap="12px" align="center">
      <Image src={flag} width={21} height={15} alt="UA" />
      <Text weight={600}>{address}</Text>
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
            <Icon icon="search" size="18px" color="text" onClick={onSubmit} />
          }
        />
      </form>

      <List>
        {list.map((item, i) => (
          <ListItem
            key={i}
            active={i == currentBlock}
            onClick={() => onNavigationChange(i)}
          >
            {item}
          </ListItem>
        ))}
      </List>
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
`
const Content = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
  gap: 60px;
`
const NavigationWrapper = styled(Flex)`
  max-width: 360px;
  width: 360px;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 32px;
`
const List = styled(Flex)`
  width: 100%;
  flex-direction: column;
  padding: 14px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
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
