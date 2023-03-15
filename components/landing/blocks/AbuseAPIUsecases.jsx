import styled from 'styled-components'
import { Flex, H2, H5, Card, Icon } from '@/core'
import { Block, BlockInner, Title } from './Block'
import { SignInContactButtons } from './styled'

const AbuseAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">{'Ways to use our \n Abuse Contact API'}</Title>
        <Container flex="1 1 calc((100% - 62px) / 3)" gap="31px" fwrap>
          <UseCase
            text={`Collect information to assist in taking down nefarious Web entities`}
          />
          <UseCase
            text={`Research IP addresses attempting to access your personal accounts`}
          />
          <UseCase
            text={`Track down hackers/spammers threatening you or your business`}
          />
          <UseCase
            text={`Build a foundation for taking legal action against malicious IP addresses`}
          />
          <UseCase
            text={`Fight back against identity theft and forms of harassment or infringement`}
          />
          <UseCase
            text={`Automate complaints to companies responsible for abusive IP addresses`}
          />
        </Container>
        <SignInContactButtons />
      </Content>
    </Block>
  )
}

export default AbuseAPIUsecases

const UseCase = ({ text }) => (
  <UseCaseCard color="white">
    <Icon icon="use-case" size="50px" mobileSize="24px" color="primary" />
    <H5 align="center">{text}</H5>
  </UseCaseCard>
)

const Content = styled(BlockInner)`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const UseCaseCard = styled(Card)`
  padding: 44px 24px;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex: 1 1 calc((100% - 64px) / 3);

  @media (max-width: 1140px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding: 0;
    background: none;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    ${H5} {
      white-space: normal;
      font-size: 14px;
      letter-spacing: 0.01em;
      font-weight: 600;
      line-height: 160%;
      text-align: left;
    }
  }
`
