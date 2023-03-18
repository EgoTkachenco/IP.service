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
import { useEffect } from 'react'
import routes from '@/constants/routes'

const Header = observer(() => {
  const router = useRouter()
  const { ip, isUserIp, getIpInfo } = SearchStore
  const form = useForm({
    initialValues: {
      search: ip,
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
    getIpInfo(values.search)
      .then(handleRedirect)
      .catch((error) => {
        if (error.errors) form.setErrors(error.errors)
        else form.setErrors('search', error.message)
      })
  })

  useEffect(() => {
    form.setFieldValue('search', ip)
  }, [ip])

  const getInfo = (ip) => getIpInfo(ip).then(handleRedirect)

  const handleRedirect = () => {
    // Redirect to search page to see result
    if (router.pathname.search('search') === -1) router.push('/app/search')
  }

  return (
    <Wrapper>
      <Link href={routes.home}>
        <LogoContainer gap="8px" align="center">
          <Image
            src="/logo.svg"
            height={24}
            width={24}
            alt="IP.Service"
            loading="lazy"
          />
          <H6 color="dark">Spyskey</H6>
        </LogoContainer>
      </Link>
      <DesktopMenu>
        <SearchWrapper onSubmit={onSubmit}>
          <Input
            variant="light"
            placeholder="Search..."
            noErrorMessage={true}
            {...form.getInputProps('search')}
            rightSlot={
              <Icon icon="search" size="18px" color="text" onClick={onSubmit} />
            }
          />
        </SearchWrapper>
        <IPsList ip={ip} isUserIp={isUserIp} onClick={(ip) => getInfo(ip)} />
      </DesktopMenu>
      <MobileMenu>
        <IPsList onClick={(ip) => getInfo(ip)} />
        <Menu />
      </MobileMenu>
    </Wrapper>
  )
})

export default Header

const example_list = ['', '8.8.8.8', '1.1.1.1']

const IPsList = ({ ip, isUserIp, onClick }) => (
  <ChipsContainer align="center" gap="16px">
    {example_list.map((example) => (
      <Chip
        key={example}
        onClick={() => onClick(example)}
        type={(example ? ip === example : isUserIp) ? 'primary-flat' : ''}
      >
        {example ? example : 'Your IP'}
      </Chip>
    ))}
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

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  @media (max-width: 1140px) {
    display: none;
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
