import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, H6, Input, Icon, Chip } from '@/core'
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import SearchStore from '@/store/SearchStore'
import { observer } from 'mobx-react-lite'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { validateIP } from '@/utils'

const Header = observer(({ isMobile }) => {
  const router = useRouter()
  const form = useForm({
    initialValues: {
      search: '',
    },

    validate: {
      search: (value) => {
        if (!value) return 'Required'
        if (!validateIP(value)) return 'Invalid IP'
        return null
      },
    },
  })
  const onSubmit = form.onSubmit((values) => {
    getInfo(values.search).catch((error) => {
      if (error.errors) form.setErrors(error.errors)
      else form.setErrors('search', error.message)
    })
  })
  const getInfo = (ip) => SearchStore.getIpInfo(ip).then(handleRedirect)

  const handleRedirect = () => {
    // Redirect to search page to see result
    if (router.pathname.search('search') === -1) router.push('/app/search')
  }

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
          <IPsList onClick={(ip) => SearchStore.getIpInfo(ip)} />
          <Menu />
        </MobileMenu>
      ) : (
        <>
          <SearchWrapper onSubmit={onSubmit}>
            <Input
              variant="light"
              placeholder="Search..."
              noErrorMessage={true}
              {...form.getInputProps('search')}
              rightSlot={
                <Icon
                  icon="search"
                  size="18px"
                  color="text"
                  onClick={onSubmit}
                />
              }
            />
          </SearchWrapper>
          <IPsList onClick={(ip) => getInfo(ip)} />
        </>
      )}
    </Wrapper>
  )
})

export default Header

const IPsList = ({ onClick }) => (
  <ChipsContainer align="center" gap="16px">
    <Chip onClick={() => onClick('')}>Your IP</Chip>
    <Chip onClick={() => onClick('8.8.8.8')}>8.8.8.8</Chip>
    <Chip onClick={() => onClick('1.1.1.1')}>1.1.1.1</Chip>
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

const SearchWrapper = styled.form`
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
