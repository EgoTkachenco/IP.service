import routes from './routes'

const services = [
  {
    icon: 'geolocation',
    color: 'primary',
    name: 'Geolocation API',
    description: 'Identification of an IP address',
    description_full:
      "IP address geolocation lookup is the identification of an IP address' geographic location in the real world.",
    link: routes['geolocation-api'],
  },
  {
    icon: 'move',
    color: 'success',
    name: 'IP Ranges API',
    description: 'Target specific IP ranges',
    description_full:
      'Lookup IP ranges that are owned or operated by a company, including the total number of ranges and an array with each of them.',
    link: routes['ranges-api'],
  },
  {
    icon: 'shield',
    color: 'secondary',
    name: 'Privacy Detection',
    description: 'Unmask user’s identities',
    description_full:
      "Detects various methods used to mask a user's true IP address, including VPN detection, proxy detection and more.",
    link: routes['privacy-api'],
  },
  {
    icon: 'building',
    color: 'primary',
    name: 'IP to Company API',
    description: 'Leverage anonymus leads',
    description_full:
      'Lookup company details behind IP traffic. This includes the company’s name, domain, and what type of company it is: ISP, business, or hosting',
    link: routes['company-api'],
  },
  {
    icon: 'share',
    color: 'success',
    name: 'ASN API',
    description: 'Improve data enrichment',
    description_full:
      'Giving our customers access to a database that includes ASN details for every IP address and every ASN’s related domains',
    link: routes['asn-api'],
  },
  {
    icon: 'globe',
    color: 'secondary',
    name: 'Hosted domains API',
    description: 'Enchance lead generation',
    description_full:
      'Returns a full list of domains that are hosted on a single IP address. These domains are ordered based on host.io domain ranking.',
    link: routes['reverse-api'],
  },
  {
    icon: 'wifi',
    color: 'primary',
    name: 'IP to Mobille Carrier API',
    description: 'Customize user expiriences',
    description_full:
      'Detects the carrier of a mobile device, and returns the carrier name, country and more.',
    link: routes['carrier-api'],
  },
  {
    icon: 'flag',
    color: 'success',
    name: 'Abuse Contact API',
    description: 'Automate abusive IP reporting',
    description_full:
      'Returns data containing information belonging to the abuse contact of every IP address on the Internet, including email, city and more.',
    link: routes['abuse-api'],
  },
  {
    icon: 'zoom-in',
    color: 'secondary',
    name: 'IP Whois API',
    description: 'Get more IP insights',
    description_full:
      'Provides records with accurate and easy-to-use data fields - Point of Contact (POC), Organization Identifiers (ORG), Networks (NET), and more.',
    link: routes['whois-api'],
  },
]

export default services
