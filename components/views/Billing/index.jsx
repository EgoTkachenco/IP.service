import PageChangeAnimation from '@/components/reusable/PageChangeAnimation'
import { Flex, Chip } from '@/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const TABS = [
  { name: 'Your subscriptions', path: '/app/billing' },
  { name: 'Upgrade', path: '/app/billing/upgrade' },
  { name: 'Billing & Invoices', path: '/app/billing/invoices' },
]

const Billing = ({ children }) => {
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
      <PageChangeAnimation>{children}</PageChangeAnimation>
    </Flex>
  )
}

export default Billing

const TabsList = styled(Flex)`
  gap: 10px;

  @media (max-width: 1140px) {
    gap: 4px;
  }
`
