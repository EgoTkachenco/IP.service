import { Flex, Text, H5, Card } from '@/core'
import styled from 'styled-components'
import Image from 'next/image'
import UAParser from 'ua-parser-js'

const browsers = {
  Edge: { image: 'edge.svg', name: 'Edge' },
  Firefox: { image: 'firefox.svg', name: 'Firefox' },
  Safari: { image: 'safari.svg', name: 'Safari' },
  'Mobile Safari': { image: 'safari.svg', name: 'Safari' },
  Opera: { image: 'opera.svg', name: 'Opera' },
  Chrome: { image: 'chrome.svg', name: 'Chrome' },
}

const oses = {
  Windows: { image: 'windows.svg', name: 'Windows' },
  iOS: { image: 'macos.svg', name: 'IOS' },
  'Mac OS': { image: 'macos.svg', name: 'IOS' },
}

const devices = {
  Desktop: { image: 'desktop.svg', name: 'Desktop' },
  mobile: { image: 'phone.svg', name: 'Mobile' },
  tablet: { image: 'tablet.svg', name: 'Tablet' },
}

const DeviceInfo = ({ id }) => {
  let parser = new UAParser()
  let parserResults = parser.getResult()
  const browser = browsers[parserResults.browser.name]
  const os = oses[parserResults.os.name]
  const device = devices[parserResults.device.type] || devices.Desktop

  // alert(JSON.stringify(parserResults))
  return (
    <ContainerCard id={id} color="white">
      {browser && (
        <ItemContainer>
          <Text>Your browser</Text>
          <Flex gap="12px" align="center">
            <Image
              src={'/devices/' + browser.image}
              alt={browser.name}
              width={24}
              height={24}
            />
            <H5 weight={600}>{browser.name}</H5>
          </Flex>
        </ItemContainer>
      )}
      {os && (
        <ItemContainer>
          <Text>Operating System</Text>
          <Flex gap="12px" align="center">
            <Image
              src={'/devices/' + os.image}
              alt={os.name}
              width={24}
              height={24}
            />
            <H5 weight={600}>{os.name}</H5>
          </Flex>
        </ItemContainer>
      )}
      {device && (
        <ItemContainer>
          <Text>Device</Text>
          <Flex gap="12px" align="center">
            <Image
              src={'/devices/' + device.image}
              alt={device.name}
              width={24}
              height={24}
            />
            <H5 weight={600}>{device.name}</H5>
          </Flex>
        </ItemContainer>
      )}
    </ContainerCard>
  )
}

export default DeviceInfo

const ContainerCard = styled(Card)`
  width: 100%;
  flex-direction: row;

  & > :nth-child(2) {
    border-left: 1px solid #f1f4f9;
    border-right: 1px solid #f1f4f9;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: stretch;
    & > :nth-child(2) {
      border-top: 1px solid #f1f4f9;
      border-bottom: 1px solid #f1f4f9;
      border-left: none;
      border-right: none;
      padding: 30px 0;
      margin: 30px 0;
    }
  }
`

const ItemContainer = styled(Flex)`
  flex: 1;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`
