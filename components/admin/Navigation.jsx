import styled from 'styled-components'
import { Flex, Card, H5, Text, Icon, H6, Button } from '@/core'
import { useEffect, useState } from 'react'

const tabs = [
  { name: 'Orders', value: 'orders' },
  { name: 'Plans', value: 'plans' },
]

const Navigation = ({ currentTab, changeTab }) => {
  return (
    <Card width="300px" color="white">
      {tabs.map((tab, i) => (
        <NavigationItem
          key={i}
          onClick={() => changeTab(tab.value)}
          isActive={tab.value === currentTab}
        >
          <Text>{tab.name}</Text>
        </NavigationItem>
      ))}
    </Card>
  )
}

export default Navigation

const NavigationItem = styled(Flex)`
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : 'transparent'};

  ${Text} {
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.white : theme.colors.dark};
  }
`
