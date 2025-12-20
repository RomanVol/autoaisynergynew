/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better SEO
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
