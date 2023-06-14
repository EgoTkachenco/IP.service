import styled from 'styled-components'
import { Flex, H1, Chip, Caption, Card, Icon, Button } from '@/core'

const UpgradePlanCard = ({
  name,
  price,
  priceType = 'month',
  description,
  additional_description,
  options,
  isCurrent,
  setPlan,
}) => {
  return (
    <PlanCardWrapper color="white">
      <PlanCardName>
        <Chip type="primary-transparent">{name}</Chip>
      </PlanCardName>
      <Flex direction="column" gap="16px" width="100%" align="stretch">
        <Flex align="flex-end" pt="10px">
          <PlanCardPrice color="dark">${price?.toFixed(0)}</PlanCardPrice>
          <Caption>/{priceType === 'month' ? 'monthly' : 'yearly'}</Caption>
        </Flex>
        <PlanDescription dangerouslySetInnerHTML={{ __html: description }} />
      </Flex>
      <PriceCardLabel>
        <p dangerouslySetInnerHTML={{ __html: additional_description }} />
        <PriceCardLabelIllustration src="/building.svg" />
      </PriceCardLabel>

      <Flex direction="column" gap="25px" style={{ flexGrow: 1 }}>
        {options.map((option, i) => (
          <Flex
            gap="8px"
            align="center"
            key={i}
            style={{ opacity: option.included ? 1 : 0.5 }}
          >
            <Icon
              icon={option.included ? 'checkmark' : 'closemark'}
              size="16px"
              color={option.included ? 'primary' : 'grey'}
            />
            <Caption weight="400" color={option.included ? 'text' : 'grey'}>
              {option.name}
            </Caption>
          </Flex>
        ))}
      </Flex>
      <PriceCardDelimiter />
      <Button
        variant={isCurrent ? 'primary-transparent' : ''}
        onClick={setPlan}
        disabled={isCurrent}
        value={price?.toFixed(0)}
      >
        {isCurrent ? 'Current Plan' : name}
      </Button>
    </PlanCardWrapper>
  )
}

export default UpgradePlanCard

const PlanCardWrapper = styled(Card)`
  position: relative;
  gap: 30px;
  width: 100%;

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
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  line-height: 160%;
  letter-spacing: 0.01em;

  b {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 1140px) {
      font-size: 12px;
    }
  }
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

const PlanDescription = styled(Caption)`
  height: 45px;

  @media (max-width: 1140px) {
    height: auto;
  }
`
