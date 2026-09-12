/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@schoolopedia/types', '@schoolopedia/config'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
