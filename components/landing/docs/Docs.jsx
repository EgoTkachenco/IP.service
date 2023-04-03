import styled from 'styled-components'
import { Flex, H5, Text, Card, H2, H6, Chip, Caption } from '@/core'
import Navigation from './Navigation'
import { useObserverNavigation } from '@/hooks'
import { Fragment, useEffect, useState } from 'react'
import { CopyIconButton } from '@/components/reusable/onboarding/OnboardingStep1'
import JSONPreview, {
  ErrorJSON,
} from '@/components/reusable/search/JSONPreview'
import {
  abuseService,
  asnService,
  carrierService,
  companyService,
  geolocationService,
  privacyService,
  rangesService,
  reverseService,
  whoisService,
} from '@/utils/api'

const Docs = () => {
  const [activeBlock, setActiveBlock] = useObserverNavigation('docs')
  return (
    <Wrapper>
      <Navigation
        docs={docs}
        currentBlock={activeBlock}
        onNavigationChange={setActiveBlock}
      />
      <Content id="docs">
        {docs.map((topic, i) => (
          <Fragment key={i}>
            <TopicTitle color="dark">{topic.title}</TopicTitle>
            {topic.blocks.map((block, j) => (
              <DocsCard title={block.title} id={'block-' + block.order} key={j}>
                {block.content()}
              </DocsCard>
            ))}
          </Fragment>
        ))}
      </Content>
    </Wrapper>
  )
}

export default Docs

const Content = styled(Flex)`
  flex-direction: column;
  gap: 50px;
  flex-grow: 1;
  max-width: 885px;
  padding-bottom: 100px;

  & > :first-child {
    margin-top: 100px;
    @media (max-width: 1140px) {
      margin-top: 50px;
    }
  }

  @media (max-width: 1140px) {
    gap: 35px;
    padding-bottom: 32px;
  }
`

const Wrapper = styled(Flex)`
  position: relative;
  align-items: stretch;
  gap: 44px;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 0;
    padding: 0 24px;
  }
`

const TopicTitle = styled(H2)`
  margin-top: 50px;

  @media (max-width: 1140px) {
    margin-top: 24px;
    margin-left: 24px;
  }
`

const DocsCard = ({ title, children, id }) => (
  <Card id={id} color="white" width="100%" gap="24px">
    <H5 color="dark">{title}</H5>
    <DocsContent>{children}</DocsContent>
  </Card>
)

const DocsContent = styled(Flex)`
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1140px) {
    gap: 24px;
  }
`

const Example = styled(Flex)`
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

const CopyCard = ({ children, data }) => (
  <Card
    color="dark"
    direction="row"
    justify="space-between"
    py="20px"
    gap="8px"
    width="100%"
  >
    <Text
      color="success"
      font="monospace"
      weight="400"
      width="100%"
      style={{ wordBreak: 'break-all', alignSelf: 'center' }}
    >
      {children}
    </Text>
    <CopyIconButton data={data} />
  </Card>
)

const Available = ({ plans = [] }) => (
  <Flex gap="16px" align="center" fwrap>
    <Text weight={700}>Available in: </Text>
    <Flex gap="10px">
      {plans.includes('basic') && <Chip type="success">Basic</Chip>}
      {plans.includes('strandart') && <Chip type="secondary">Standart</Chip>}
      {plans.includes('bussiness') && <Chip type="primary">Bussiness</Chip>}
    </Flex>
  </Flex>
)

const Details = ({ service, ip, format }) => {
  const [response, setResponse] = useState(null)
  useEffect(() => {
    if (service)
      service(ip || '8.8.8.8')
        .then((data) => (format ? format(data) : data))
        .then((data) => setResponse(data))
  }, [])
  return (
    <DetailsCard color="dark" gap="20px">
      <DetailsCardTop justify="space-between">
        <Points>
          <span />
          <span />
          <span />
        </Points>
      </DetailsCardTop>
      <PreviewContainer className="custom-scroll">
        {format ? <Text color="secondary">...</Text> : ''}
        <JSONPreview icon={false} data={response || {}} color="white" />
        {format ? <Text color="secondary">...</Text> : ''}
      </PreviewContainer>
    </DetailsCard>
  )
}
const DetailsCard = styled(Card)`
  width: 100%;

  @media (max-width: 1140px) {
    padding: 16px;
    gap: 16px;

    ${Text} {
      font-size: 12px;
      line-height: 150%;
    }

    ${Caption} {
      font-size: 10px;
      line-height: 150%;
    }
  }
