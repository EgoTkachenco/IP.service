import styled from 'styled-components'
import { Caption, Button } from '@/core'
import OnboardingCard, { OnboardingCardContent } from './OnboardingCard'
import routes from '@/constants/routes'
import Link from 'next/link'

const OnboardingStep2 = ({ token, host }) => {
  return (
    <OnboardingCard
      step="2"
      title="Check the documentation and get your SDK"
      subtitle={
        <ContentText>
          Visit our documentation and get started with our libraries for{' '}
          <b>
            Python, Django, Java, C#, NodeJS, PHP, Laravel, Go, Ruby, Ruby on
            Rails, Rust, Perl
          </b>
          .
        </ContentText>
      }
    >
      <OnboardingCardContent>
        <Link href={routes.docs}>
          <Button size="small">Go to Docs</Button>
        </Link>
      </OnboardingCardContent>
    </OnboardingCard>
  )
}

export default OnboardingStep2

const ContentText = styled(Caption)`
  max-width: 65%;

  @media (max-width: 1140px) {
    max-width: unset;
  }
`
