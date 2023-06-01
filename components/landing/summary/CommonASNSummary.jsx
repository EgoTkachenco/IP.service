import { Flex, H3, Text } from '@/core'
import { ValueCard, CheckValue } from './styled'

const CommonASNSummary = ({ id, data }) => {
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
        <ValueCard label="Company" value="Limited Liability Company lifecell" />
        <ValueCard label="Hosted domains" value="0" />
        <ValueCard
          label="Privacy"
          value={<CheckValue label="False" value={false} />}
        />
        <ValueCard
          label="Anycast"
          value={<CheckValue label="False" value={false} />}
        />
        <ValueCard label="ASN type" value="ISP" />
        <ValueCard
          label="Abuse contact"
          value={
            <Text as="a" color="primary" href="mailto:ripe@lifecell.com.ua">
              mailto:ripe@lifecell.com.ua
            </Text>
          }
        />
      </Flex>
    </Flex>
  )
}

export default CommonASNSummary
