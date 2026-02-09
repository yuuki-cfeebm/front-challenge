/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.superherodb.com',
        pathname: '/**', // Permite qualquer caminho dentro desse domínio
      },
      {
        protocol: 'https',
        hostname: 'cdn.superheroapi.com',
        pathname: '/**',
      },
    
    ]
  }
};

export default nextConfig;
