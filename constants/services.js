import routes from './routes'

const services = [
  {
    icon: 'geolocation',
    color: 'primary',
    name: 'Geolocation API',
    description: 'Identification of an IP address',
    description_full:
      'Unlock accurate IP geolocation, revealing the true geographic locations seamlessly.',
    link: routes['geolocation-api'],
  },
  {
    icon: 'move',
    color: 'success',
    name: 'IP Ranges API',
    description: 'Target specific IP ranges',
    description_full:
      'Explore company-owned IP ranges, complete with total count and a detailed breakdown of each.',
    link: routes['ranges-api'],
  },
  {
    icon: 'shield',
    color: 'secondary',
    name: 'Privacy Detection',
    description: 'Unmask user’s identities',
    description_full:
      'Unmask hidden IP addresses with advanced detection for VPNs, proxies, and beyond.',
    link: routes['privacy-api'],
  },
  {
    icon: 'building',
    color: 'primary',
    name: 'IP to Company API',
    description: 'Leverage anonymus leads',
    description_full:
      'Unlock genuine company insights behind IP traffic and unveil the identity of your website visitors.',
    link: routes['company-api'],
  },
  {
    icon: 'share',
    color: 'success',
    name: 'ASN API',
    description: 'Improve data enrichment',
    description_full:
      'Empower customers with extensive database access, featuring comprehensive ASN details for each IP address and associated domains.',
    link: routes['asn-api'],
  },
  {
    icon: 'globe',
    color: 'secondary',
    name: 'Hosted Domains API',
    description: 'Enchance lead generation',
    description_full:
      'Explore a comprehensive collection of domains hosted on one IP address, conveniently compiled for you.',
    link: routes['reverse-api'],
  },
  {
    icon: 'wifi',
    color: 'primary',
    name: 'IP to Mobille Carrier API',
    description: 'Customize user expiriences',
    description_full:
      'Identify mobile carriers effortlessly, revealing carrier name, country, and additional insights.',
    link: routes['carrier-api'],
  },
  {
    icon: 'flag',
    color: 'success',
    name: 'Abuse Contact API',
    description: 'Automate abusive IP reporting',
    description_full:
      'Access extensive abuse contact data for every IP address online, featuring email, city, and more valuable details.',
    link: routes['abuse-api'],
  },
  {
    icon: 'zoom-in',
    color: 'secondary',
    name: 'IP Whois API',
    description: 'Get more IP insights',
    description_full:
      'Offering precise, user-friendly records encompassing Point of Contact (POC), Organization Identifiers (ORG), Networks (NET), and additional insights.',
    link: routes['whois-api'],
  },
  {
    icon: 'real-ip',
    color: 'primary',
    name: 'Real IP Address',
    description: 'Uncover Real IP Address',
    description_full:
      'Boost your cybersecurity and business intelligence with Spyskey’s unprecedented service that uncovers real IP addresses.',
    link: routes['real-ip-api'],
  },
]

export default services
