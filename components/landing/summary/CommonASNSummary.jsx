import { Flex, H3, Text } from '@/core'
import { ValueCard, CheckValue } from './styled'

const CommonASNSummary = ({ id, data }) => {
  console.log(data)
  return (
    <Flex direction="column" gap="32px" id={id} width="100%">
      <H3 color="dark">Summary</H3>
      <Flex direction="column" gap="10px" width="100%">
        <ValueCard
          label="ASN"
          value={
            <>
              <Text color="primary" inline>
                {data?.asn?.ashandle}
              </Text>{' '}
              -{' '}
              {data?.asn?.desscr ||
                (data?.asn?.organisation &&
                  data?.asn?.organisation['org-name']) ||
                'no organisation'}
            </>
          }
        />
        <ValueCard label="Hostname" value="No Hostname" />
        <ValueCard
          label="Range"
          value={<Text color="primary">88.155.48.0/20</Text>}
        />
        <ValueCard
          label="Company"
          value={data?.asn?.organisation && data?.asn?.organisation['org-name']}
        />
        <ValueCard
          label="Hosted domains"
          value={data?.reverse.domains.length}
        />
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

export default CommonASNSummary
