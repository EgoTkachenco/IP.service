import { Flex, Text, Tooltip, Card, Icon, H6 } from '@/core'
import styled from 'styled-components'
import Link from 'next/link'

export const ValueCard = ({ label, value, hint }) => {
  return (
    <ValueCardWrapper color="white">
      <TitleWrapper>
        <Tooltip hint={hint}>
          <ValueCardLabel>{label}</ValueCardLabel>
        </Tooltip>
      </TitleWrapper>
      <Text>{value}</Text>
    </ValueCardWrapper>
  )
}

const TitleWrapper = styled(Flex)`
  width: 180px;

  @media (max-width: 1140px) {
    width: 80px;
  }
`

const ValueCardWrapper = styled(Card)`
  gap: 16px;
  flex-direction: row;
  overflow: visible;
  padding: 16px 24px;
  align-items: center;
  width: 100%;

  @media (max-width: 1140px) {
    padding: 16px;
  }
`
const ValueCardLabel = styled(Text)`
  border-bottom: 1px dashed #bdbdbd;
  font-weight: 700;
`

export const CheckValue = ({ label, value }) => (
  <Flex align="center" gap="10px">
    <Icon
      icon={value ? 'done' : 'close'}
      size="18px"
      color={value ? 'success' : 'danger'}
    />
    <Text weight={500}>{label}</Text>
  </Flex>
)

export const ServiceDetails = ({ title, description, linkText, link }) => (
  <Flex direction="column" gap="20px">
    <H6>{title}</H6>
    <Flex direction="column" gap="32px">
      <Text>{description}</Text>
      <Link href={link}>
        <Flex align="center" gap="16px">
          <Text color="primary" weight={600}>
            {linkText}
          </Text>{' '}
          <Icon color="primary" icon="arrow-left" size="20px" />
        </Flex>
      </Link>
    </Flex>
  </Flex>
)

export const Delimiter = styled.div`
  background: #f1f4f9;
  height: 1px;
  width: 100%;
`

export const VerticalDelimiter = styled.div`
  background: #e2e2e2;
  width: 1px;
`
