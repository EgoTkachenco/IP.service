import Head from 'next/head'
import { contact_email, contact_phone, site_url } from '@/constants/constants'
import { ignoreMarkup } from '@/utils'
import FAQ from '@/constants/faq.json'
import { useRouter } from 'next/router'

const renderCommonMetaData = ({ title, description, siteName, url }) => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      <title>{title}</title>
      <link rel="canonical" href={site_url + url} />
      <meta property="og:site_name" content={siteName} />
      <meta itemProp="og:title" content={title} />
      <meta itemProp="og:image" content={site_url + '/logo.svg'} />
      <meta property="og:description" content={description} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
    </>
  )
}

const getFAQTopicSchema = (topicCode = '') => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [],
  }
  let topic
  if (topicCode) topic = FAQ.find((topic) => topic.code === topicCode)
  else
    topic = FAQ.reduce(
      (acc, t) => {
        acc.questions = [...acc.questions, ...t.questions]
        return acc
      },
      { questions: [] }
    )

  if (!topic) return
  topic.questions.forEach((question) => {
    faqSchema.mainEntity.push({
      '@type': 'Question',
      name: question.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: question.answer,
      },
    })
  })
  console.log(faqSchema)
  return faqSchema
}

const getPricingSchema = (plans = []) => {
  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Flexible pricing for the most accurate IP data',
    description:
      "Whether you're starting off your newest side project or your enterprise needs the most accurate IP data, we’ve got you covered.",
    url: `${site_url}/pricing`,
    itemListElement: [],
  }
  for (let i = 0; i < plans.length; i++) {
    const plan = plans[i]
    listSchema.itemListElement.push({
      '@type': 'listitem',
      name: plan.name,
      description: [ignoreMarkup(plan.description)],
      image: `${site_url}/logo.svg`,
      url: `${site_url}/pricing/#${plan.name}`,
      mainEntityOfPage: plan.options
        .filter((option) => option.included)
        .map((option) => option.name),
      position: i + 1,
    })
  }
  return listSchema
}

const renderPageSchemaMetaData = (props, schemaKey) => {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Spyskey',
      url: site_url,
      logo: `${site_url}/logo.svg`,
      telephone: contact_phone,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: contact_phone,
          email: contact_email,
        },
      ],
    },
  ]
  switch (schemaKey) {
    case 'plans-list':
      schema.push(getPricingSchema(props.plans || []))
      break
    case 'faq':
      schema.push(getFAQTopicSchema(props.faqTopic))
      break
    default:
      break
  }
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}

export function useMetadataRenderer() {
  return (props) => {
    const { title, description, schema } = props
    const router = useRouter()
    return (
      <>
        <Head>
          {renderCommonMetaData({
            title: title,
            description: description,
            siteName: title,
            url: router.pathname,
          })}

          {renderPageSchemaMetaData(props, schema)}
        </Head>
      </>
    )
  }
}
