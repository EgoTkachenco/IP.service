/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  rewrites: async () => {
    return [
      // Main service
      {
        source: '/:ip',
        has: [
          {
            type: 'query',
            key: 'token',
          },
        ],
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:ip?token=:token`,
      },
      // ASN service
      {
        source: '/asn/:ip',
        has: [
          {
            type: 'query',
            key: 'token',
          },
        ],
        destination: `${process.env.NEXT_PUBLIC_API_URL}/asn/:ip?token=:token`,
      },
      // Domains service
      {
        source: '/domains/:ip',
        has: [
          {
            type: 'query',
            key: 'token',
          },
        ],
        destination: `${process.env.NEXT_PUBLIC_API_URL}/domains/:ip?token=:token`,
      },
      // Ranges service
      {
        source: '/ranges/:ip',
        has: [
          {
            type: 'query',
            key: 'token',
          },
        ],
        destination: `${process.env.NEXT_PUBLIC_API_URL}/ranges/:ip?token=:token`,
      },
      // Whois service
      {
        source: '/whois/:ip',
        has: [
          {
            type: 'query',
            key: 'token',
          },
        ],
        destination: `${process.env.NEXT_PUBLIC_API_URL}/whois/:ip?token=:token`,
      },
      // flags
      {
        source: '/flags/:id',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/flag/:id`,
      },
    ]
  },
}

module.exports = nextConfig
