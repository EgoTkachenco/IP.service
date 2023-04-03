import styled from 'styled-components'
import { H1, Flex, H5, Text, Caption, Icon } from '@/core'
import { BlockInner } from './blocks/Block'
import Link from 'next/link'
import { useObserverNavigation } from '@/hooks'

const TermsOfService = ({ title, data, published }) => {
  const [activeBlock] = useObserverNavigation('terms-content')

  return (
    <>
      <Wrapper>
        <style jsx global>
          {`
            address {
              display: inline;
            }
            ol {
              list-style-type: none;
              counter-reset: item;
              margin: 0;
              padding: 0;
            }
            ol > li {
              display: table;
              counter-increment: item;
              margin-bottom: 0.6em;
            }

            ol > li:before {
              content: '';
              display: table-cell;
            }
            li ol > li {
              margin: 0 0 8px 0;
            }
            li ol > li:before {
              content: counters(item, '.') '. ';
              width: 40px;
            }
          `}
        </style>
        <TitlesList activeBlock={activeBlock} data={data} />
        <Flex direction="column">
          <Title color="dark">{title}</Title>
          <LastUpdate>
            <Icon icon="refresh" size="16px" color="light-grey" />
            <Caption color="light-grey">Publication date: {published}</Caption>
          </LastUpdate>
          <TermsList id="terms-content">
            {data.map((block, i) => (
              <TermsBlock key={i} id={'block-' + i}>
                <H5>
                  {i ? i + '. ' : ''}
                  {block.title}
                </H5>
                <Text>{block.content()}</Text>
              </TermsBlock>
            ))}
          </TermsList>
        </Flex>
      </Wrapper>
    </>
  )
}

export default TermsOfService

const TitlesList = ({ activeBlock, data }) => {
  return (
    <TitlesListWrapper>
      {data.map((block, i) => (
        <Link key={i} href={`#block-` + i}>
          <TitlesListItem active={i <= activeBlock}>
            {block.title}
          </TitlesListItem>
        </Link>
      ))}
    </TitlesListWrapper>
  )
}

const TitlesListWrapper = styled.div`
  position: sticky;
  margin-top: 253px;
  top: 125px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 205px;
  min-width: 205px;

  @media (max-width: 1140px) {
    display: none;
  }
`

const TitlesListItem = styled(Caption)`
  padding-left: 16px;
  height: 40px;
  display: flex;
  align-items: center;
  border-left: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.text};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: all 0.3s;
`

const TermsList = styled(Flex)`
  flex-direction: column;
  gap: 100px;

  @media (max-width: 1140px) {
    gap: 48px;
  }
`

const TermsBlock = styled(Flex)`
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1140px) {
    gap: 16px;
  }
`

const LastUpdate = styled(Flex)`
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`

const Title = styled(H1)`
  margin: 100px 0;

  @media (max-width: 1140px) {
    margin: 48px 0 32px;
  }
`

const Wrapper = styled(BlockInner)`
  position: relative;
  gap: 91px;
  padding-bottom: 150px;
`
