import styled from 'styled-components'
import { Block, BlockInner } from './Block'
import { H2, Flex, Card, Icon, Text } from '@/core'

const WhoisInfo = () => {
  return (
    <Block>
      <Content flex="1">
        <H2 color="dark" align="center">
          {'Our Whois API includes \nthe following information'}
        </H2>
        <List>
          {whoisFeatures.map((block, i) => (
            <InfoCard color="white">
              {block.map((feature) => (
                <InfoRow key={feature}>
                  <Text weight={700}>{feature}</Text>
                </InfoRow>
              ))}
            </InfoCard>
          ))}
        </List>
      </Content>
    </Block>
  )
}

export default WhoisInfo

const whoisFeatures = [
  [
    'Netblock range',
    'Maintainer POC',
    'Netblock name',
    'Admin POC',
    'Whois ID',
  ],
  ['Abuse POC', 'Org name', 'POC email', 'Org ASN', 'Registration date'],
  ['Org ID', 'Expiration date', 'Whois status', 'RIR/NIR source', 'Tech POC'],
  ['Country code', 'Domain name', 'Full raw IP Whois record', 'ASN record'],
]

const Content = styled(BlockInner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 1140px) {
    flex-direction: column;
    width: 100%;
  }
`

const List = styled(Flex)`
  align-items: stretch;
  gap: 16px;
  width: 100%;
`

const InfoCard = styled(Card)`
  gap: 24px;
  flex: 1;
  padding: 32px 24px;
`

const InfoRow = ({ children }) => (
  <Flex align="center" gap="10px">
    <Icon icon="done" size="24px" color="primary" />
    {children}
  </Flex>
)
