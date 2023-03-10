import { Card, H6, H4, Icon } from '@/core'
import { CardTitle, CardContent } from '@/components/reusable/styled.jsx'

const BillingDetails = () => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>BILLING DETAILS</H6>
        <Icon icon="edit" size="20px" color="primary" />
      </CardTitle>
      <CardContent>
        <H4 color="dark">George Johnson</H4>
      </CardContent>
    </Card>
  )
}

export default BillingDetails
