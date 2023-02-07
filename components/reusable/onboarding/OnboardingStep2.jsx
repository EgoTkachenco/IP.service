import { Flex, Caption, Button, Icon } from '@/core'
import OnboardingCard from './OnboardingCard'

const OnboardingStep2 = () => {
  return (
    <OnboardingCard
      step="2"
      title="Get your token"
      subtitle={
        <Caption inline>
          Visit our documentation and get started with our libraries for
          <Caption weight="700" inline>
            {
              'Python, Django, Java, C#,\n NodeJS, PHP, Laravel, Go, Ruby, Ruby on Rails, Rust, Perl.'
            }
          </Caption>
        </Caption>
      }
    >
      <Flex justify="flex-start" pl="40px">
        <Button size="small">Go to Docs</Button>
      </Flex>
    </OnboardingCard>
  )
}

export default OnboardingStep2
