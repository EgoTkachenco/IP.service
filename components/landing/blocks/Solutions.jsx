import styled from 'styled-components'
import { H2, H5, Flex, Button, Text, Icon } from '@/core'
import { Block, BlockInner } from './Block'
import { Carousel } from '@mantine/carousel'
import services from '@/constants/services'
import Link from 'next/link'

const Solutions = () => {
  return (
    <Block>
      <Content>
        <H2 color="dark" align="center">
          Solutions
        </H2>
        <Container>
          {solutions.map((solution, i) => (
            <SolutionItem
              key={i}
              icon={solution.icon}
              title={solution.title}
              text={solution.text}
            />
          ))}
        </Container>
      </Content>
    </Block>
  )
}

export default Solutions

const solutions = [
  {
    icon: 'www',
    title: 'Attack Surface Intelligence',
    text: 'Attack surfaces continue to widen as interconnectivity grows and business operations expand and evolve. Attack surface management (ASM) solutions must adapt and continuously improve their asset discovery, scoring, monitoring, and prioritization capabilities, notably by accessing real-time and comprehensive Internet intelligence sources, including DNS, IP, and WHOIS data.',
  },
  {
    icon: 'security',
    title: 'Security Operations and Platform Intelligence',
    text: 'Enterprises rely on managed security operations and platforms for round-the-clock protection against threat actors. Providing this service requires comprehensive and up-to-date visibility into the primary source of threats—the Internet. Historical and real-time access to Internet events, including DNS, WHOIS, and IP information, enables early threat detection and accurate contextualization.',
  },

  {
    icon: 'inteligent',
    title: 'Cyber Threat Intelligence Enrichment Solutions',
    text: 'Cyber threat intelligence is only as good as the data used to process it. Supplementing your current cyber threat intelligence stack with real-time and historical DNS, domain, WHOIS, IP, and other Internet-related data can enable critical security processes—from early and real-time threat detection, analysis, and expansion to threat disruption.',
  },
  {
    icon: 'law',
    title: 'Law Enforcement Solutions',
    text: 'Policing requires a balanced mix of technological advancement and intelligence-led initiatives. A unified view of the Internet can supplement existing law enforcement data sources and ensure that no stones are left unturned. DNS, WHOIS, and IP intelligence can provide clues that are otherwise hidden or overlooked, aiding law enforcers in their fight against cybercrime.',
  },

  {
    icon: 'banking',
    title: 'Digital Risk Protection Intelligence',
    text: 'As digital transformation continues, organizations become exposed to a growing number of digital risks. Gaining access to Internet-wide intelligence, including DNS, IP, and domain data, can enhance enterprise protection against various digital risks, whether from third parties, internal vulnerabilities, supply chain channels, or other sources.',
  },
  {
    icon: 'marketing',
    title: 'Market and Competitive Intelligence',
    text: 'With half the world’s population and almost all organizations going online, the Internet is a valuable source of market data. DNS, IP, WHOIS, and other Internet data can provide much-needed insights that can help with market forecasting, competitive research and monitoring, business-to-business (B2B) targeting, service discovery, and other critical business processes.',
  },

  {
    icon: 'registar',
    title: 'Know Who You’re Talking To (KWYTT) Intelligence',
    text: 'Our interconnected global ecosystem requires constant communication with potential and existing customers, vendors, suppliers, and several other parties. Not all of them can be trusted, hence the need for initial and continuous identity verification that can be enriched with real-time access to domain, IP, DNS, and other Internet-related data.',
  },
]

const Content = styled(BlockInner)`
  flex-direction: column;
  align-items: center;
  gap: 100px;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;

  @media (max-width: 1140px) {
    width: calc(100% - (24px * 2));
  }
`

const SolutionItem = ({ icon, title, text }) => (
  <SolutionItemContainer>
    <Icon icon={icon} size="30px" color="primary" />
    <H5 color="dark">{title}</H5>
    <Text>{text}</Text>
  </SolutionItemContainer>
)

const SolutionItemContainer = styled(Flex)`
  flex-direction: column;
  flex: 0 1 calc(50% - 50px);

  ${H5} {
    margin: 16px 0 24px;
  }
`
