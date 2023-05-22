import { Flex, H3, Text, Card } from '@/core'
import routes from '@/constants/routes'
import { ValueCard, ServiceDetails, VerticalDelimiter } from './styled'
import Image from 'next/image'

const GeolocationSummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id}>
      <H3 color="dark">IP Geolocation</H3>
      <Flex direction="column" gap="10px">
        <ValueCard label="City" value={data?.city} />
        <ValueCard label="State" value={data?.name} />
        <ValueCard
          label="Country"
          value={
            <Flex gap="12px" align="center">
              <Image src={data?.flag} width={21} height={15} alt="UA" />
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
      <Flex gap="30px">
        <Map lat={data?.loc.split(', ')[0]} lng={data?.loc.split(', ')[1]} />
        <ServiceDetails
          title="IP Geolocation data"
          description="IP geolocation lookup is the identification of an IP address'
            geographic location in the real world."
          linkText="IP Geolocation API"
          link={routes['geolocation-api']}
        />
      </Flex>
      {/* <H3 color="dark">IP Geolocation</H3>
      <Card gap="32px">
        <Flex direction="column" gap="24px"></Flex>
      </Card> */}
    </Flex>
  )
}

export default GeolocationSummary

const Map = ({ lat, lng }) => {
  return (
    <Flex direction="column">
      <iframe
        width="360"
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

// const GeolocationBlock = ({ id, data }) => {
//   return (
//     <Flex direction="column" gap="32px" id={id}>
//       <H3 color="dark">IP Geolocation</H3>
//       <Flex direction="column" gap="10px">
//         <ValueCard label="City" value={data?.city} />
//         <ValueCard label="State" value={data?.name} />
//         <ValueCard
//           label="Country"
//           value={
//             <Flex gap="12px" align="center">
//               <Image src={data?.flag} width={21} height={15} alt="UA" />
//               <Text weight={600}>{data?.name_country}</Text>
//             </Flex>
//           }
//         />
//         <ValueCard label="Postal" value={data?.post_code} />
//         <ValueCard
//           label="Local time"
//           value={data?.time_zone?.current_time
//             .replace('T', ' ')
//             .replace('+', ' +')}
//         />
//         <ValueCard label="Timezone" value={data?.time_zone?.name} />
//         <ValueCard label="Coordinates" value={data?.loc} />
//       </Flex>
//       <Flex gap="30px">
//         <Map lat={data?.loc.split(', ')[0]} lng={data?.loc.split(', ')[1]} />
//         <Flex direction="column" gap="20px">
//           <H6>IP Geolocation data</H6>
//           <Text>
//             IP geolocation lookup is the identification of an IP address'
//             geographic location in the real world.
//           </Text>
//           <Link href={routes['geolocation-api']}>
//             <Flex align="center" gap="16px">
//               <Text color="primary">IP Geolocation API</Text>{' '}
//               <Icon color="primary" icon="arrow-left" size="20px" />
//             </Flex>
//           </Link>
//         </Flex>
//       </Flex>
//     </Flex>
//   )
// }
