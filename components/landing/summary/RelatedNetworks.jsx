import styled from 'styled-components'
import { Flex, H3, H4, Card, Text } from '@/core'

const RelatedNetworks = ({ onNetworkChange }) => {
  const networks = [
    { asn: 'AS10577', name: 'Worldwide Internet Publishing Corp' },
    { asn: 'AS18439', name: 'Northern Nevada High Speed LLC' },
    { asn: 'AS18909', name: 'NEOGAMES US LLP' },
    { asn: 'AS32030', name: 'VoIPster Communications, INC.' },
    { asn: 'AS32170', name: 'San Luis Valley Regional Medical Center' },
    { asn: 'AS36194', name: 'On Site' },
  ]
  return (
    <Flex direction="column" gap="32px">
      <H3 color="dark">Related Networks</H3>
      <Content>
        {networks.map((network, i) => (
          <NetworkCard
            color="white"
            key={i}
            onClick={() => {
              onNetworkChange(network.asn)
              window.scroll({
                top: 0,
                behavior: 'smooth',
              })
            }}
          >
            <H4 color="dark">{network.asn}</H4>
            <Text color="text" as="span" weight={700}>
              {network.name}
            </Text>
          </NetworkCard>
        ))}
      </Content>
    </Flex>
  )
}

export default RelatedNetworks

const Content = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  gap: 30px;
  align-items: stretch;

  @media (max-width: 1140px) {
    gap: 20px;
  }
`

const NetworkCard = styled(Card)`
  gap: 20px;
  padding: 32px;
  cursor: pointer;
  transition: all 0.3s;
  width: calc((100% - 60px) / 3);

  & > * {
    transition: all 0.3s;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    & > * {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 1140px) {
    padding: 24px;
    width: 100%;
    gap: 16px;
  }
`
