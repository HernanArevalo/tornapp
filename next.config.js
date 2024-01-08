/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'apiv3.apifootball.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.sportmonks.com',
        },
      ],
    },
  }

module.exports = nextConfig
