import styled from 'styled-components'
import { BlockInner } from '../blocks/Block'
import { Flex, H6, Text, Caption, Icon } from '@/core'
import Image from 'next/image'

const Footer = () => {
  return (
    <BlockInner>
      <Wrapper>
        <WrapperTop>
          <Flex gap="8px" align="center">
            <Image src="/logo.svg" height={24} width={24} alt="IP.Service" />
            <H6>IP.Service</H6>
          </Flex>
          <Flex gap="75px">
            <Flex direction="column" gap="10px">
              <FooterTitle>Products</FooterTitle>
              <Caption>IP Geolocation API</Caption>
              <Caption>IP to Company</Caption>
              <Caption>Abuse Contact API</Caption>
              <Caption>Privacy Detection API</Caption>
              <Caption>IP Database Download</Caption>
            </Flex>
            <Flex direction="column" gap="10px">
              <FooterTitle> </FooterTitle>
              <Caption>IP Ranges API</Caption>
              <Caption>IP to Mobile Carrier</Caption>
              <Caption>ASN API</Caption>
              <Caption>Hosted Domains API</Caption>
              <Caption>IP WHOIS Down</Caption>
            </Flex>

            <Flex direction="column" gap="10px">
              <FooterTitle>Data</FooterTitle>
              <Caption>IP address information</Caption>
              <Caption>My IP address</Caption>
              <Caption>Global ASNs</Caption>
              <Caption>IP Ranges</Caption>
              <Caption>Hosted Domains by ASNs</Caption>
              <Caption>Submit a geo correction</Caption>
            </Flex>

            <Flex direction="column" gap="10px">
              <FooterTitle>Resourses</FooterTitle>
              <Caption>Documentaion</Caption>
              <Caption>Libraries</Caption>
              <Caption>Help center</Caption>
              <Caption>Blog</Caption>
              <Caption>E-blog</Caption>
            </Flex>

            <Flex direction="column" gap="10px">
              <FooterTitle>Company</FooterTitle>
              <Caption>About</Caption>
              <Caption>Careers</Caption>
              <Caption>Press</Caption>
              <Caption>Contact us</Caption>
            </Flex>
          </Flex>
        </WrapperTop>
        <WrapperBottom>
          <Flex direction="column" gap="20px">
            <Flex gap="15px">
              <Icon icon="linkedin" size="25px" />
              <Icon icon="twitter" size="25px" />
              <Icon icon="github" size="25px" />
            </Flex>
            <Caption>
              Copyright © 2022 IPinfo® | Terms & Conditions · Privacy Policy
            </Caption>
          </Flex>

          <Flex gap="30px">
            <Image src="/get-app.png" alt="get-app" width={74} height={50} />
            <Image src="/reviews.png" alt="reviews" width={100} height={50} />
            <Image src="/capterra.png" alt="get-app" width={154} height={50} />
          </Flex>
        </WrapperBottom>
      </Wrapper>
    </BlockInner>
  )
}

export default Footer

const Wrapper = styled.footer`
  border-top: 1px solid rgba(52, 64, 84, 0.1);
  padding: 75px 0 150px;
  width: 100%;
`

const WrapperTop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 69px;
  margin-bottom: 50px;
`

const WrapperBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const FooterTitle = styled(Text)`
  margin-bottom: 10px;
  font-weight: 700;
`
