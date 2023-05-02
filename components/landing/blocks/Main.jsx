import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H2, Text, Chip } from '@/core'
import { BlockInner } from './Block'
import APIPreview from '@/components/reusable/APIPreview'
import { SignInContactButtons } from './styled'

const Main = ({
  title,
  // secondTitle,
  advanced,
  reverseTitle = false,
  description,
  service,
  logo,
  validation,
  alignContent = 'stretch',
  examples,
  placeholder,
}) => {
  return (
    <Wrapper align={alignContent}>
      <Content>
        {logo && (
          <Logo>
            <Image
              src={logo}
              alt="IP Geolocation API"
              fill
              objectFit="cover"
              loading="lazy"
            />
          </Logo>
        )}

        <Flex gap="8px" direction={reverseTitle ? 'row-reverse' : 'row'}>
          <Title as="h1" color="dark">
            {title}{' '}
            {advanced && (
              <Chip
                type="primary-transparent"
                style={{
                  transform: 'translateY(-15%)',
                  display: 'inline-flex',
                }}
              >
                Advanced
              </Chip>
            )}
          </Title>
          {/* {secondTitle ? <Title color="primary">{secondTitle}</Title> : ''} */}
        </Flex>
        <Subtitle>{description}</Subtitle>
        <SignInContactButtons />
      </Content>

      <APIPreview
        service={service}
        validation={validation}
        examples={examples}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled(BlockInner)`
  display: flex;
  margin-top: 64px;
  gap: 105px;
  align-items: ${({ align }) => align || 'stretch'};
  & > :nth-child(2) {
    flex-grow: 1;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
    margin-top: 24px !important;
    gap: 48px;

    & > :nth-child(2) {
      max-width: 500px;
      width: 100%;
    }
  }
`

const Content = styled(Flex)`
  flex-direction: column;
  max-width: 485px;
`

const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  @media (max-width: 1140px) {
    width: 56px;
    height: 56px;
  }
`

const Subtitle = styled(Text)`
  width: 85%;
  margin: 40px 0 60px;

  @media (max-width: 1140px) {
    margin: 16px 0 24px;
    width: 100%;
  }
`

const Title = styled(H2)`
  display: inline;

  @media (max-width: 1140px) {
    font-size: 24px;
  }
`
