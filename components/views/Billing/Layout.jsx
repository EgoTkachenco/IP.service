// import Animation from '@/components/reusable/Animation'
import routes from '@/constants/routes'
import { Flex, Chip } from '@/core'
import BillingStore from '@/store/BillingStore'
import PlansStore from '@/store/PlansStore'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

const Tabs = [
  { name: 'Your subscriptions', path: routes.billing },
  { name: 'Upgrade', path: routes.upgrade },
  { name: 'Billing & Invoices', path: routes.invoices },
]

const BillingLayout = observer(({ children }) => {
  const router = useRouter()
  const { plans, loadPlans, customPlanOptions, loadCustomPlanOptions } =
    PlansStore
  useEffect(() => {
    if (!plans) loadPlans()
    if (!customPlanOptions) loadCustomPlanOptions()
  }, [])
  return (
    <Flex direction="column" gap="50px" width="100%">
      <TabsList>
        {Tabs.map((tab) => {
          const isActive = router.pathname === tab.path
          return (
            <Link href={tab.path} key={tab.name}>
              <Chip
                type={isActive ? 'grey' : 'grey-outline'}
                onClick={() => {}}
              >
                {tab.name}
              </Chip>
            </Link>
          )
        })}
      </TabsList>
      {/* <Animation key={router.asPath}>{children}</Animation> */}
      {children}
    </Flex>
  )
})

export default BillingLayout

const TabsList = styled(Flex)`
  gap: 10px;

  @media (max-width: 1140px) {
    gap: 4px;
  }
`
