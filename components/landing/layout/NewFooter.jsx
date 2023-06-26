import styled from 'styled-components'
import { BlockInner } from '../blocks/Block'
import { Flex, H6, Text, Caption, Button, Icon } from '@/core'
import Image from 'next/image'
import Link from 'next/link'
import routes from '@/constants/routes'
import { OnlyDesktop, OnlyMobile } from '@/components/landing/blocks/styled'
import { useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import AuthContext from '@/utils/authContext'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  const { openModal } = useContext(ModalContext)
  const { isLogged } = useContext(AuthContext)

  const onLinkClick = (e, name) => {
    if (name === 'My account') {
      if (!isLogged) {
        e.preventDefault()
        openModal('sign-up')
      }
    }
  }
  return (
    <BlockInner direction="column">
      <Wrapper>
        <FooterLogo>
          <Logo />
          <OnlyMobile gap="21px">
            <Image src="/visa.svg" alt="Visa" width={61} height={20} />
            <Image
              src="/mastercard.svg"
              alt="Mastercard"
              width={32}
              height={20}
            />
          </OnlyMobile>
        </FooterLogo>
        <FooterLinks>
          {footer_links.map((column, i) => (
            <Flex direction="column" gap="10px" key={i}>
              <FooterTitle color="dark">{column.title}</FooterTitle>
              {column.links.map((link, j) => (
                <Link
                  href={link.href}
                  key={j}
                  onClick={(e) => link.onClick && onLinkClick(e, link.name)}
                >
                  <LinkText>{link.name}</LinkText>
                </Link>
              ))}
            </Flex>
          ))}
        </FooterLinks>
        <FooterButtons>
          <Link href={routes.contact}>
            <Button color="primary" size="medium">
              Contact Us
              <Icon icon="phone" size="16px" />
            </Button>
          </Link>
          <Link href={routes.faq}>
            <Button color="dark" outline size="medium">
              Help Center
              <Icon icon="help" size="16px" />
            </Button>
          </Link>
          <OnlyDesktop gap="21px" justify="center" pt="12px">
            <Image src="/visa.svg" alt="Visa" width={61} height={20} />
            <Image
              src="/mastercard.svg"
              alt="Mastercard"
              width={32}
              height={20}
            />
          </OnlyDesktop>
        </FooterButtons>
      </Wrapper>
      <Copyrights />
    </BlockInner>
  )
}

const footer_links = [
  {
    title: 'Products',
    links: [
      { name: 'IP Geolocation API', href: routes['geolocation-api'] },
      { name: 'IP to Company', href: routes['company-api'] },
      { name: 'Abuse Contact API', href: routes['abuse-api'] },
      { name: 'Privacy Detection API', href: routes['privacy-api'] },
      { name: 'IP Ranges API', href: routes['ranges-api'] },
    ],
  },
  {
    title: ' ',
    links: [
      { name: 'IP to Mobile Carrier', href: routes['carrier-api'] },
      { name: 'ASN API', href: routes['asn-api'] },
      { name: 'Hosted Domains API', href: routes['reverse-api'] },
      { name: 'IP WHOIS API', href: routes['whois-api'] },
      { name: 'Real IP', href: routes['real-ip-api'] },
    ],
  },
  {
    title: 'Information',
    links: [
      { name: 'Pricing', href: routes.pricing },
      { name: 'Contact', href: routes.contact },
      { name: 'Help Center', href: routes.faq },
      { name: 'Docs', href: routes.docs },
      { name: 'My account', href: routes.app, onClick: true },
    ],
  },
]

export default Footer

const Logo = () => (
  <Flex gap="8px" align="center">
    <Image
      src="/logo.svg"
      height={24}
      width={24}
      alt="Spyskey"
      loading="lazy"
    />
    <H6>Spyskey</H6>
  </Flex>
)

const Wrapper = styled.footer`
  border-top: 1px solid rgba(52, 64, 84, 0.1);
  padding: 60px 0;
  width: 100%;
  display: flex;

  @media (max-width: 1140px) {
    flex-direction: column;
    padding: 32px 0;
    gap: 32px;
    margin-top: 32px;
  }
`

const FooterLogo = styled(Flex)`
  flex-direction: column;
  gap: 40px;
  order: 1;

  @media (max-width: 1140px) {
    order: 3;
    border-top: 1px solid rgba(52, 64, 84, 0.1);
    padding-top: 32px;
    gap: 24px;
  }
`

const FooterLinks = styled(Flex)`
  margin-left: 120px;
  gap: 100px;
  order: 2;

  @media (max-width: 1140px) {
    margin-left: 0;
    justify-content: space-between;
    gap: 32px;
    order: 1;
  }
`

const FooterTitle = styled(Text)`
  margin-bottom: 10px;
  font-weight: 700;
`

const FooterButtons = styled(Flex)`
  flex-direction: column;
  gap: 16px;
  margin-left: auto;
  width: 170px;
  align-items: stretch;
  order: 3;

  @media (max-width: 1140px) {
    margin: 0;
    width: 100%;
    flex-direction: row;
    order: 2;
    & > * {
      flex-grow: 1;
    }
  }
`

const LinkText = styled(Caption)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    display: block;
    width: 0;
    height: 1px;
    transition: width 0.3s;
    background: ${({ theme }) => theme.colors.text};
  }
  &:hover::before {
    width: 100%;
  }
`

const Copyrights = () => (
  <CopyrightsWrapper justify="center">
    <Caption>Copyright © 2023 Spyskey </Caption>
    <Caption>
      | <Link href={routes.terms}>Terms & Conditions</Link> ·{' '}
      <Link href={routes.privacy}>Privacy Policy</Link>
    </Caption>
  </CopyrightsWrapper>
)

const CopyrightsWrapper = styled(Flex)`
  margin-bottom: 120px;
  width: 100%;
`
