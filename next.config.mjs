/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'appwrite.io',
      },
      {
        protocol: 'https',
        hostname: 'appwrite.io',
      },
    ],
  },
};

export default nextConfig;
