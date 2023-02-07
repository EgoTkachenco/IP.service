import { useText } from '@/locales'

export const renderMetaData = ({ title, description, siteName }) => {
  return (
    <>
      <title>{title}</title>
      <meta property="og:site_name" content={siteName} />
      <meta itemProp="og:title" content={title} />
      <meta itemProp="name" content={title} />

      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    </>
  )
}

export function useMetadataRenderer() {
  const t = useText()
  return ({ title, description }) => {
    return renderMetaData({
      title: title || t('siteName'),
      description: description || t('siteDescription'),
      siteName: t('siteName'),
    })
  }
}
