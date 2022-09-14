/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'www.google.com', 'cdn.vox-cdn.com'],

  },
}

module.exports = nextConfig
