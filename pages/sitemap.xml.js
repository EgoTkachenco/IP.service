import { site_url } from '@/constants/constants'
import * as fs from 'fs'

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const getRecirsiveStaticPaths = (folder = '') =>
    fs
      .readdirSync('pages' + (folder ? '/' + folder : ''))
      .filter((staticPage) => {
        return ![
          'app',
          'admin',
          'api',
          '_app.js',
          '_document.js',
          '404.js',
          'sitemap.xml.js',
        ].includes(staticPage)
      })
      .reduce((acc, filename) => {
        if (filename.search('.js') === -1)
          return [...acc, ...getRecirsiveStaticPaths(folder + '/' + filename)]
        return [
          ...acc,
          `${site_url}${
            folder + '/' + filename.replace('.js', '').replace('index', '')
          }`,
        ]
      }, [])
  const paths = getRecirsiveStaticPaths()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (url) =>
      `<url>
					<loc>${url}</loc>
					<lastmod>${new Date().toISOString()}</lastmod>
					<changefreq>monthly</changefreq>
					<priority>1.0</priority>
			</url>`
  )
  .join('')}
	</urlset>
`
  console.log(sitemap)
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
