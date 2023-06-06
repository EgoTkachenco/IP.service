import { Flex, H3, Text } from '@/core'
import { ValueCard, CheckValue } from './styled'

const CommonSummary = ({ id, data }) => {
  return (
    <Flex direction="column" gap="32px" id={id} width="100%">
      <H3 color="dark">Summary</H3>
      <Flex direction="column" gap="10px" width="100%">
        <ValueCard
          label="ASN"
          value={
            <>
              <Text color="primary" inline>
                {data?.asn?.ashandle || data?.asn?.['aut-num']}
              </Text>{' '}
              -{' '}
              {data?.asn?.desscr ||
                (data?.asn?.organisation &&
                  data?.asn?.organisation['org-name'])}
            </>
          }
        />
        <ValueCard label="Hostname" value={data?.geolocation?.hostname} />
        <ValueCard
          label="Range"
          value={<Text color="primary">{data?.abuse?.network}</Text>}
        />
        <ValueCard
          label="Company"
          value={data?.asn?.organisation && data?.asn?.organisation['org-name']}
        />
        <ValueCard label="Hosted domains" value={data?.ranges?.num_ranges} />
        <ValueCard
          label="Privacy"
          value={<CheckValue label="False" value={data?.privacy?.isProxy} />}
        />
        <ValueCard
          label="Anycast"
          value={<CheckValue label="False" value={false} />}
        />
        <ValueCard
          label="ASN type"
          value={data?.asn?.organisation['org-type']}
        />
        {data?.abuse?.email && (
          <ValueCard
            label="Abuse contact"
            value={
              <Text
                as="a"
                color="primary"
                href={`mailto:${data?.abuse?.email}`}
              >
                mailto:{data?.abuse?.email}
              </Text>
            }
          />
        )}
      </Flex>
    </Flex>
  )
}

export default CommonSummary
