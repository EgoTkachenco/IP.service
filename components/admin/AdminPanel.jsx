import styled from 'styled-components'
import { Flex, Card, H5, Text, Icon, H6, Button } from '@/core'
import { observer } from 'mobx-react-lite'
import store from '@/store/AdminStore'
import { useEffect, useState } from 'react'
import OrdersTable from './OrdersTable'
import PlansTable from './PlansTable'
import Navigation from './Navigation'

const AdminPanel = observer(() => {
  const { orders, loadOrders } = store
  const [tab, setTab] = useState('orders')

  return (
    <Layout>
      <Navigation currentTab={tab} changeTab={(tab) => setTab(tab)} />
      {tab === 'orders' && (
        <OrdersTable orders={orders} loadOrders={loadOrders} />
      )}
      {tab === 'plans' && <PlansTable />}
    </Layout>
  )
})

export default AdminPanel

const Layout = styled(Flex)`
  padding: 32px 64px;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  background-color: #f9fafc;
  gap: 32px;
`
