/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'links.papareact.com',
      'lh3.googleusercontent.com',
      'mosaic.scdn.co',
      'i.scdn.co',
    ],
  },
};

module.exports = nextConfig;
