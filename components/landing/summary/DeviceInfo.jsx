import { Flex, Text, H5, Card } from '@/core'
import styled from 'styled-components'
import Image from 'next/image'

const DeviceInfo = ({ id }) => {
  return (
    <ContainerCard id={id} color="white">
      <ItemContainer>
        <Text>Your browser</Text>
        <Flex gap="12px" align="center">
          <Image
            src="/devices/chrome.svg"
            alt="Chrome"
            width={24}
            height={24}
          />
          <H5 weight={600}>Chrome</H5>
        </Flex>
      </ItemContainer>
      <ItemContainer>
        <Text>Operating System</Text>
        <Flex gap="12px" align="center">
          <Image
            src="/devices/windows.svg"
            alt="Windows"
            width={24}
            height={24}
          />
          <H5 weight={600}>Windows</H5>
        </Flex>
      </ItemContainer>
      <ItemContainer>
        <Text>Device</Text>
        <Flex gap="12px" align="center">
          <Image
            src="/devices/desktop.svg"
            alt="Desktop"
            width={24}
            height={24}
          />
          <H5 weight={600}>Desktop</H5>
        </Flex>
      </ItemContainer>
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
