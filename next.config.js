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
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
  }

module.exports = nextConfig
