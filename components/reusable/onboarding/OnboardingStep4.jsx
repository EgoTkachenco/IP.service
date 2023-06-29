import { Caption, Flex, Icon, Button } from '@/core'
import styled from 'styled-components'
import OnboardingCard, { OnboardingCardContent } from './OnboardingCard'

const OnboardingStep4 = ({ setTrial }) => {
  return (
    <OnboardingCard
      step="4"
      title="Start your 7 days trial"
      subtitle={
        <Caption>
          Begin your one-week trial membership for the Spyskey Premium plan.
          This will provide you access to the following data:
        </Caption>
      }
    >
      <OnboardingCardContent direction="column" gap="30px">
        <List>
          <ListItem>Geolocation</ListItem>
          <ListItem>Privacy Detection</ListItem>
          <ListItem>Hosted Domains</ListItem>

          <ListItem>ASN</ListItem>
          <ListItem>Carrier</ListItem>
          <ListItem>IP Whois</ListItem>
          <ListItem>Real IP</ListItem>

          {/* <ListItem>Basic Support</ListItem> */}
          <ListItem>Company</ListItem>
          <ListItem>IP Ranges</ListItem>

          <ListItem>Abuse</ListItem>
          {/* <ListItem>Priority Support</ListItem> */}
        </List>
        <Button size="small" width="auto" onClick={setTrial}>
          Start Free Trial
        </Button>
      </OnboardingCardContent>
    </OnboardingCard>
  )
}

export default OnboardingStep4

const ListItem = ({ children }) => (
  <Flex gap="8px" align="center">
    <Icon icon="done" size="20px" color="primary" />
    <Caption>{children}</Caption>
  </Flex>
)

const List = styled(Flex)`
  max-width: 570px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 12px 0;

  & > div {
    flex: 0 1 calc(100% / 3);
  }

  @media (max-width: 1140px) {
    & > div {
      flex: 0 1 calc(100% / 2);
    }
  }
`
