import { Card, Caption, Icon, Text, Button, Flex } from '@/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import OnboardingCard from './OnboardingCard'
import { getIp, searchIp } from '@/utils/api'
import JSONPreview from '../search/JSONPreview'

const OnboardingStep1 = ({ ip, token, url }) => {
  const isMobile = useMediaQuery('(max-width: 1140px)')

  return (
    <OnboardingCard
      step="1"
      title="Send your first request"
      subtitle={
        <Caption>Copy and run this cURL request in your terminal:</Caption>
      }
    >
      <DetailsCard
        color="dark"
        direction="row"
        align="center"
        justify="space-between"
        py="20px"
        gap="8px"
      >
        <Text
          color="success"
          font="monospace"
          weight="400"
          width="100%"
          style={{ wordBreak: 'break-all' }}
        >
          curl "{url}
        </Text>
        <Icon
          icon="copy"
          size={isMobile ? '24px' : '32px'}
          color="primary"
          onClick={() => {}}
        />
      </DetailsCard>

      <Details ip={ip} url={url} />

      <Button color="text" size="small" outline width="auto">
        Skip Onboarding
      </Button>
    </OnboardingCard>
  )
}

export default OnboardingStep1

const Details = ({ ip, url }) => {
  const [activeTab, setActiveTab] = useState('Free')
  const [data, setData] = useState(null)
  const tabs = data ? Object.keys(data) : []

  useEffect(() => {
    if (ip) {
      const promises = [getIp(ip), searchIp(ip)]
      Promise.all(promises).then(([free_data, search_data]) => {
        const plans_data = {}
        search_data.reduce((acc, plan_data) => {
          const data = plan_data.data_groups.reduce(
            (group_data_acc, group_data) => {
              group_data_acc[group_data.name.toLowerCase()] = group_data.data
              return group_data_acc
            },
            {}
          )
          plans_data[plan_data.name] = { ...acc, ...data }
          return { ...acc, ...data }
        }, {})
        setData({ Free: free_data, ...plans_data })
      })
    }
  }, [ip])

  return (
    <DetailsCard color="dark" gap="20px">
      <DetailsCardTop justify="space-between">
        <Points>
          <span />
          <span />
          <span />
        </Points>
        <Caption inline align="right">
          Show results for{' '}
          {tabs.map((tab, i) => (
            <TabText
              key={tab}
              onClick={() => setActiveTab(tab)}
              isActive={tab === activeTab}
            >
              {tab}
              {i !== tabs.length - 1 ? ', ' : ''}
            </TabText>
          ))}
        </Caption>
      </DetailsCardTop>
      <Text color="white" font="monospace" weight="400">
        # Get details for {ip}
      </Text>
      <Text color="success" font="monospace" weight="400">
        $ curl {url}
      </Text>
      <Flex direction="column" gap="8px">
        <JSONPreview
          icon={false}
          data={(data && data[activeTab]) || {}}
          color="white"
        />
        {/* {DETAILS.map(({ name, value }) => (
          <Text key={name} color="white" font="monospace" weight="400" inline>
            {name}: "
            <Text color="primary" font="monospace" weight="400" inline>
              {value}
            </Text>
            "
          </Text>
        ))} */}
      </Flex>
    </DetailsCard>
  )
}

// const DETAILS = [
//   { name: 'hostname', value: 'dns.google' },
//   { name: 'city', value: 'Mountain View' },
//   { name: 'region', value: 'California' },
//   { name: 'country', value: 'US' },
//   { name: 'loc', value: '37.3860,-122.0838' },
//   { name: 'postal', value: '94035' },
//   { name: 'timezone', value: 'America/Los_Angeles' },
// ]

const DetailsCard = styled(Card)`
  width: 100%;

  @media (max-width: 1140px) {
    padding: 16px;
    gap: 16px;

    ${Text} {
      font-size: 12px;
      line-height: 150%;
    }

    ${Caption} {
      font-size: 10px;
      line-height: 150%;
    }
  }
`

const DetailsCardTop = styled(Flex)`
  width: 100%;
  align-items: center;
  @media (max-width: 1140px) {
    align-items: flex-start;
    gap: 64px;
  }
`

const Points = styled(Flex)`
  gap: 10px;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    @media (max-width: 1140px) {
      width: 6px;
      height: 6px;
    }
  }
  & :nth-child(1) {
    background: ${({ theme }) => theme.colors.primary};
  }
  & :nth-child(2) {
    background: ${({ theme }) => theme.colors.success};
  }
  & :nth-child(3) {
    background: ${({ theme }) => theme.colors.secondary};
  }
`

const TabText = styled(Caption)`
  display: inline;
  font-weight: 700;
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'unset')};
  cursor: pointer;
`
