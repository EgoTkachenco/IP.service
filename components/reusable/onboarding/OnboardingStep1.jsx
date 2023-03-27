import { Card, Caption, Icon, Text, Button, Flex } from '@/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import OnboardingCard from './OnboardingCard'
import { getIp, searchIp } from '@/utils/api'
import JSONPreview from '../search/JSONPreview'
import { useClipboard } from '@mantine/hooks'

const OnboardingStep1 = ({ ip, token, url }) => {
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
          curl "{url}"
        </Text>
        <CopyIconButton data={url} />
      </DetailsCard>

      <Details ip={ip} url={url} />

      <Button color="text" size="small" outline width="auto">
        Skip Onboarding
      </Button>
    </OnboardingCard>
  )
}

const CopyIconButton = ({ data }) => {
  const clipboard = useClipboard({ timeout: 1000 })
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <Icon
      icon={clipboard.copied ? 'done' : 'copy'}
      size={isMobile ? '24px' : '32px'}
      color={clipboard.copied ? 'success' : 'primary'}
      onClick={() => clipboard.copy(data)}
    />
  )
}

export default OnboardingStep1

const Details = ({ ip, url }) => {
  const [activeTab, setActiveTab] = useState('Free')
  const [data, setData] = useState({})
  const tabs = data ? Object.keys(data) : []

  useEffect(() => {
    if (ip) {
      getIp(ip).then((free_data) => {
        setData((data) => ({ ...data, Free: free_data }))
      })
      searchIp(ip).then((search_data) => {
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
        setData((data) => ({ ...data, ...plans_data }))
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
      <PreviewContainer className="custom-scroll">
        <JSONPreview
          icon={false}
          data={(data && data[activeTab]) || {}}
          color="white"
        />
      </PreviewContainer>
    </DetailsCard>
  )
}

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

const PreviewContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 8px;
  max-height: 300px;
  overflow: auto;
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
