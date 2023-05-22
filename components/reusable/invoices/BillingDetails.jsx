import { useContext } from 'react'
import { Card, H6, H4, Icon } from '@/core'
import { CardTitle, CardContent } from '@/components/reusable/styled.jsx'
import ModalContext from '@/utils/modalContext'

const BillingDetails = ({ name }) => {
  const { openModal } = useContext(ModalContext)
  return (
    <Card color="white">
      <CardTitle>
        <H6>BILLING DETAILS</H6>
        {name && (
          <Icon
            icon="edit"
            size="20px"
            color="primary"
            onClick={() => openModal('update-cardholder')}
          />
        )}
      </CardTitle>
      <CardContent>
        <H4 color="dark">{name || 'No billing details'}</H4>
      </CardContent>
    </Card>
  )
}

export default BillingDetails
