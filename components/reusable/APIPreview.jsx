import { useState } from 'react'
import { Flex, Text, Icon, Card, Input, Chip } from '@/core'
import { ObjectJSON } from '@/components/reusable/search/JSONPreview'
import { useIP } from '@/hooks'
import styled from 'styled-components'

const example_list = ['', '215.204.222.212', '247.193.70.173', '66.131.120.255']

const APIPreview = () => {
  const { ip, setIp, data, isFetch } = useIP('')
  const [country, city, postal, address] = data?.address
    ? data.address.split(', ')
    : []
  return (
    <Flex direction="column">
      <Input
        value={data?.ip || ip}
        rightSlot={
          <IconContainer>
            <Icon icon="search" size="16px" color="white" />
          </IconContainer>
        }
      />

      <ContentCard color="dark">
        <Flex direction="column" gap="8px">
          <ObjectJSON name="ip" value={data?.ip} textColor="white" />
          <ObjectJSON
            name="hostname"
            value={data?.asn?.domain}
            textColor="white"
          />
          <ObjectJSON name="city" value={city} textColor="white" />
          <ObjectJSON name="region" value="" textColor="white" />
          <ObjectJSON name="country" value={data?.country} textColor="white" />
          <ObjectJSON
            name="loc"
            // value="37.3860,-122.0838"
            value=""
            textColor="white"
          />
          <ObjectJSON name="org" value={data?.asn?.name} textColor="white" />
          <ObjectJSON name="postal" value={postal} textColor="white" />
          <ObjectJSON
            name="timezone"
            value=""
            // value="America/Los_Angeles"
            textColor="white"
          />
        </Flex>
      </ContentCard>
      <ChipContainer flex="1">
        {example_list.map((example, i) => (
          <Chip
            key={i}
            type={example === ip ? 'primary-flat' : 'dark'}
            onClick={() => setIp(example)}
          >
            {example ? example : 'Your IP'}
          </Chip>
        ))}
      </ChipContainer>
    </Flex>
  )
}

export default APIPreview

const ContentCard = styled(Card)`
  width: 100%;
  margin: 16px 0 4px;
  flex-grow: 1;
  border-radius: 8px;
`

const ChipContainer = styled(Flex)`
  width: 100%;
  gap: 4px;
  max-width: 100%;
  overflow: auto;
  & > * {
    min-width: 120px;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
`
