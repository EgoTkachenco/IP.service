const fs = require('fs')
const path = require('path')

const site_url = 'https://spyskey.com'

const getRangeList = (range = '', allowed = []) => {
  let level = 0
  if (!range) level = 1
  else {
    const tail = range.split('/')[1]
    if (!tail || isNaN(Number(tail))) level = 1
    else level = Math.ceil(tail / 8) + 1
  }

  const tail = level * 8
  const levelItems = new Array(255)
    .fill(0)
    .map((el, i) => i + 1)
    .filter((el) =>
      level === 1 && allowed.length > 0 ? allowed.includes(el) : el
    )

  const prefix = range.split('.').filter((el) => Number(el))
  const result = []
  for (let i = 0; i < levelItems.length; i++) {
    const element = levelItems[i]
    const base = prefix.concat(element)

    if (level === 4) {
      const address = base.join('.')
      if (element !== 255)
        result.push({
          address: address,
        })
    } else {
      const addressRange = `${base
        .concat(new Array(4 - level).fill(0))
        .join('.')}/${tail}`
      const firstAddress = base.concat(new Array(4 - level).fill(0)).join('.')
      const lastAddress = base
        .concat(
          new Array(4 - level)
            .fill(255)
            .map((el, i) => (i === 4 - level - 1 ? 254 : el))
        )
        .join('.')
      result.push({
        range: addressRange,
        firstAddress: firstAddress,
        lastAddress: lastAddress,
      })
    }
  }

  return result
}

const generateRangeSitemap = (range) => {
  const ranges = []
  const ranges_level_1 = getRangeList('', [range])
  ranges_level_1.forEach(({ range }) => ranges.push(range))

  const ranges_level_2 = ranges_level_1
    .map((range) => getRangeList(range.range))
    .reduce((acc, el) => [...acc, ...el], [])
  ranges_level_2.forEach(({ range }) => ranges.push(range))

  const ranges_level_3 = ranges_level_2
    .map((range) => getRangeList(range.range))
    .reduce((acc, el) => [...acc, ...el], [])
  ranges_level_3.forEach(({ range }) => ranges.push(range))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ranges
  .map(
    (url) =>
      `<url>
	<loc>${site_url}/ips/${url}</loc>
</url>`
  )
  .join('\n')}
	</urlset>
`
  const filename = `sitemap-range-${range}.xml`
  fs.writeFileSync(path.join(__dirname, '../public/', filename), sitemap)
  return filename
}

const getRecirsiveStaticPaths = (folder = '') =>
  fs
    .readdirSync(
      path.join(__dirname, '../pages') + (folder ? '/' + folder : '')
    )
    .filter((staticPage) => {
      return ![
        'app',
        'admin',
        'flags',
        'api',
        '_app.js',
        '_document.js',
        '404.js',
        'sitemap.xml.js',
        'payment-success.js',
        'payment-cancel.js',
        'summary',
        'ips',
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

const generateStaticSitemap = () => {
  const paths = getRecirsiveStaticPaths()
  paths.push(`${site_url}/ips`)
  paths.push(`${site_url}/summary`)

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
  .join('\n')}
	</urlset>
`
  const filename = `sitemap-static.xml`
  fs.writeFileSync(path.join(__dirname, '../public/', filename), sitemap)
  return filename
}

const generateSitemapIndex = (sitemapsNames) => {
  const sitemap = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${sitemapsNames
    .map(
      (sitemap) => `<sitemap>
	<loc>${site_url}/${sitemap}</loc>
</sitemap>`
    )
    .join('\n')}
</sitemapindex>`

  const filename = `sitemap.xml`
  fs.writeFileSync(path.join(__dirname, '../public/', filename), sitemap)
}
const ranges = [104, 172]
const sitemapsNames = []
for (let i = 0; i < ranges.length; i++) {
  const range = ranges[i]
  sitemapsNames.push(generateRangeSitemap(range))
}
sitemapsNames.push(generateStaticSitemap())

generateSitemapIndex(sitemapsNames)