`
const DetailsCardTop = styled(Flex)`
  width: 100%;
  align-items: center;
  @media (max-width: 1140px) {
    align-items: flex-start;
    gap: 64px;
  }
`
const PreviewContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 8px;
  max-height: 300px;
  overflow: auto;
`
const Points = styled(Flex)`
  gap: 10px;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    @media (max-width: 1140px) {
      width: 6px;
      height: 6px;
    }
  }
  & :nth-child(1) {
    background: ${({ theme }) => theme.colors.primary};
  }
  & :nth-child(2) {
    background: ${({ theme }) => theme.colors.success};
  }
  & :nth-child(3) {
    background: ${({ theme }) => theme.colors.secondary};
  }
`

const DOCS = [
  {
    title: 'Getting Started',
    blocks: [
      {
        title: 'Authentication',
        content: () => (
          <>
            <Text>
              An authentication token is a unique identifier that confirms the
              identity of a user or system and grants access to protected
              resources or data.Using an auth token in a qu ery parameter can be
              a convenient and efficient way to authenticate users, as it allows
              the token to be easily passed in the URL of a web request.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token = ozjtkxh95yt7SHkK">
                GET https://api.spyskey.com/8.8.8.8?token=ozjtkxh95yt7SHkK
              </CopyCard>
            </Example>
            <Text>
              You can get a token in your personal account. If the token does
              not exist, you will receive an error response with a 403 status.
            </Text>
          </>
        ),
      },
      {
        title: 'IP Address Parameter',
        content: () => (
          <>
            <Text>
              The API supports passing in a single IPv4 or IPv6 IP address, ASN
              code.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token = ozjtkxh95yt7SHkK">
                GET https://api.spyskey.com/8.8.8.8?token = TOKEN <br />
                <br />
                GET https://api.spyskey.com/2607:F888::?token = TOKEN <br />
                <br />
                GET https://api.spyskey.com/AS131293?token = TOKEN
              </CopyCard>
            </Example>
            <Text>
              You can get a token in your personal account. If the token does
              not exist, you will receive an error response with a 403 status.
            </Text>
          </>
        ),
      },
      {
        title: 'HTTPS/ SSL',
        content: () => (
          <>
            <Text>
              The SSL (Secure Sockets Layer) and HTTPS (Hyper Text Transfer
              Protocol Secure) protocol is a security technology that is used to
              establish an encrypted connection between a web server and a web
              browser. SSL/TLS protocol is a widely used security protocol that
              is designed to protect sensitive information transmitted over the
              internet, such as login credentials, financial information, and
              personal data. This api supports secure protocol. You must add
              https:// to the request url
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token=TOKEN">
                GET https://api.spyskey.com/8.8.8.8?token = TOKEN
              </CopyCard>
            </Example>
          </>
        ),
      },
      {
        title: 'Rate Limits',
        content: () => (
          <>
            <Text>
              This api has a limit on the number of requests. It depends on the
              plan of the token.
            </Text>
            <Example>
              <Flex gap="20px" fwrap>
                <Chip type="grey">Free: 50k</Chip>
                <Chip type="success">Basic: 150k</Chip>
                <Chip type="secondary">Standard: 250k</Chip>
                <Chip type="primary">Business: 500k</Chip>
              </Flex>
            </Example>
            <Text>
              If you exceed the number of requests, you will receive an error
              response with status 429
            </Text>
          </>
        ),
      },
      {
        title: 'Response Codes',
        content: () => (
          <>
            <Text>
              The API returns HTTP status codes to indicate the status of the
              request. The following HTTP status codes may be returned:
            </Text>
            <Card color="dark" gap="20px">
              <ErrorJSON
                name="200 OK"
                value="The request was successful, and the requested ASN information is returned in the response body."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="400 Bad Request"
                value="The request is invalid or malformed."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="401 Unauthorized"
                value="Authentication credentials were missing or invalid."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="404 Not Found"
                value="The requested IP address could not be found in the ASN database."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="429 Too Many Requests"
                value="The user has exceeded the rate limit for requests."
                isIcon
                errorColor="danger"
              />
            </Card>
          </>
        ),
      },
    ],
  },
  {
    title: 'Data Types',
    blocks: [
      {
        title: 'Geolocation data',
        content: () => (
          <>
            <Available plans={['basic', 'strandart', 'bussiness']} />
            <Text>
              Geolocation IP refers to the process of determining the geographic
              location of an Internet Protocol (IP) address. Geolocation IP
              technology can determine the physical location of a device based
              on its IP address by using various data sources, such as internet
              service provider (ISP) information, GPS data, and Wi-Fi access
              points.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token = TOKEN">
                GET: https://api.spyskey.com/8.8.8.8?token = TOKEN
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details
                service={geolocationService}
                format={(data) => ({ geolocation: data })}
              />
            </Example>
          </>
        ),
      },
      {
        title: 'ASN Data',
        content: ({ data } = {}) => (
          <>
            <Available plans={['basic', 'strandart', 'bussiness']} />
            <Text>
              ASN (Autonomous System Number) IP refers to a unique identifier
              assigned to an autonomous system, which is a collection of
              connected IP networks that operate under a common administrative
              domain. ASN IP addresses are used to identify the routing paths of
              internet traffic and help to facilitate the exchange of data
              between networks.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token = TOKEN">
                GET: https://api.spyskey.com/8.8.8.8?token = TOKEN
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details
                service={asnService}
                format={(data) => ({ asn: data })}
              />
            </Example>
          </>
        ),
      },
      {
        title: 'Privacy Data',
        content: () => (
          <>
            <Available plans={['strandart', 'bussiness']} />
            <Text>
              Privacy IP data refers to personal information that can be
              obtained from an individual's internet activity, such as their IP
              address, browsing history, search queries, and location data. This
              data can be collected and processed by various organizations, such
              as internet service providers (ISPs), advertisers, and social
              media platforms, to track and target users with personalized
              content and advertisements.To protect their privacy, individuals
              can use various tools and techniques to mask their IP address and
              prevent their internet activity from being tracked, such as
              virtual private networks (VPNs), Tor browsers, and ad blockers
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/asn/8.8.8.8?token = TOKEN">
                GET: https://api.spyskey.com/asn/8.8.8.8?token = TOKEN
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details
                service={privacyService}
                format={(data) => ({ privacy: data })}
              />
            </Example>
          </>
        ),
      },
      {
        title: 'Carrier Data',
        content: () => (
          <>
            <Available plans={['bussiness']} />
            <Text>
              Mobile carrier IP refers to the internet protocol (IP) address
              assigned to a mobile device by its mobile network operator (MNO).
              When a mobile device connects to a mobile network, it is assigned
              a unique IP address that allows it to communicate with other
              devices on the internet.
            </Text>
            <Text>
              Mobile carrier IP addresses are used to identify the location of a
              mobile device and to route internet traffic to and from the
              device. This information can be useful for various purposes, such
              as providing location-based services, identifying fraudulent
              activity, and improving network performance.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/1.38.167.255?token = TOKEN">
                GET: https://api.spyskey.com/1.38.167.255?token = TOKEN
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details
                service={carrierService}
                ip="1.38.167.255"
                format={(data) => ({ carrier: data })}
              />
            </Example>
          </>
        ),
      },
      {
        title: 'Company Data',
        content: () => (
          <>
            <Available plans={['bussiness']} />
            <Text>
              Company Data refers to the information that can be obtained from
              an IP address to identify the name of the organization behind the
              IP. This information can be useful for various purposes, such as
              marketing research, cybersecurity, and intellectual property
              protection.
            </Text>
            <Text>
              To obtain company data from an IP address, various tools and
              techniques can be used, such as WHOIS databases, IP lookup tools,
              and reverse DNS lookups. These tools can provide information about
              the organization's name, address, phone number, and other contact
              information.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token = TOKEN">
                GET: https://api.spyskey.com/8.8.8.8?token = TOKEN
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details
                service={companyService}
                format={(data) => ({ company: data })}
              />
            </Example>
          </>
        ),
      },
      {
        title: 'Hosted Domains Data',
        content: () => (
          <>
            <Available plans={['bussiness']} />
            <Text>
              Hosted domains IP refers to the internet protocol (IP) addresses
              assigned to websites and web applications that are hosted on a
              shared server or hosting provider. When a website is hosted on a
              server, it is assigned a unique IP address that allows it to be
              accessed by users on the internet.
            </Text>
            <Text>
              Hosted domains IP addresses can provide valuable information about
              the hosting provider, the website owner, and the location of the
              server. They can also be used for various purposes, such as
              cybersecurity, search engine optimization (SEO), and geolocation
              targeting.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token = TOKEN">
                GET: https://api.spyskey.com/8.8.8.8?token = TOKEN
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details
                service={reverseService}
                format={(data) => ({ reverse: data })}
              />
            </Example>
          </>
        ),
      },
      {
        title: 'Abuse Data',
        content: () => (
          <>
            <Available plans={['bussiness']} />
            <Text>
              An abuse IP is an internet protocol (IP) address that has been
              identified as engaging in abusive behavior, such as spamming,
              hacking, or distributing malware. This type of behavior can cause
              harm to other users and organizations on the internet and can be a
              serious security threat.
            </Text>
            <Text>
              Abuse IP addresses can be identified through various means, such
              as network monitoring, email filters, and antivirus software. Once
              identified, these IP addresses can be added to blacklists and
              other security measures to prevent further abusive behavior.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token = TOKEN">
                GET: https://api.spyskey.com/8.8.8.8?token = TOKEN
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details
                service={abuseService}
                format={(data) => ({ abuse: data })}
              />
            </Example>
          </>
        ),
      },
      {
        title: 'Whois Data',
        content: () => (
          <>
            <Available plans={['bussiness']} />
            <Text>
              WHOIS IP data refers to the information that can be obtained from
              a WHOIS database about an internet protocol (IP) address. WHOIS is
              a protocol used to query databases that contain information about
              domain name registrations and IP addresses, including contact
              details for the owners and administrators of the domain or IP
              address.
            </Text>
            <Text>
              WHOIS IP data can provide valuable information about the
              organization or individual responsible for an IP address,
              including their name, address, phone number, email address, and
              other contact information. This information can be useful for
              various purposes, such as cybersecurity, intellectual property
              protection, and marketing research.
            </Text>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/8.8.8.8?token = TOKEN">
                GET: https://api.spyskey.com/8.8.8.8?token = TOKEN
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details
                service={whoisService}
                format={(data) => ({ whois: data })}
              />
            </Example>
          </>
        ),
      },
    ],
  },
  {
    title: 'Other APIs',
    blocks: [
      {
        title: 'ASN API',
        content: () => (
          <>
            <Flex gap="16px" align="center" fwrap>
              <Text weight={700}>Tech Documentation for : </Text>
              <Flex gap="10px">
                <Chip type="success">ASN</Chip>
                <Chip type="secondary">IP</Chip>
                <Chip type="primary">API</Chip>
              </Flex>
            </Flex>
            <Text>
              The ASN IP API is a RESTful web service that allows users to
              programmatically access details about an Autonomous System Number
              (ASN), such as the assigned prefixes, related domain, and more.
              This API is available in Basic, Standard, and Business plans. The
              API is accessed via HTTP GET requests and returns JSON-formatted
              responses.
            </Text>
            <Example>
              <H6 color="dark">API Endpoint:</H6>
              <Text>
                The endpoint for the ASN IP API is "
                <Text color="primary" inline>
                  {'/asn/{ip}'}
                </Text>
                ", where{' '}
                <Text color="primary" inline>
                  {'{ip}'}
                </Text>{' '}
                is the IP address you want to retrieve the ASN information for.
                The endpoint should be accessed using HTTPS protocol.
              </Text>
            </Example>
            <Example>
              <H6 color="dark">Request Parameters:</H6>
              <Text>
                The API requires one path parameter:{' '}
                <Text color="primary" inline>
                  {'{ip}'}
                </Text>
                . This parameter specifies the IP address for which you want to
                retrieve the ASN information. The parameter should be a valid
                IPv4 or IPv6 address.
              </Text>
            </Example>
            <Example>
              <H6 color="dark">Response Codes:</H6>
              <Text>
                The API returns HTTP status codes to indicate the status of the
                request. The following HTTP status codes may be returned:
              </Text>
            </Example>
            <Card color="dark" gap="20px">
              <ErrorJSON
                name="200 OK"
                value="The request was successful, and the requested ASN information is returned in the response body."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="400 Bad Request"
                value="The request is invalid or malformed."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="401 Unauthorized"
                value="Authentication credentials were missing or invalid."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="404 Not Found"
                value="The requested IP address could not be found in the ASN database."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="429 Too Many Requests"
                value="The user has exceeded the rate limit for requests."
                isIcon
                errorColor="danger"
              />
            </Card>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/asn/8.8.8.8">
                GET: https://api.spyskey.com/asn/8.8.8.8
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details service={asnService} />
            </Example>
            <Text>
              The above example shows the response for requesting the ASN
              information for IP address 8.8.8.8. The response contains the ASN
              number (AS15169), the name of the organization (Google LLC), the
              country code (US), and the prefixes and domains associated with
              the ASN.
            </Text>
          </>
        ),
      },
      {
        title: 'Ranges API',
        content: () => (
          <>
            <Flex gap="16px" align="center">
              <Text weight={700}>Tech Documentation for : </Text>
              <Flex gap="10px">
                <Chip type="secondary">IP</Chip>
                <Chip type="primary">API</Chip>
              </Flex>
            </Flex>
            <Text>
              The Ranges IP API is a RESTful web service that allows users to
              retrieve a list of all IP address ranges assigned to or operated
              by a company, identified by the provided domain name. This API is
              available in the Business plan. The API is accessed via HTTP GET
              requests and returns JSON-formatted responses.
            </Text>
            <Example>
              <H6 color="dark">API Endpoint:</H6>
              <Text>
                The endpoint for the Ranges IP API is "
                <Text color="primary" inline>
                  {'/ranges/{domain}'}
                </Text>
                ", where{' '}
                <Text color="primary" inline>
                  {'{domain}'}
                </Text>{' '}
                is the domain name you want to retrieve the IP address ranges
                for. The endpoint should be accessed using HTTPS protocol.
              </Text>
            </Example>
            <Example>
              <H6 color="dark">Request Parameters:</H6>
              <Text>
                The API requires one path parameter:{' '}
                <Text color="primary" inline>
                  {'{domain}'}
                </Text>
                . This parameter specifies the domain name for which you want to
                retrieve the IP address ranges. The parameter should be a valid
                domain name.
              </Text>
            </Example>
            <Example>
              <H6 color="dark">Response Codes:</H6>
              <Text>
                The API returns HTTP status codes to indicate the status of the
                request. The following HTTP status codes may be returned:
              </Text>
            </Example>
            <Card color="dark" gap="20px">
              <ErrorJSON
                name="200 OK"
                value="The request was successful, and the requested IP address ranges are returned in the response body."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="400 Bad Request"
                value="The request is invalid or malformed."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="401 Unauthorized"
                value="Authentication credentials were missing or invalid."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="404 Not Found"
                value="The requested domain name could not be found in the IP address range database."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="429 Too Many Requests"
                value="The user has exceeded the rate limit for requests."
                isIcon
                errorColor="danger"
              />
            </Card>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/ranges/cloudflare.com">
                GET: https://api.spyskey.com/ranges/cloudflare.com
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details service={rangesService} ip="cloudflare.com" />
            </Example>
            <Text>
              The above example shows the response for requesting the IP address
              ranges for the domain name "cloudflare.com". The response contains
              a list of IP address ranges assigned to or operated by the company
              associated with the domain name.
            </Text>
          </>
        ),
      },
      {
        title: 'Hosted domains api',
        content: () => (
          <>
            <Flex gap="16px" align="center">
              <Text weight={700}>Hosted domains api: </Text>
              <Flex gap="10px">
                <Chip type="secondary">IP</Chip>
                <Chip type="primary">API</Chip>
              </Flex>
            </Flex>
            <Text>
              The Hosted Domains IP API is a RESTful web service that allows
              users to retrieve a list of all domains hosted on a given IP
              address. The API is accessed via HTTP GET requests and returns
              JSON-formatted responses.
            </Text>
            <Example>
              <H6 color="dark">API Endpoint:</H6>
              <Text>
                The endpoint for the Hosted Domains IP API is "{' '}
                <Text color="primary" inline>
                  {'/domains/{ip}'}
                </Text>
                ", where{' '}
                <Text color="primary" inline>
                  {'{ip}'}
                </Text>{' '}
                is the IP address you want to retrieve the hosted domains for.
                The endpoint should be accessed using HTTPS protocol.
              </Text>
            </Example>
            <Example>
              <H6 color="dark">Request Parameters:</H6>
              <Text>
                The API requires one path parameter:{' '}
                <Text color="primary" inline>
                  {'{ip}'}
                </Text>
                . This parameter specifies the IP address for which you want to
                retrieve the hosted domains. The parameter should be a valid
                IPv4 or IPv6 address.
              </Text>
            </Example>
            <Example>
              <H6 color="dark">Response Codes:</H6>
              <Text>
                The API returns HTTP status codes to indicate the status of the
                request. The following HTTP status codes may be returned:
              </Text>
            </Example>
            <Card color="dark" gap="20px">
              <ErrorJSON
                name="200 OK"
                value="The request was successful, and the requested IP address ranges are returned in the response body."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="400 Bad Request"
                value="The request is invalid or malformed."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="401 Unauthorized"
                value="Authentication credentials were missing or invalid."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="404 Not Found"
                value="The requested domain name could not be found in the IP address range database."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="429 Too Many Requests"
                value="The user has exceeded the rate limit for requests."
                isIcon
                errorColor="danger"
              />
            </Card>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/domains/8.8.8.8">
                GET: https://api.spyskey.com/domains/8.8.8.8
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details service={reverseService} ip="8.8.8.8" />
            </Example>
            <Text>
              The example above shows the response to a hosted domain request
              for the IP address "8.8.8.8". It returns a list of all domains
              hosted on the given IP address.
            </Text>
          </>
        ),
      },
      {
        title: 'Whois API',
        content: () => (
          <>
            <Flex gap="16px" align="center">
              <Text weight={700}>Whois API: </Text>
              <Flex gap="10px">
                <Chip type="secondary">IP</Chip>
                <Chip type="primary">API</Chip>
              </Flex>
            </Flex>
            <Text>
              The Whois IP API is a RESTful API that provides programmatic
              access to Whois data by IP, ID or domain. This API is available in
              the Business package and can be accessed via the endpoint '
              <Text color="primary" inline>
                {'/whois/{ip}'}
              </Text>
              ' where{' '}
              <Text color="primary" inline>
                {'{ip}'}
              </Text>{' '}
              is the IP address to lookup.
            </Text>

            <Example>
              <H6 color="dark">API Usage:</H6>
              <Text>
                This API provides a simple GET request to retrieve Whois data
                for a given IP address. The response format is in JSON.
              </Text>
            </Example>
            <Example>
              <H6 color="dark">Request:</H6>
              <Text>
                To use this API, make a GET request to the endpoint with the IP
                address you wish to lookup included in the URL path parameter.
              </Text>
            </Example>
            <Example>
              <H6 color="dark">Response Codes:</H6>
              <Text>
                The API returns HTTP status codes to indicate the status of the
                request. The following HTTP status codes may be returned:
              </Text>
            </Example>
            <Card color="dark" gap="20px">
              <ErrorJSON
                name="200 OK"
                value="The request was successful, and the requested IP address ranges are returned in the response body."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="400 Bad Request"
                value="The request is invalid or malformed."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="401 Unauthorized"
                value="Authentication credentials were missing or invalid."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="404 Not Found"
                value="The requested domain name could not be found in the IP address range database."
                isIcon
                errorColor="danger"
              />
              <ErrorJSON
                name="429 Too Many Requests"
                value="The user has exceeded the rate limit for requests."
                isIcon
                errorColor="danger"
              />
            </Card>
            <Example>
              <H6 color="dark">Example Request:</H6>
              <CopyCard data="https://api.spyskey.com/whois/8.8.8.8">
                GET: https://api.spyskey.com/whois/8.8.8.8
              </CopyCard>
            </Example>
            <Example>
              <H6 color="dark">Example Response:</H6>
              <Details service={whoisService} />
            </Example>
            <Text>
              The example above shows the response to a hosted domain request
              for the IP address "8.8.8.8". It returns whois information about
              the given ip address.
            </Text>
          </>
        ),
      },
    ],
  },
]
let order = 0
const docs = DOCS.map((topic) => {
  return {
    ...topic,
    blocks: topic.blocks.map((block) => {
      return { ...block, order: ++order }
    }),
  }
})
