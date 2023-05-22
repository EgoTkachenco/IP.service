import { Card, H6, Caption } from '@/core'
import { CardTitle, CardBottom } from '@/components/reusable/styled.jsx'
import Switch from '../Switch'

const AutomaticBilling = ({ value, onChange }) => {
  return (
    <Card color="white">
      <CardTitle fwrap gap="24px">
        <H6>AUTOMATIC OVERAGE BILLING</H6>
        <Switch
          labelOff="Disabled"
          labelOn="Enabled"
          onChange={(value) => onChange(value)}
          value={value}
        />
      </CardTitle>
      <CardBottom align="flex-end">
        <Caption>
          Ensure your API remains operational even if you reach your monthly
          limit before the month ends. You'll receive an email alert once you've
          used up 80% of your request volume.
        </Caption>
      </CardBottom>
    </Card>
  )
}

export default AutomaticBilling
