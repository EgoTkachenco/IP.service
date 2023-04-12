import styled from 'styled-components'
import { Card, Icon, Flex, Text, Chip, Caption, H3, Button } from '@/core'
import Link from 'next/link'

const CustomServiceCard = ({ details, isActive, handleSelect, period }) => {
  const priceKey = period === 'month' ? 'month_price' : 'year_price'
  const lookups = details.limit_reqeusts
    ? Math.floor(details.limit_reqeusts / 1000) + 'k'
    : 0
  const additional_lookups = details.additional_requests_limit
    ? Math.floor(details.additional_requests_limit / 1000) + 'k'
    : 0
  return (
    <Card color="white">
      <Flex align="center" gap="20px" width="100%">
        {details.icon && (
          <IconWrapper color={details.color}>
            <Icon icon={details.icon} size="24px" color="white" />
          </IconWrapper>
        )}
        <Title color="dark">{details?.name}</Title>
        {details.advanced ? <Chip>Advanced</Chip> : ''}
      </Flex>
      <Description>{details.description}</Description>
      <PriceContainer>
        <H3 color="dark" weight={700}>
          ${details[priceKey].toFixed(0)}
        </H3>
        <Caption weight={700}>/{lookups} lookups</Caption>
      </PriceContainer>
      {/* <Lookups
        dangerouslySetInnerHTML={{ __html: details.small_description }}
      /> */}
      <Lookups>
        <Caption weight={700} color="dark">
          {lookups} lookups per month
        </Caption>
        <Caption weight={500}>
          ${details.additional_requests_price.toFixed(0)} per additional{' '}
          {additional_lookups} lookups
        </Caption>
      </Lookups>

      <Bottom flex="1">
        {details.link && (
          <Link href={details.link}>
            <Button outline size="large">
              Learn More
            </Button>
          </Link>
        )}
        <Button
          variant={isActive ? 'primary-transparent' : null}
          onClick={handleSelect}
        >
          {isActive ? 'Added' : 'Add Servise'}
        </Button>
      </Bottom>
    </Card>
  )
}

export default CustomServiceCard

const Title = styled(Text)`
  font-weight: 700;
  flex-grow: 1;
`

const Description = styled(Caption)`
  margin: 20px 0 10px;
`

const PriceContainer = styled(Flex)`
  align-items: baseline;
`

const Lookups = styled(Card)`
  background: rgba(80, 92, 117, 0.05);
  padding: 10px;
  gap: 2px;
  margin: 20px 0;
  width: 100%;
  border-radius: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  line-height: 160%;
  letter-spacing: 0.01em;
  b {
    color: ${({ theme }) => theme.colors.dark};
  }
`

const Bottom = styled(Flex)`
  padding-top: 20px;
  width: 100%;
  border-top: 1px solid #f1f4f9;
  gap: 10px;
`

const IconWrapper = styled(Flex)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${({ theme, color }) => theme.colors[color] || 'transparent'};
  border-radius: 8px;
`
