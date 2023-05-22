import styled from 'styled-components'
import UserPlan from '@/components/reusable/invoices/UserPlan'
import NextPayment from '@/components/reusable/invoices/NextPayment'
import BillingDetails from '@/components/reusable/invoices/BillingDetails'
import AutomaticBilling from '@/components/reusable/invoices/AutomaticBilling'
import CardDetails from '@/components/reusable/invoices/CardDetails'
import OrderHistory from '@/components/reusable/invoices/OrderHistory'
import CancelSubscription from '@/components/reusable/invoices/CancelSubscription'

import { Flex } from '@/core'

const Invoices = ({
  profile,
  currentPlan,
  orders,
  reactivate,
  changeAutoBilling,
  switchToYear,
}) => {
  return (
    <Flex direction="column" gap="30px" width="100%">
      <Row_1>
        <UserPlan plan={currentPlan} switchToYear={switchToYear} />
        <NextPayment date={currentPlan?.stop_at} />
      </Row_1>
      <Row_2>
        <Column_1>
          <BillingDetails name={profile?.card?.name} />
          <AutomaticBilling
            value={profile?.auto_overage_billing}
            onChange={changeAutoBilling}
          />
        </Column_1>
        <CardDetails profile={profile} />
      </Row_2>
      <OrderHistory orders={orders} />
      <CancelSubscription reactivate={reactivate} isActive={!!currentPlan} />
    </Flex>
  )
}

export default Invoices

const Row_1 = styled(Flex)`
  align-items: stretch;
  gap: 30px;
  width: 100%;

  & > :first-child {
    flex-grow: 1;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`

const Row_2 = styled(Flex)`
  align-items: stretch;
  gap: 30px;
  width: 100%;

  & > div {
    width: calc((100% - 30px) / 2);
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`

const Column_1 = styled(Flex)`
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
`
