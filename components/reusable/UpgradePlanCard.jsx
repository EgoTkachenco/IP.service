import styled from 'styled-components'
import { Flex, H1, Chip, Caption, Card, Icon, Button } from '@/core'

const UpgradePlanCard = ({
  name,
  price,
  priceType,
  description,
  labelTitle,
  labelDescription,
  features,
  isCurrent,
}) => {
  return (
    <PlanCardWrapper color="white">
      <PlanCardName>
        <Chip type="primary-transparent">{name}</Chip>
      </PlanCardName>
      <Flex direction="column" gap="16px" width="100%" align="stretch">
        <Flex align="flex-end" pt="10px">
          <PlanCardPrice color="dark">${price.toFixed(0)}</PlanCardPrice>
          <Caption>/{priceType}</Caption>
        </Flex>
        <Caption>{description}</Caption>
      </Flex>
      <PriceCardLabel>
        <Caption color="white" weight="700">
          {labelTitle}
        </Caption>
        <Caption>{labelDescription}</Caption>

        <PriceCardLabelIllustration src="/building.svg" />
      </PriceCardLabel>

      <Flex direction="column" gap="25px">
        {features.map((feature, i) => (
          <Flex
            gap="8px"
            align="center"
            key={i}
            style={{ opacity: feature.isActive ? 1 : 0.5 }}
          >
            <Icon
              icon={feature.isActive ? 'checkmark' : 'closemark'}
              size="16px"
              color={feature.isActive ? 'primary' : 'grey'}
            />
            <Caption weight="400" color={feature.isActive ? 'text' : 'grey'}>
              {feature.name}
            </Caption>
          </Flex>
        ))}
      </Flex>
      <PriceCardDelimiter />
      <Button variant={isCurrent ? 'primary-transparent' : ''}>
        {isCurrent ? 'Current Plan' : name}
      </Button>
    </PlanCardWrapper>
  )
}

export default UpgradePlanCard

const PlanCardWrapper = styled(Card)`
  position: relative;
  gap: 30px;

  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const PlanCardPrice = styled(H1)`
  line-height: 100%;
`

const PlanCardName = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const PriceCardLabel = styled.div`
  position: relative;
  background: linear-gradient(90.43deg, #002e47 7.13%, #031924 99.63%);
  border-radius: 10px;
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const PriceCardLabelIllustration = styled.img`
  position: absolute;
  right: 11px;
  bottom: 0;
`

const PriceCardDelimiter = styled.div`
  height: 1px;
  background: #f1f4f9;
  width: 100%;
`
