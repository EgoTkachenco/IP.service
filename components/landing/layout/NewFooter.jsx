import styled from 'styled-components'
import { BlockInner } from '../blocks/Block'
import { Flex, H6, Text, Caption, Button, Icon } from '@/core'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@mantine/hooks'
import routes from '@/constants/routes'

const Footer = () => {
  return (
    <BlockInner>
      <Wrapper>
        <FooterLogo>
          <Logo />
          <Copyrights />
        </FooterLogo>
        <FooterLinks>
          {footer_links.map((column, i) => (
            <Flex direction="column" gap="10px" key={i}>
              {column.map((link, j) => (
                <Link href={link.href} key={j}>
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
        </FooterButtons>
      </Wrapper>
    </BlockInner>
  )
}

const footer_links = [
  [
    { name: 'IP Geolocation API', href: routes['geolocation-api'] },
    { name: 'IP to Company', href: routes['company-api'] },
    { name: 'Abuse Contact API', href: routes['abuse-api'] },
    { name: 'Privacy Detection API', href: routes['privacy-api'] },
    { name: 'IP Ranges API', href: routes['ranges-api'] },
  ],
  [
    { name: 'IP to Mobile Carrier', href: routes['carrier-api'] },
    { name: 'ASN API', href: routes['asn-api'] },
    { name: 'Hosted Domains API', href: routes['reverse-api'] },
    { name: 'IP WHOIS Down', href: routes['whois-api'] },
  ],
]

export default Footer

const Logo = () => (
  <Flex gap="8px" align="center">
    <Image
      src="/logo.svg"
      height={24}
      width={24}
      alt="IP.Service"
      loading="lazy"
    />
    <H6>IP.Service</H6>
  </Flex>
)

const Wrapper = styled.footer`
  border-top: 1px solid rgba(52, 64, 84, 0.1);
  padding: 60px 0 120px;
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
  <Flex direction="column">
    <Caption>Copyright © 2022 IPinfo®</Caption>
    <Caption>
      | <Link href="/terms">Terms & Conditions</Link> ·{' '}
      <Link href="/">Privacy Policy</Link>
    </Caption>
  </Flex>
)
