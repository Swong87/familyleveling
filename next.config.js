/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    domains: ['i.etsystatic.com'],
  },
  trailingSlash: true,
}

module.exports = nextConfig

