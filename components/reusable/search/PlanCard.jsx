import Image from 'next/image'
import { Card, H2, Flex, Button } from '@/core'
import styled from 'styled-components'
import { useMediaQuery } from '@mantine/hooks'

const PlanCard = ({
  name,
  buttonColor = 'primary',
  buttonText,
  onClick,
  marginBottom = true,
}) => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <CardWrapper color="dark" direction="row" marginBottom={marginBottom}>
      {isMobile ? (
        <Image
          className="plan-card__backimage"
          src="/mobile-plan-card-icon.svg"
          alt="icon"
          width={177}
          height={177}
          loading="lazy"
        />
      ) : (
        <Image
          className="plan-card__backimage"
          src="/plan-card-icon.svg"
          alt="icon"
          width={368}
          height={368}
          loading="lazy"
        />
      )}
      <CardContent gap="4px">
        <H2 color="white">{name}</H2>
        <H2 weight="400" color="white">
          Plan
        </H2>
      </CardContent>
      <Button
        color={buttonColor}
        width={isMobile ? '100%' : '260px'}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </CardWrapper>
  )
}

export default PlanCard

const CardWrapper = styled(Card)`
  position: relative;
  width: 100%;
  padding: 47px;
  margin: 30px 0 ${({ marginBottom }) => (marginBottom ? '50px' : '0')};
  align-items: center;
  justify-content: space-between;

  .plan-card__backimage {
    position: absolute;
    top: 50%;
    right: 98px;
    transform: translateY(-50%);

    @media (max-width: 1140px) {
      right: -18px;
      bottom: 16px;
    }
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    padding: 16px;
    margin: 24px 0 ${({ marginBottom }) => (marginBottom ? '24px' : '0')};
    align-items: flex-start;
    gap: 32px;
  }
`

const CardContent = styled(Flex)`
  position: relative;
  @media (max-width: 1140px) {
    padding: 8px 8px 0;
  }
`
