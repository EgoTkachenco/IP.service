import styled from 'styled-components'
import { Flex, H3 } from '@/core'
import { Block, BlockInner } from './Block'
import { UseCase, SignInContactButtons } from './styled'

const CompanyAPIUsecases = () => {
  return (
    <Block>
      <Content>
        <LeftContainer>
          <H3 color="dark">{'Ways to use our\nIP Geolocation API'}</H3>
          <SignInContactButtons direction="column" />
        </LeftContainer>
        <Container flex="1 1 calc((100% - 32px) / 2)">
          <UseCase text="Enrich your data" />
          <UseCase text="Customize website experiences" />
          <UseCase text="Target the right users" />
          <UseCase text="Discover high-value leads" />
        </Container>
      </Content>
    </Block>
  )
}

export default CompanyAPIUsecases

const Content = styled(BlockInner)`
  display: flex;
  align-items: stretch;
  gap: 100px;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
`

const LeftContainer = styled(Flex)`
  flex-direction: column;
  min-width: 300px;
  justify-content: space-between;

  @media (max-width: 1140px) {
    gap: 32px;
    align-items: stretch;
    min-width: unset;

    ${H3} {
      text-align: center;
    }
  }
`
