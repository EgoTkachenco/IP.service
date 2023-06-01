import routes from '@/constants/routes'
import services from '@/constants/services'

export default [
  { name: 'My IP', link: routes.summary },
  {
    name: 'Products',
    links: services,
  },
  { name: 'Pricing', link: routes.pricing },
  { name: 'Contact', link: routes.contact },
  { name: 'Help Center', link: routes.faq },
  { name: 'Docs', link: routes.docs },
]
