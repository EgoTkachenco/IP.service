import routes from '@/constants/routes'

export default [
  {
    name: 'Products',
    links: [
      {
        name: 'Data Downloads',
        description: 'Customize user expiriences',
        icon: 'navigation',
        link: '/',
      },
      {
        name: 'IP Ranges API',
        description: 'Target specific IP ranges',
        icon: 'move',
        link: '/',
      },
      {
        name: 'Privacy Detection',
        description: 'Unmask user’s identities',
        icon: 'shield',
        link: '/',
      },
      {
        name: 'IP to Company API',
        description: 'Leverage anonymus leads',
        icon: 'building',
        link: routes['company-api'],
      },
      {
        name: 'ASN API',
        description: 'Improve data enrichment',
        icon: 'share',
        link: '/',
      },
      {
        name: 'Hosted domains API',
        description: 'Enchance lead generation',
        icon: 'globe',
        link: '/',
      },
      {
        name: 'IP to Mobille Carrier API',
        description: 'Customize user expiriences',
        icon: 'wifi',
        link: '/',
      },
      {
        name: 'Abuse Contact API',
        description: 'Automate abusive IP reporting',
        icon: 'flag',
        link: '/',
      },
      {
        name: 'IP Whois API',
        description: 'Get more IP insights',
        icon: 'zoom-in',
        link: '/',
      },
    ],
  },
  { name: 'Pricing', link: routes.pricing },
]
