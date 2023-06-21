import { Fragment } from 'react'
import { Flex, Text, H6, Caption } from '@/components/core'
import Link from 'next/link'
import styled from 'styled-components'
import routes from '@/constants/routes'

const Navigation = ({ docs, currentBlock, onNavigationChange }) => {
  return (
    <Wrapper as="aside">
      <Inner className="custom-scroll">
        {docs.map((topic, key) => (
          <Fragment key={key}>
            <Title>{topic.title}</Title>
            <Links>
              {topic.blocks.map((block, i) => (
                <Link
                  key={i}
                  href={routes.docs + '?block=' + block.order}
                  shallow={true}
                >
                  <NavigationLink
                    active={currentBlock >= block.order}
                    onClick={() => onNavigationChange(block.order)}
                  >
                    {block.title}
                  </NavigationLink>
                </Link>
              ))}
            </Links>
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
  transform: translateY(-1px);

  @media (max-width: 1140px) {
    width: 100%;
    overflow: auto;
    padding-bottom: 16px;
    border: none;
    position: sticky;
    top: 0;
    background: #f9fafc;
  }
`

const Inner = styled(Flex)`
  flex-direction: column;
  width: 224px;
  margin-left: auto;
  position: sticky;
  padding-top: 100px;
  padding-bottom: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  max-height: 100vh;
  overflow: auto;

  @media (max-width: 1140px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    position: relative;
    padding-top: 24px;
    padding-bottom: 0;
    margin-left: 0;
  }
`

const Title = styled(H6)`
  padding-left: 16px;
  margin: 20px 0;

  @media (max-width: 1140px) {
    margin: 0;
    white-space: nowrap;
  }
`

const Links = styled(Flex)`
  flex-direction: column;
  gap: 5px;

  @media (max-width: 1140px) {
    flex-direction: row;
  }
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

  @media (max-width: 1140px) {
    border-left: 0;
    border-radius: 20px;
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.text};
    background: ${({ theme, active }) =>
      active ? theme.colors.primary : 'transperent'};
    white-space: nowrap;
    padding: 0 16px;
  }
`
