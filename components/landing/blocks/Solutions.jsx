import styled from 'styled-components'
import { H5, Flex, Text, Icon } from '@/core'
import { Block, BlockInner, Title } from './Block'

const Solutions = () => {
  return (
    <Block>
      <Content>
        <Title color="dark">Solutions</Title>
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
    title: 'Fraud Prevention',
    text: 'Safeguard your business with our advanced IP intelligence, email, and phone validation services, designed to identify and block suspicious activities like phishing, identity theft, and spam, ensuring a secure and trustworthy environment.',
  },
  {
    icon: 'security',
    title: 'Geolocation Targeting',
    text: 'Enhance your marketing reach by leveraging our precise IP geolocation data, enabling you to create personalized and location-specific campaigns for improved customer engagement, conversion rates, and brand awareness.',
  },

  {
    icon: 'inteligent',
    title: 'Data Validation',
    text: 'Maintain clean, accurate customer databases with our comprehensive email verification and phone number validation solutions, reducing bounce rates, enhancing deliverability, and optimizing your communication efforts.',
  },
  {
    icon: 'law',
    title: 'Cybersecurity',
    text: 'Strengthen your digital defenses by utilizing our cutting-edge IP intelligence, email filtering, and phone validation services, proactively detecting and blocking malicious IP addresses, spam emails, and harmful phone numbers for enhanced protection.',
  },

  {
    icon: 'banking',
    title: 'Access Control',
    text: 'Implement location-based restrictions on sensitive content or services with our accurate IP geolocation data, providing a customized and secure user experience, while adhering to regional regulations and licensing agreements.',
  },
  {
    icon: 'marketing',
    title: 'Compliance Monitoring',
    text: 'Ensure regulatory compliance with data protection laws, such as GDPR, CCPA, and HIPAA, by leveraging our IP intelligence and email validation services to track user locations, safeguard privacy, and manage data accordingly.',
  },

  {
    icon: 'registar',
    title: 'Risk Assessment',
    text: 'Evaluate customer trustworthiness with our in-depth IP, email blacklist, and phone number analysis, empowering you to make informed decisions, prevent chargebacks, and mitigate potential risks.',
  },
  {
    icon: 'experiance-optimization',
    title: 'User Experience Optimization',
    text: "Personalize your website content, language, and currency based on users' IP geolocation data, fostering an engaging and tailored experience that boosts customer retention and satisfaction.",
  },

  {
    icon: 'network-management',
    title: 'Network Management',
    text: 'Monitor and analyze network traffic with our robust IP intelligence, email filtering, and phone validation solutions, identifying potential threats, DDoS attacks, or anomalies for optimal performance and security.',
  },
  {
    icon: 'market-research',
    title: 'Market Research',
    text: 'Gain valuable insights into customer demographics, preferences, and behavior with our comprehensive IP, email, and phone data analysis, informing data-driven strategies, competitive analysis, and fueling business growth.',
  },
]

const Content = styled(BlockInner)`
  flex-direction: column;
  align-items: center;
  gap: 100px;
  @media (max-width: 1140px) {
    gap: 28px;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  @media (max-width: 1140px) {
    gap: 28px;
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
  gap: 16px;

  @media (max-width: 1140px) {
    flex: 0 1 100%;
  }

  ${H5} {
    margin: 16px 0 24px;
  }
`
