import styled from 'styled-components'
import { Flex, H3, Caption, Card, Icon, Button } from '@/core'

const PlanCard = ({
  name,
  price,
  description,
  priceType,
  types,
  additional_description,
  options,
  onSubscription,
  isCurrent,
}) => {
  return (
    <Flex direction="column" gap="10px" width="100%" id={name}>
      <PlanCardWrapper color="white">
        <PlanCardName>
          <Caption>{name}</Caption>
        </PlanCardName>
        <Flex align="flex-end" pt="10px">
          <PlanCardPrice color="dark">${price}</PlanCardPrice>
          <Caption>/{priceType}</Caption>
        </Flex>
        <PriceCardLabel
          dangerouslySetInnerHTML={{ __html: additional_description }}
        ></PriceCardLabel>

        <TypesContainer>
          <Caption weight="700">{types} data types</Caption>
          <TypesLine value={types} />
        </TypesContainer>

        <FeaturesContainer direction="column" gap="25px">
          {options.map((option, i) => (
            <Flex gap="8px" align="center" key={i}>
              <Icon icon="checkmark" size="16px" color="dark" />
              <Caption weight="400" color="text">
                {option.name}
              </Caption>
            </Flex>
          ))}
        </FeaturesContainer>
        <PriceCardDelimiter />
        {!isCurrent ? (
          <Button onClick={onSubscription}>Subscribe</Button>
        ) : (
          <Button disabled>Current plan</Button>
        )}
      </PlanCardWrapper>
      <PlanCaption dangerouslySetInnerHTML={{ __html: description }} />
    </Flex>
  )
}

export default PlanCard

const PlanCardWrapper = styled(Card)`
  position: relative;
  padding: 20px;
  width: 100%;
  flex-grow: 1;
`

const FeaturesContainer = styled(Flex)`
  flex-grow: 1;
`

const TypesContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 30px;
`

const TypesLine = styled.div`
  position: relative;
  height: 6px;
  background: rgba(7, 22, 37, 0.05);
  border-radius: 5px;
  width: 100%;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 5px;
    width: ${({ value }) => `calc(100% / 10 * ${value})`};
  }
`

const PlanCardPrice = styled(H3)`
  line-height: 100%;
`

const PlanCardName = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  ${Caption} {
    font-size: 12px;
  }
`

const PriceCardLabel = styled.div`
  background: rgba(102, 112, 128, 0.05);
  border-radius: 6x;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 20px 0 30px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  line-height: 160%;
  letter-spacing: 0.01em;
  b {
    color: ${({ theme }) => theme.colors.dark};
  }
`

const PriceCardDelimiter = styled.div`
  height: 1px;
  background: #f1f4f9;
  width: 100%;
  margin: 20px 0;
`

const PlanCaption = styled(Caption)`
  font-size: 12px;
  height: 24px;

  @media (max-width: 1140px) {
    height: auto;
  }
`
