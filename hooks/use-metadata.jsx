import Head from 'next/head'

export const renderMetaData = ({ title, description, siteName }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      <title>{title}</title>
      <meta property="og:site_name" content={siteName} />
      <meta itemProp="og:title" content={title} />
      <meta itemProp="name" content={title} />

      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}

export function useMetadataRenderer() {
  return ({ title, description }) => {
    return renderMetaData({
      title: title,
      description: description,
      siteName: title,
    })
  }
}
