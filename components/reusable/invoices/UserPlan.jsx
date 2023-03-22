import { Card, H6, Chip, Caption, Button, Link as TextLink } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom,
  Price,
} from '@/components/reusable/styled.jsx'
import routes from '@/constants/routes'
import Link from 'next/link'

const UserPlan = ({ plan }) => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>{plan?.name || 'Free'}</H6>
        <Chip type="primary-transparent">Current Plan</Chip>
      </CardTitle>
      <CardContent align="baseline">
        <Price value={plan?.month_price || 0} fixed="2" />
        <Caption>/month</Caption>
      </CardContent>
      <CardBottom align="flex-end" gap="24px">
        <TextLink color="primary" caption>
          Switch to annual billing and get 2 month free
        </TextLink>
        <Link href={routes.upgrade}>
          <Button color="dark" outline width="200px" size="medium">
            Change Plan
          </Button>
        </Link>
      </CardBottom>
    </Card>
  )
}

export default UserPlan
