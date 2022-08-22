/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'agile-basin-81455.herokuapp.com']
  }
}

module.exports = nextConfig
