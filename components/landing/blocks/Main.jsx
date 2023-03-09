import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H2, Text } from '@/core'
import { BlockInner } from './Block'
import APIPreview from '@/components/reusable/APIPreview'
import { SignInContactButtons } from './styled'

const Main = ({
  title,
  secondTitle,
  reverseTitle = false,
  description,
  service,
}) => {
  return (
    <Wrapper>
      <Content>
        <Image
          src="/large-logo.svg"
          alt="IP Geolocation API"
          width={100}
          height={100}
          loading="lazy"
        />
        <Flex gap="8px" direction={reverseTitle ? 'row-reverse' : 'row'}>
          <H2 color="dark">{title}</H2>
          {secondTitle ? <H2 color="primary">{secondTitle}</H2> : ''}
        </Flex>
        <Subtitle>{description}</Subtitle>
        <SignInContactButtons />
      </Content>

      <APIPreview service={service} />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled(BlockInner)`
  display: flex;
  margin-top: 64px;
  gap: 105px;
  align-items: stretch;
  & > :nth-child(2) {
    flex-grow: 1;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;

    & > :nth-child(2) {
      max-width: 500px;
      width: 100%;
    }
  }
`

const Content = styled(Flex)`
  flex-direction: column;
  max-width: 485px;
  @media (max-width: 1140px) {
    align-items: center;
  }
`

const Subtitle = styled(Text)`
  width: 85%;
  margin: 40px 0 60px;

  @media (max-width: 1140px) {
    text-align: center;
  }
`
