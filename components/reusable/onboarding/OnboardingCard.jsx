import styled from 'styled-components'
import { Flex, H6, Card } from '@/core'

const OnboardingCard = ({ step = 1, title, subtitle, children }) => {
  return (
    <Card color="white" width="100%" gap="30px">
      <OnboardingTitle step={step} title={title} subtitle={subtitle} />
      {children}
    </Card>
  )
}

export default OnboardingCard

const OnboardingTitle = ({ step = 1, title, subtitle }) => {
  return (
    <Flex gap="10px">
      <StepNumber>{step}</StepNumber>
      <Flex direction="column" gap="10px">
        <Flex gap="4px" align="center">
          <H6 color="dark" weight="400">
            Step:
          </H6>
          <H6 color="dark">{title}</H6>
        </Flex>
        {subtitle}
      </Flex>
    </Flex>
  )
}

const StepNumber = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
`
