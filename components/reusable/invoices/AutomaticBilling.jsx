import { Card, H6, Caption } from '@/core'
import { CardTitle, CardBottom } from '@/components/reusable/styled.jsx'
import Switch from '../Switch'

const AutomaticBilling = () => {
  return (
    <Card color="white">
      <CardTitle fwrap gap="24px">
        <H6>AUTOMATIC OVERAGE BILLING</H6>
        <Switch
          labelOff="Disabled"
          labelOn="Enabled"
          onChange={() => {}}
          value={true}
        />
      </CardTitle>
      <CardBottom align="flex-end">
        <Caption>
          Keep your API running even when you consume your monthly limit before
          end of the month. You’ll get an email notification about it when 80%
          of request volume has been consumed.
        </Caption>
      </CardBottom>
    </Card>
  )
}

export default AutomaticBilling
