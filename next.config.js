/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/flags/:id',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/flag/:id`,
      },
    ]
  },
}

module.exports = nextConfig
