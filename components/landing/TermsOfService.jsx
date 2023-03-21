import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { H1, Flex, H5, Text, Caption, Icon } from '@/core'
import { BlockInner } from './blocks/Block'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import dynamic from 'next/dynamic'
// const terms = dynamic(() => import('@/constants/terms'), {
//   loading: () => [],
// })
import terms from '@/constants/terms'

const TermsOfService = () => {
  const [activeBlock, setActiveBlock] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const blockIndex = entry.target.id.split('-')[1]
          if (entry.isIntersecting)
            setActiveBlock((state) => (blockIndex > state ? blockIndex : state))
          else
            setActiveBlock((state) => (blockIndex == state ? state - 1 : state))
        }),
      {
        root: null,
        threshold: 0,
      }
    )
    const blocks = document.getElementById('terms-content')
    for (let i = 0; i < blocks.children.length; i++) {
      const block = blocks.children[i]
      observer.observe(block)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const blockId = router.asPath.split('#')[1]
    if (blockId) {
      const block = document.getElementById(blockId)
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [router.asPath])

  return (
    <>
      <Wrapper>
        <style>
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
						content: "";
						display: table-cell;
					}
					li ol > li {
						margin: 0 0 8px 0;
					}
					li ol > li:before {
						content: counters(item, ".") ". ";
						width: 40px;
					}`}
        </style>
        <TitlesList activeBlock={activeBlock} terms={terms} />
        <Flex direction="column">
          <Title color="dark">Terms of Service</Title>
          <LastUpdate>
            <Icon icon="refresh" size="16px" color="light-grey" />
            <Caption color="light-grey">
              Publication date: March 20, 2023
            </Caption>
          </LastUpdate>
          <TermsList id="terms-content">
            {terms.map((block, i) => (
              <TermsBlock key={i} id={'block-' + i}>
                <H5>{block.title}</H5>
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

const TitlesList = ({ activeBlock }) => {
  return (
    <TitlesListWrapper>
      {terms.map((block, i) => (
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

const terms_1 = [
  {
    title: 'Introduction',
    content: () => (
      <>
        The Terms of Use regulate the conditions for obtaining Services, namely
        obtaining access to Data by using an IP address.
        <br />
        <br />
        The Terms of Use describe the types of Services, their cost, and payment
        methods.
        <br />
        <br />
        The provision of Services is regulated exclusively by the conditions of
        these Terms of Use and relevant legislative acts.
        <br />
        <br />
        Please read this document carefully to familiarize yourself with the
        methods and cost of providing the Services.
        <br />
        <br />
        Reference to the words "we", "our" or "us" (or equivalent terms) means
        Spyskey.
        <br />
        <br />
        Reference to the words “you” or “your” (or similar words) means the
        Client receiving the Services.
        <br />
        <br />
        The words he/she and their derivatives in the text of the document can
        be applied to either a male person or a female person, depending on the
        context of the document.
      </>
    ),
  },
]
