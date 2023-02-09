import { Flex, Chip, Caption } from '@/core'
import Link from 'next/link'
import { useRouter } from 'next/router'

const TABS = [
  { name: 'Your subscriptions', path: '/app/billing' },
  { name: 'Upgrade', path: '/app/billing/upgrade' },
  { name: 'Billing & Invoices', path: '/app/billing/invoices' },
]

const Billing = ({ children }) => {
  const router = useRouter()
  console.log()
  return (
    <Flex direction="column" gap="50px">
      <Flex gap="10px">
        {TABS.map((tab) => {
          const isActive = router.pathname === tab.path
          return (
            <Link href={tab.path} key={tab.name}>
              <Chip type={isActive ? 'grey' : 'grey-outline'} onClick={() => {}}>
                <Caption color={isActive ? 'white' : 'text'} weight="600">
                  {tab.name}
                </Caption>
              </Chip>
            </Link>
          )
        })}
      </Flex>
      {children}
    </Flex>
  )
}

export default Billing
