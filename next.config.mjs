/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.superherodb.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'superherodb.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;