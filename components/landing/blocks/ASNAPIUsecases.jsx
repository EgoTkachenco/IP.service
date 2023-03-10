import styled from 'styled-components'
import { Icon, Flex, H3, H5, Card } from '@/core'
import { Block, BlockInner } from './Block'
import { SignInContactButtons } from './styled'

const ASNAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <H3 color="dark" align="center">
          {'A few ways to use our ASN API'}
        </H3>
        <Container flex="1 1 calc((100% - 32px) / 2)">
          <UseCase text="IPinfo's ASN API can provide information on whether an IP address belongs to a consumer, business, or hosting provider. You can utilize IP type data to better understand what type of experience to deliver to your users. You will be able to easily differentiate between IPs based on their intended use and assignment." />
          <UseCase text="Resolving the IP address to ASN for users that visit your website will provide your business with insight on which ISPs are common among your IP traffic. This data can help you make inferences about users’ internet connection speeds, data limitations, and so forth." />
        </Container>
        <SignInContactButtons />
      </Content>
    </Block>
  )
}

export default ASNAPIUsecases

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 1140px) {
    /* flex-direction: column; */
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
`

const UseCase = ({ text }) => (
  <UseCaseCard color="white">
    <Icon icon="use-case" size="50px" color="primary" />
    <H5 weight={500}>{text}</H5>
  </UseCaseCard>
)

const UseCaseCard = styled(Card)`
  padding: 50px;
  gap: 25px;
  flex: 1 1 calc((100% - 64px) / 3);

  @media (max-width: 1140px) {
    flex: 1 1 calc((100% - 32px) / 2);
  }

  @media (max-width: 700px) {
    flex: 1 1 100%;
  }
`
