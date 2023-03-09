// import Animation from '@/components/reusable/Animation'
import routes from '@/constants/routes'
import { Flex, Chip } from '@/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const TABS = [
  { name: 'Your subscriptions', path: routes.billing },
  { name: 'Upgrade', path: routes.upgrade },
  { name: 'Billing & Invoices', path: routes.invoices },
]

const BillingLayout = ({ children }) => {
  const router = useRouter()
  return (
    <Flex direction="column" gap="50px" width="100%">
      <TabsList>
        {TABS.map((tab) => {
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
}

export default BillingLayout

const TabsList = styled(Flex)`
  gap: 10px;

  @media (max-width: 1140px) {
    gap: 4px;
  }
`
