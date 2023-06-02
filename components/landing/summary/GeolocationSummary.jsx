import { Flex, H3, Text, Card } from '@/core'
import routes from '@/constants/routes'
import { ValueCard, ServiceDetails, VerticalDelimiter } from './styled'
import Image from 'next/image'
import styled from 'styled-components'

const GeolocationSummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id} width="100%">
      <H3 color="dark">IP Geolocation</H3>
      <Flex direction="column" gap="10px" width="100%">
        <ValueCard label="City" value={data?.city} />
        <ValueCard label="State" value={data?.name} />
        <ValueCard
          label="Country"
          value={
            <Flex gap="12px" align="center">
              {data?.flag && (
                <Image
                  src={data?.flag}
                  width={21}
                  height={15}
                  alt={data?.flag}
                />
              )}
              <Text weight={600}>{data?.name_country}</Text>
            </Flex>
          }
        />
        <ValueCard label="Postal" value={data?.post_code} />
        <ValueCard
          label="Local time"
          value={data?.time_zone?.current_time
            .replace('T', ' ')
            .replace('+', ' +')}
        />
        <ValueCard label="Timezone" value={data?.time_zone?.name} />
        <ValueCard label="Coordinates" value={data?.loc} />
      </Flex>
      <MapContainer>
        <Map lat={data?.loc.split(', ')[0]} lng={data?.loc.split(', ')[1]} />
        <ServiceDetails
          title="IP Geolocation data"
          description="IP geolocation lookup is the identification of an IP address'
            geographic location in the real world."
          linkText="IP Geolocation API"
          link={routes['geolocation-api']}
        />
      </MapContainer>
    </Flex>
  )
}

export default GeolocationSummary

const Map = ({ lat, lng }) => {
  return (
    <Flex direction="column" width="100%">
      <iframe
        style={{ maxWidth: '360px', width: '100%' }}
        width="360px"
        height="230"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://maps.google.com/maps?q=${lat},${lng}&hl=es&z=14&output=embed`}
      ></iframe>
      <Card width="100%" align="center">
        <Text weight={700}>{[lat, lng].join(', ')}</Text>
      </Card>
    </Flex>
  )
}

const MapContainer = styled(Flex)`
  gap: 30px;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`
