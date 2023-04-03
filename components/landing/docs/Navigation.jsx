import { Fragment } from 'react'
import { Flex, Text, H6, Caption } from '@/components/core'
import Link from 'next/link'
import styled from 'styled-components'

const Navigation = ({ docs, currentBlock, onNavigationChange }) => {
  return (
    <Wrapper>
      <Inner>
        {docs.map((topic, key) => (
          <Fragment key={key}>
            <Title>{topic.title}</Title>
            <Flex gap="5px" direction="column">
              {topic.blocks.map((block, i) => (
                <Link key={i} href={`#block-` + block.order}>
                  <NavigationLink active={currentBlock >= block.order}>
                    {block.title}
                  </NavigationLink>
                </Link>
              ))}
            </Flex>
          </Fragment>
        ))}
      </Inner>
    </Wrapper>
  )
}

export default Navigation

const Wrapper = styled(Flex)`
  background: #ffffff;
  border: 1px solid rgba(52, 64, 84, 0.1);
  width: 27%;
`

const Inner = styled(Flex)`
  flex-direction: column;
  width: 224px;
  margin-left: auto;
  position: sticky;
  margin-top: 100px;
  margin-bottom: 100px;
  top: 0;
  bottom: 0;
  left: 0;
`

const Title = styled(H6)`
  padding-left: 16px;
  margin: 20px 0;
`

const NavigationLink = styled(Caption)`
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
