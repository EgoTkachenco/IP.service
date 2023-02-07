import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, H6, Input, Icon, Chip } from '@/core'

const Header = () => {
  return (
    <Wrapper>
      <Link href="/app">
        <LogoContainer gap="8px" align="center">
          <Image src="/logo.svg" height={24} width={24} alt="IP.Service" />
          <H6 color="dark">IP.Service</H6>
        </LogoContainer>
      </Link>
      <SearchWrapper>
        <Input
          variant="light"
          placeholder="Search..."
          rightSlot={<Icon icon="search" size="18px" color="text" />}
        />
      </SearchWrapper>
      <RightContainer align="center" gap="16px">
        <Chip>Your IP</Chip>
        <Chip>8.8.8.8</Chip>
        <Chip>1.1.1.1</Chip>
      </RightContainer>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  background: #ffffff;
  border-bottom: 1px solid #f1f4f9;
  display: flex;
  align-items: center;
`

const LogoContainer = styled(Flex)`
  width: 260px;
  padding: 30px;
`

const SearchWrapper = styled.div`
  padding: 0 50px;
  width: 500px;
`
const RightContainer = styled(Flex)`
  margin: 0 50px 0 auto;
`
