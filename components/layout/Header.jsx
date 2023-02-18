import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, H6, Input, Icon, Chip } from '@/core'
import MobileMenu from './MobileMenu'
import Menu from './Menu'

const Header = ({ isMobile }) => {
  return (
    <Wrapper>
      <Link href="/app">
        <LogoContainer gap="8px" align="center">
          <Image src="/logo.svg" height={24} width={24} alt="IP.Service" />
          <H6 color="dark">IP.Service</H6>
        </LogoContainer>
      </Link>

      {isMobile ? (
        <MobileMenu>
          <IPsList />
          <Menu />
        </MobileMenu>
      ) : (
        <>
          <SearchWrapper>
            <Input
              variant="light"
              placeholder="Search..."
              rightSlot={<Icon icon="search" size="18px" color="text" />}
            />
          </SearchWrapper>
          <IPsList />
        </>
      )}
    </Wrapper>
  )
}

export default Header

const IPsList = () => (
  <ChipsContainer align="center" gap="16px">
    <Chip>Your IP</Chip>
    <Chip>8.8.8.8</Chip>
    <Chip>1.1.1.1</Chip>
  </ChipsContainer>
)

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  background: #ffffff;
  border-bottom: 1px solid #f1f4f9;
  display: flex;
  align-items: center;

  @media (max-width: 1140px) {
    justify-content: space-between;
    padding: 0 24px;
    height: 56px;
  }
`

const LogoContainer = styled(Flex)`
  width: 260px;
  padding: 30px;

  @media (max-width: 1140px) {
    padding: 0;
    width: 100px;
  }
`

const SearchWrapper = styled.div`
  padding: 0 50px;
  width: 500px;
`
const ChipsContainer = styled(Flex)`
  margin: 0 50px 0 auto;

  @media (max-width: 1140px) {
    margin: 24px 0 0;
    & > div {
      padding-left: 24px;
      padding-right: 24px;
    }
  }
`
