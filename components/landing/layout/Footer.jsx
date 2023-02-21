import styled from 'styled-components'
import { BlockInner } from '../blocks/Block'
import { Flex, H6, Text, Caption, Icon } from '@/core'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@mantine/hooks'

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 1140px)')
  return (
    <BlockInner>
      <Wrapper>
        <WrapperTop>
          {!isMobile && <Logo />}
          <FooterLinks>
            {footer_links.map((column, i) => (
              <Flex direction="column" gap="10px" key={i}>
                <FooterTitle>{column.title}</FooterTitle>
                {column.links.map((link, j) => (
                  <Link href={link.href} key={j}>
                    <LinkText>{link.name}</LinkText>
                  </Link>
                ))}
              </Flex>
            ))}
          </FooterLinks>
        </WrapperTop>
        <WrapperBottom>
          {isMobile ? (
            <>
              <Flex justify="space-between" width="100%">
                <Logo />
                <SocialLinks />
              </Flex>
              <ArhievementsMobile />
              <Copyrights />
            </>
          ) : (
            <>
              <Flex direction="column" gap="20px">
                <SocialLinks />
                <Copyrights />
              </Flex>
              <Arhievements />
            </>
          )}
        </WrapperBottom>
      </Wrapper>
    </BlockInner>
  )
}

const footer_links = [
  {
    title: 'Products',
    links: [
      { name: 'IP Geolocation API', href: '' },
      { name: 'IP to Company', href: '' },
      { name: 'Abuse Contact API', href: '' },
      { name: 'Privacy Detection API', href: '' },
      { name: 'IP Database Download', href: '' },
    ],
  },
  {
    title: ' ',
    links: [
      { name: 'IP Ranges API', href: '' },
      { name: 'IP to Mobile Carrier', href: '' },
      { name: 'ASN API', href: '' },
      { name: 'Hosted Domains API', href: '' },
      { name: 'IP WHOIS Down', href: '' },
    ],
  },
  {
    title: 'Data',
    links: [
      { name: 'IP address information', href: '' },
      { name: 'My IP address', href: '' },
      { name: 'Global ASNs', href: '' },
      { name: 'IP Ranges', href: '' },
      { name: 'Hosted Domains by ASNs', href: '' },
      { name: 'Submit a geo correction', href: '' },
    ],
  },
  {
    title: 'Resourses',
    links: [
      { name: 'Documentaion', href: '' },
      { name: 'Libraries', href: '' },
      { name: 'Help center', href: '' },
      { name: 'Blog', href: '' },
      { name: 'E-blog', href: '' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '' },
      { name: 'Careers', href: '' },
      { name: 'Press', href: '' },
      { name: 'Contact us', href: '' },
    ],
  },
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
  padding: 75px 0 150px;
  width: 100%;

  @media (max-width: 1140px) {
    padding: 32px 0;
  }
`

const WrapperTop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 69px;
  margin-bottom: 50px;

  @media (max-width: 1140px) {
    margin-bottom: 48px;
  }
`

const FooterLinks = styled(Flex)`
  gap: 32px 75px;

  @media (max-width: 1140px) {
    flex-wrap: wrap;
    & > div {
      flex: 1 1 calc((100% - 75px) / 2);
    }
  }
`

const WrapperBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    border-top: 1px solid rgba(52, 64, 84, 0.1);
    padding-top: 48px;
  }
`

const FooterTitle = styled(Text)`
  margin-bottom: 10px;
  font-weight: 700;
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

const SocialLinks = () => (
  <Flex gap="15px">
    <Link href="">
      <Icon icon="linkedin" size="25px" color="light-grey" hoverColor="dark" />
    </Link>
    <Link href="">
      <Icon icon="twitter" size="25px" color="light-grey" hoverColor="dark" />
    </Link>
    <Link href="">
      <Icon icon="github" size="25px" color="light-grey" hoverColor="dark" />
    </Link>
  </Flex>
)

const Copyrights = () => (
  <Caption>
    Copyright © 2022 IPinfo® | <Link href="/terms">Terms & Conditions</Link> ·{' '}
    <Link href="/">Privacy Policy</Link>
  </Caption>
)

const Arhievements = () => (
  <Flex gap="30px" fwrap>
    <Image src="/get-app.png" alt="get-app" width={74} height={50} />
    <Image src="/reviews.png" alt="reviews" width={100} height={50} />
    <Image src="/capterra.png" alt="get-app" width={154} height={50} />
  </Flex>
)

const ArhievementsMobile = () => (
  <Flex gap="24px" fwrap>
    <Image src="/get-app.png" alt="get-app" width={62} height={40} />
    <Image src="/reviews.png" alt="reviews" width={85} height={40} />
    <Image src="/capterra.png" alt="get-app" width={130} height={40} />
  </Flex>
)
