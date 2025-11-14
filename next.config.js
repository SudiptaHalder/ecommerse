/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'framerusercontent.com',
      'images.unsplash.com'
    ],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig