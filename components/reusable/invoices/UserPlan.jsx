import { Card, H6, Text, Chip, Caption, Button, Link } from '@/core'
import {
  CardTitle,
  CardContent,
  CardBottom,
  Price,
} from '@/components/reusable/styled.jsx'

const UserPlan = () => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>Business</H6>
        <Chip type="primary-transparent">Current Plan</Chip>
      </CardTitle>
      <CardContent align="baseline">
        <Price value="499" fixed="2" />
        <Caption>/month</Caption>
      </CardContent>
      <CardBottom align="flex-end" gap="24px">
        <Link color="primary" caption>
          Switch to annual billing and get 2 month free
        </Link>
        <Button color="dark" outline width="200px" size="medium">
          Change Plan
        </Button>
      </CardBottom>
    </Card>
  )
}

export default UserPlan
