import styled from 'styled-components'
import Image from 'next/image'
import { Flex, H6 } from '@/core'
import { BlockInner } from '../../blocks/Block'
import Link from 'next/link'
import { useMediaQuery } from '@mantine/hooks'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import routes from '@/constants/routes'

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1140px)', null)
  return (
    <Wrapper>
      <HeaderWrapper>
        <Link href={routes.home}>
          <Flex gap="8px" align="center">
            <Image src="/logo.svg" height={24} width={24} alt="IP.Service" />
            <H6 color="dark">IP.Service</H6>
          </Flex>
        </Link>

        {isMobile !== null && isMobile && <MobileMenu />}
        {isMobile !== null && !isMobile && <DesktopMenu />}
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled(BlockInner)`
  position: relative;
`

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 76px;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid rgba(52, 64, 84, 0.1);

  @media (max-width: 1140px) {
    height: 56px;
  }
`
