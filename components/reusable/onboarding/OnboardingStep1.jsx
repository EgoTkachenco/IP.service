import { Card, Caption, Icon, Text, Button, Flex } from '@/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import styled from 'styled-components'
import OnboardingCard from './OnboardingCard'

const OnboardingStep1 = () => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <OnboardingCard
      step="1"
      title="Send your first request"
      subtitle={
        <Caption>Copy and run this cURL request in your terminal:</Caption>
      }
    >
      <Card
        color="dark"
        direction="row"
        align="center"
        justify="space-between"
        width="100%"
        py="20px"
        gap="8px"
      >
        <Text color="success" font="monospace" weight="400" width="100%">
          curl "ipinfo.io/46.172.142.181?token=dbaf59e6154d0d"
        </Text>
        <Icon
          icon="copy"
          size={isMobile ? '24px' : '40px'}
          color="primary"
          onClick={() => {}}
        />
      </Card>

      <Details />

      <Button color="text" size="small" outline width="auto">
        Skip Onboarding
      </Button>
    </OnboardingCard>
  )
}

export default OnboardingStep1

const Details = () => {
  const [activeTab, setActiveTab] = useState('Free')
  const tabs = ['Free', 'Basic', 'Standart', 'Bussiness']
  return (
    <DetailsCard color="dark" width="100%" gap="20px">
      <Flex align="center" justify="space-between" width="100%">
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
      </Flex>
      <Text color="white" font="monospace" weight="400">
        # Get details for 46.172.142.181
      </Text>
      <Text color="success" font="monospace" weight="400">
        $ curl ipinfo.io/46.172.142.181?token=dbaf59e6154d0d
      </Text>
      <Flex direction="column" gap="8px">
        {DETAILS.map(({ name, value }) => (
          <Text key={name} color="white" font="monospace" weight="400" inline>
            {name}: "
            <Text color="primary" font="monospace" weight="400" inline>
              {value}
            </Text>
            "
          </Text>
        ))}
      </Flex>
    </DetailsCard>
  )
}

const DETAILS = [
  { name: 'hostname', value: 'dns.google' },
  { name: 'city', value: 'Mountain View' },
  { name: 'region', value: 'California' },
  { name: 'country', value: 'US' },
  { name: 'loc', value: '37.3860,-122.0838' },
  { name: 'postal', value: '94035' },
  { name: 'timezone', value: 'America/Los_Angeles' },
]

const DetailsCard = styled(Card)``

const Points = styled(Flex)`
  gap: 10px;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
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
