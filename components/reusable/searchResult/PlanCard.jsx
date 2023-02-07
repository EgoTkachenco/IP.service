import Image from 'next/image'
import { Card, H2, Flex, Button } from '@/core'
import styled from 'styled-components'

const PlanCard = ({
  name,
  buttonColor = 'primary',
  buttonText,
  onClick,
  marginBottom = true,
}) => {
  return (
    <CardWrapper
      color="dark"
      direction="row"
      align="center"
      justify="space-between"
      marginBottom={marginBottom}
    >
      <Flex gap="4px">
        <H2 color="white">{name}</H2>
        <H2 weight="400" color="white">
          Plan
        </H2>
      </Flex>
      <Image
        className="plan-card__backimage"
        src="/plan-card-icon.svg"
        alt="icon"
        width={368}
        height={368}
      />
      <Button color={buttonColor} width="260px" onClick={onClick}>
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

  .plan-card__backimage {
    position: absolute;
    top: 50%;
    right: 98px;
    transform: translateY(-50%);
  }
`
