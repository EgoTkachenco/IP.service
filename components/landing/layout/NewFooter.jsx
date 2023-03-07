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
        <Flex direction="column" gap="40px">
          <Logo />
          <Copyrights />
        </Flex>
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
          <Button color="dark" outline size="medium">
            Help Center
            <Icon icon="help" size="16px" />
          </Button>
        </FooterButtons>
      </Wrapper>
    </BlockInner>
  )
}

const footer_links = [
  [
    { name: 'IP Geolocation API', href: '' },
    { name: 'IP to Company', href: routes['company-api'] },
    { name: 'Abuse Contact API', href: '' },
    { name: 'Privacy Detection API', href: '' },
    { name: 'IP Database Download', href: '' },
  ],
  [
    { name: 'IP Ranges API', href: '' },
    { name: 'IP to Mobile Carrier', href: '' },
    { name: 'ASN API', href: '' },
    { name: 'Hosted Domains API', href: '' },
    { name: 'IP WHOIS Down', href: '' },
  ],
]

export default Footer

const Logo = () => (
  <Flex gap="8px" align="center">
    <Image src="/logo.svg" height={24} width={24} alt="IP.Service" />
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

const FooterLinks = styled(Flex)`
  margin-left: 120px;
  gap: 100px;

  @media (max-width: 1140px) {
    margin-left: 0;
    flex-direction: column;
    gap: 32px;
  }
`

const FooterButtons = styled(Flex)`
  flex-direction: column;
  gap: 16px;
  margin-left: auto;
  width: 170px;
  align-items: stretch;

  @media (max-width: 1140px) {
    margin: auto;
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
