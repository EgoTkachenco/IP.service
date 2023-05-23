import styled from 'styled-components'
import { Flex, Text, Caption, H4, Chip } from '@/core'
import Image from 'next/image'

const TYPES = {
  success: {
    title: 'Payment Success',
    subtitle: 'Your payment has been done',
    image: '/success-icon.svg',
    alt: 'payment success',
  },
  error: {
    title: 'Payment failed',
    subtitle: 'Your payment has not been done',
    image: '/error-icon.svg',
    alt: 'payment error',
  },
}

const Payment = ({ details, isSuccess = false, bottomSlot }) => {
  if (!details) return
  const type = isSuccess ? 'success' : 'error'
  const isCustom = details.plan === 'Custom'
  const priceKey = details.term + '_price'
  return (
    <Flex direction="column" align="center">
      <Image
        src={TYPES[type].image}
        width={105}
        height={105}
        alt={TYPES[type].alt}
      />
      <Content>
        <InnerContent>
          <TopContent>
            <Text weight={600} color="dark">
              {TYPES[type].title}
            </Text>
            <Caption>{TYPES[type].subtitle}</Caption>
          </TopContent>
          <Delimiter />
          {isCustom && (
            <>
              <Flex direction="column" gap="12px" width="100%">
                {details.options.map((option) => (
                  <Flex justify="space-between" key={option.name} width="100%">
                    <Text color="light-grey">{option.name}</Text>
                    <Text>${option[priceKey].toFixed(0)}</Text>
                  </Flex>
                ))}
              </Flex>
              <Delimiter />
            </>
          )}
          {isCustom ? (
            <BottomContent align="baseline">
              <Text weight={600}>Total: </Text>
              <H4 weight={600} color="dark">
                ${details?.total?.toFixed(2)}
              </H4>
            </BottomContent>
          ) : (
            <BottomContent align="center">
              <H4 weight={600} color="dark">
                ${details?.total?.toFixed(2)}
              </H4>
              <Chip type="primary-transparent">{details.plan}</Chip>
            </BottomContent>
          )}

          {bottomSlot && <BottomSlot>{bottomSlot}</BottomSlot>}
        </InnerContent>
      </Content>
    </Flex>
  )
}

export default Payment

const Content = styled.div`
  position: relative;
  margin-top: -16px;
  background: url(/payment-card.svg);
  background-position: top center;
  max-width: 340px;
  width: 100%;

  & > svg {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
`

const TopContent = styled(Flex)`
  margin-bottom: 8px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const Delimiter = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.text};
  opacity: 0.2;
  width: 100%;
  height: 1px;
  margin: 24px 0;
`

const BottomContent = styled(Flex)`
  gap: 12px;
  justify-content: space-between;
`

const BottomSlot = styled.div`
  margin-top: 32px;
`

const InnerContent = styled.div`
  padding: 80px 48px 48px;
`
