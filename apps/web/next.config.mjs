/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  transpilePackages: ['@schoolopedia/types', '@schoolopedia/config'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
